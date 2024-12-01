package com.example.act1
import android.content.Context
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.*
import com.example.act1.ui.theme.ACT1Theme
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import com.stripe.android.PaymentConfiguration
import com.stripe.android.paymentsheet.rememberPaymentSheet
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import com.github.kittinunf.fuel.httpPost
import com.github.kittinunf.fuel.json.responseJson
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response



@Serializable
data class UserRequest(val name: String, val username: String, val email: String, val password: String, val operation: String, val type: String)

@Serializable
data class UserResponse(
    val verdict: Boolean,
    val correctEmail: Boolean,
    val correctPassword: Boolean,
    val correctName: Boolean
)


suspend fun verifyUserClient(
    username: String,
    name: String,
    email: String,
    password: String,
    operation: String,
    type: String
): Result<UserResponse> {
    val client = HttpClient(CIO) {
        this.install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
                ignoreUnknownKeys = true
            })
        }
    }

    return try {
        val response = client.post("https://userops-ieevug7ulq-nw.a.run.app") {
            contentType(ContentType.Application.Json)
            setBody(UserRequest(username, name, email, password, operation, type))
        }

        if (response.status.isSuccess()) {
            val responseBody = response.body<UserResponse>()
            Result.success(responseBody)
        } else {
            Result.failure(Exception("Request failed with status: ${response.status}"))
        }
    } catch (e: Exception) {
        Result.failure(e)
    } finally {
        client.close()
    }
}



class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        PaymentConfiguration.init(
            applicationContext,
            "pk_test_51QREz2KfPDk2OBGM374jk38CqaX3Dyp016T5g91TkOofYKVBKkeqhCqg39J4wQCyZMi7tKGBzREKdPkXHpBGxWv400NOv8Jk1A"
        )
        enableEdgeToEdge()
        setContent {
            ACT1Theme {
                val paymentSheet = rememberPaymentSheet(::onPaymentSheetResult)
                val context = LocalContext.current
                var customerConfig by remember { mutableStateOf<PaymentSheet.CustomerConfiguration?>(null) }
                var paymentIntentClientSecret by remember { mutableStateOf<String?>(null) }

//                LaunchedEffect(context) {
//                    "http://10.0.2.2:5000/payment-sheet".httpPost().responseJson { request, response, result ->
//                        result.fold(
//                            success = { jsonResponse ->
//                                try {
//                                    val responseJson = jsonResponse.obj()
//                                    paymentIntentClientSecret = responseJson.getString("paymentIntent")
//                                    customerConfig = PaymentSheet.CustomerConfiguration(
//                                        id = responseJson.getString("customer"),
//                                        ephemeralKeySecret = responseJson.getString("ephemeralKey")
//                                    )
//                                    val publishableKey = responseJson.getString("publishableKey")
//                                    PaymentConfiguration.init(context, publishableKey)
//                                } catch (e: Exception) {
//                                    println("Error parsing response: ${e.message}")
//                                }
//                            },
//                            failure = { error ->
//                                println("Request failed: ${error.message}")
//                            }
//                        )
//                    }
//                }



                var isDarkTheme by remember { mutableStateOf(false) }
                var showBottomBar by remember { mutableStateOf(true) }
                val backgroundColor = if (isDarkTheme) {
                    Brush.horizontalGradient(listOf(Color(7, 3, 122), Color(7, 0, 10), Color(8, 105, 3)))
                } else {
                    Brush.horizontalGradient(listOf(Color(185, 5, 41), Color(237, 97, 4), Color(185, 5, 41)))
                }
                val navController = rememberNavController()
                var selectedIndex by remember { mutableIntStateOf(0) }
                LaunchedEffect(navController) {
                    navController.addOnDestinationChangedListener { _, destination, _ ->
                        showBottomBar = destination.route !in listOf(Screen.Signup.route, Screen.Login.route)
                    }
                }

                Scaffold(
                    modifier = Modifier.fillMaxSize(),
                    bottomBar = {
                        if (showBottomBar) {

                            BottomAppBar(containerColor = Color(36, 35, 49)) {
                                NavigationBar(containerColor = Color(36, 35, 49)) {
                                    navItemList.forEachIndexed { index, item ->
                                        NavigationBarItem(
                                            icon = { Icon(item.icon, contentDescription = null, tint = Color.White) },
                                            label = { Text(item.label, color = Color.White) },
                                            selected = selectedIndex == index,
                                            onClick = {
                                                selectedIndex = index
                                                if (navController.currentDestination?.route != item.screen.route) {
                                                    navController.navigate(item.screen.route) {
                                                        launchSingleTop = true
                                                        restoreState = true
                                                    }
                                                }
                                            }
                                        )
                                    }
                                }
                            }
                        }
                    }
                ) { paddingValues ->
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(backgroundColor)
                            .padding(paddingValues)
                    ) {
                        NavHost(navController = navController, startDestination = Screen.Signup.route) {
                            composable(Screen.Home.route) { HomeScreen(navController, backgroundColor) }
                            composable(Screen.Premium.route) { PremiumScreen(navController, backgroundColor) }
                            composable(Screen.Support.route) { SupportScreen(navController, backgroundColor) }
                            composable(Screen.Rate.route) { RateScreen(navController, backgroundColor) }
                            composable(Screen.Signup.route) { SignupScreen(navController, backgroundColor) }
                            composable(Screen.Login.route) { LoginScreen(navController, backgroundColor) }
                            composable(Screen.Assets.route) { AssetsScreen(navController, backgroundColor) }
                        }

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            LaunchedEffect(context) {
                                fetchPaymentSheetData(context)
                            }
//                            Button(
//                                onClick = {
//                                    val currentConfig = customerConfig
//                                    val currentClientSecret = paymentIntentClientSecret
//
//                                    if (currentConfig != null && currentClientSecret != null) {
//                                        presentPaymentSheet(paymentSheet, currentConfig, currentClientSecret)
//                                    }
//                                }, colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White),
//                                modifier = Modifier.padding(16.dp)
//                            ) {
//                                Text("Subscribe to ACT Premium")
//                            }
                            Button(
                                onClick = { isDarkTheme = !isDarkTheme },
                                modifier = Modifier.padding(16.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White)
                            ) {
                                Text(text = "Theme")
                            }
                        }
                    }
                }
            }
        }
    }
}

fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {
    when(paymentSheetResult) {
        is PaymentSheetResult.Canceled -> {
            print("Canceled")
        }
        is PaymentSheetResult.Failed -> {
            print("Error: ${paymentSheetResult.error}")
        }
        is PaymentSheetResult.Completed -> {
            print("Completed")

        }
    }
}

fun presentPaymentSheet(
    paymentSheet: PaymentSheet,
    customerConfig: PaymentSheet.CustomerConfiguration,
    paymentIntentClientSecret: String
) {
    paymentSheet.presentWithPaymentIntent(
        paymentIntentClientSecret,
        PaymentSheet.Configuration(
            merchantDisplayName = "My merchant name",
            customer = customerConfig,
            // Set `allowsDelayedPaymentMethods` to true if your business handles
            // delayed notification payment methods like US bank accounts.
            allowsDelayedPaymentMethods = true
        )
    )
}

suspend fun fetchPaymentSheetData(context: Context) {
    val client = OkHttpClient()  // OkHttp client

    // Perform the HTTP request asynchronously
    try {
        val request = Request.Builder()
            .url("http://10.0.2.2:5000/payment-sheet")
            .build()

        // Perform the request on the IO dispatcher
        val response: Response = withContext(Dispatchers.IO) {
            client.newCall(request).execute()  // Execute the request
        }

        if (response.isSuccessful) {
            // Read the response body and parse as JSON
            val jsonResponse = JSONObject(response.body?.string())  // Parse response text

            val paymentIntentClientSecret = jsonResponse.getString("paymentIntent")
            val customerConfig = PaymentSheet.CustomerConfiguration(
                id = jsonResponse.getString("customer"),
                ephemeralKeySecret = jsonResponse.getString("ephemeralKey")
            )
            val publishableKey = jsonResponse.getString("publishableKey")

            // Initialize payment configuration with the publishable key
            PaymentConfiguration.init(context, publishableKey)

        } else {
            println("Request failed with status code: ${response.code}")
        }
    } catch (e: Exception) {
        // Handle errors (network or JSON parsing)
        println("Error processing payment sheet data: ${e.message}")
    }
}

