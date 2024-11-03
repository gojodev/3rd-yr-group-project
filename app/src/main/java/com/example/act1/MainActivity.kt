package com.example.act1

import android.content.Context
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.ThumbUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.*
import com.example.act1.ui.theme.ACT1Theme
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.json.JSONObject


@Serializable
data class ResponseData(
    val stocks: Map<String, Stock>,
    val cryptos: Map<String, Crypto>
)

@Serializable
data class UserRequest(val username: String, val name: String, val email: String, val password: String)

@Serializable
data class UserResponse(val message: String, val userData: Map<String, Any>?)


suspend fun verifyUserClient(username: String, name: String, email: String, password: String): UserResponse? {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
                ignoreUnknownKeys = true
            })
        }
    }
    return try {
        client.post("http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager") {
            contentType(ContentType.Application.Json)
            setBody(UserRequest(username, name, email, password))
        }.body()
    } catch (e: Exception) {
        println("Error fetching user data: ${e.message}")
        null
    } finally {
        client.close()
    }
}

fun loadFinancialData(context: Context): JSONObject {
    val jsonString: String = context.assets.open("financial_data.json").bufferedReader().use { it.readText() }
    val obj: JSONObject = JSONObject(jsonString)
    return obj
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ACT1Theme {
                var isDarkTheme by remember { mutableStateOf(false) }
                var showBottomBar by remember { mutableStateOf(true) }

                val backgroundColor = if (isDarkTheme) {
                    Brush.horizontalGradient(listOf(Color(7, 3, 122), Color(7, 0, 10), Color(8, 105, 3)))
                } else {
                    Brush.horizontalGradient(listOf(Color(185, 5, 41), Color(237, 97, 4), Color(185, 5, 41)))
                }

                val navController = rememberNavController()
                var selectedIndex by remember { mutableStateOf(0) }

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
                            composable(Screen.Assets.route){ AssetsScreen(navController, backgroundColor) }
                        }

                        // Theme and Login Buttons
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Button(
                                onClick = { isDarkTheme = !isDarkTheme },
                                modifier = Modifier.padding(16.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White)
                            ) {
                                Text(text = "THEME")
                            }
                            Spacer(modifier = Modifier.weight(1f))
                            Button(
                                onClick = { navController.navigate(Screen.Login.route) },
                                modifier = Modifier.padding(16.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White)
                            ) {
                                Text("LOGIN")
                            }
                        }
                    }
                }
            }
        }
    }
}

// Navigation Screen Definitions
sealed class Screen(val route: String) {
    object Home : Screen("Home")
    object Premium : Screen("Premium")
    object Support : Screen("Support")
    object Rate : Screen("Rate Us")
    object Signup : Screen("Sign Up")
    object Login : Screen("Login")
    object Assets : Screen("Assets")
}

// Navigation Item Class
data class NavItem(val label: String, val icon: androidx.compose.ui.graphics.vector.ImageVector, val screen: Screen)

val navItemList = listOf(
    NavItem("Home", Icons.Default.Home, Screen.Home),
    NavItem("Assets", Icons.Default.Menu, Screen.Assets),
    NavItem("Premium", Icons.Default.Star, Screen.Premium),
    NavItem("Support", Icons.Default.Person, Screen.Support),
    NavItem("Rate Us", Icons.Default.ThumbUp, Screen.Rate)
)

// Data Classes for Stock and Crypto
data class Stock(
    val name: String,
    val currentPrice: Double,
    val marketCap: Long,
    val volume: Long,
    val fiftyTwoWeekHigh: Double,
    val fiftyTwoWeekLow: Double,

)

data class Crypto(
    val name: String,
    val currentPrice: Double,
    val marketCap: Long,
    val volume: Long,
    val fiftyTwoWeekHigh: Double,
    val fiftyTwoWeekLow: Double
)

// Assets Screen Composable
@Composable
fun AssetsScreen(navController: NavHostController, background: Brush) {
    // Load financial data
    val context = LocalContext.current
    val financialData = remember { loadFinancialData(context) }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(background),
        contentAlignment = Alignment.Center
    ) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.Start,
            verticalArrangement = Arrangement.spacedBy(8.dp),
            contentPadding = PaddingValues(16.dp)
        ) {
            item {
                Text(text = "Stocks", style = MaterialTheme.typography.bodySmall, color = Color.White)
            }

            val stocks = financialData.getJSONObject("stocks")
            stocks.keys().forEach { key ->
                item {
                    val stock = stocks.getJSONObject(key)
                    Text(
                        text = "${stock.getString("name")} : ${stock.getDouble("currentPrice")}",
                        color = Color.White
                    )
                }
            }

            item {
                Spacer(modifier = Modifier.height(16.dp))
                Text(text = "Cryptos", style = MaterialTheme.typography.bodySmall, color = Color.White)
            }

            val cryptos = financialData.getJSONObject("cryptos")
            cryptos.keys().forEach { key ->
                item {
                    val crypto = cryptos.getJSONObject(key)
                    Text(
                        text = "${crypto.getString("name")} : ${crypto.getDouble("currentPrice")}",
                        color = Color.White
                    )
                }
            }
        }
    }
}


// Home Screen Composable
@Composable
fun HomeScreen(navController: NavHostController, backgroundColor: Brush) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(text = "HOME", color = Color.White)
        }
    }
}

// Premium Screen Composable
@Composable
fun PremiumScreen(navController: NavHostController, backgroundColor: Brush) {
    ScreenContent(title = "Premium", navController = navController, backgroundColor)
}

// Support Screen Composable
@Composable
fun SupportScreen(navController: NavHostController, backgroundColor: Brush) {
    ScreenContent(title = "Support", navController = navController, backgroundColor)
}

// Rate Screen Composable
@Composable
fun RateScreen(navController: NavHostController, backgroundColor: Brush) {
    ScreenContent(title = "Rate Us", navController = navController, backgroundColor)
}

// Login Screen Composable
@Composable
fun LoginScreen(navController: NavHostController, backgroundColor: Brush) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
    var username by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf("") }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            TextField(
                value = email,
                onValueChange = { email = it },
                label = { Text("Email") }
            )
            TextField(
                value = password,
                onValueChange = { password = it },
                label = { Text("Password") },
                visualTransformation = PasswordVisualTransformation()
            )
            Button(
                onClick = {
                    CoroutineScope(Dispatchers.IO).launch {
                        val response = verifyUserClient(username, name, email, password)
                        response?.let {
                            if (it.message == "User verified") {
                                navController.navigate(Screen.Home.route) {
                                    popUpTo(Screen.Login.route) { inclusive = true }
                                }
                            } else {
                                errorMessage = it.message
                            }
                        } ?: run {
                            errorMessage = "Error verifying user."
                        }
                    }
                }
            ) {
                Text("Login")
            }
            if (errorMessage.isNotEmpty()) {
                Text(text = errorMessage, color = Color.Red)
            }
        }
    }
}

// Sign Up Screen Composable
@Composable
fun SignupScreen(navController: NavHostController, backgroundColor: Brush) {
    // State variables for user input and error message
    var name by remember { mutableStateOf("") }
    var username by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf("") }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        LazyColumn(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
            contentPadding = PaddingValues(16.dp)
        ) {
            item {
                Text(
                    text = "Fund Management Starts Here.",
                    style = MaterialTheme.typography.displayMedium,
                    color = Color.White,
                    modifier = Modifier.padding(bottom = 32.dp)
                )

            }
            item {
                TextField(
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Name") }
                )
            }
            item {
                TextField(
                    value = username,
                    onValueChange = { username = it },
                    label = { Text("Username") }
                )
            }
            item {
                TextField(
                    value = email,
                    onValueChange = { email = it },
                    label = { Text("Email") }
                )
            }
            item {
                TextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Password") },
                    visualTransformation = PasswordVisualTransformation()
                )
            }
            item {
                Button(
                    onClick = {
                        // Simulate signup logic and navigation on success
                        // Uncomment the coroutine block to implement actual signup logic
                        // CoroutineScope(Dispatchers.IO).launch {
                        //     // Perform your signup API call here
                        //     val response = verifyUserClient(username, name, email, password)
                        //     response?.let {
                        //         if (it.message == "User verified") {
                        //             navController.navigate(Screen.Home.route) {
                        //                 popUpTo(Screen.Signup.route) { inclusive = true }
                        //             }
                        //         } else {
                        //             errorMessage = it.message
                        //         }
                        //     } ?: run {
                        //         errorMessage = "Error during signup."
                        //     }
                        // }
                        navController.navigate(Screen.Home.route) // Temporary navigation
                    }
                ) {
                    Text("Sign Up")
                }
            }
            item {
                if (errorMessage.isNotEmpty()) {
                    Text(text = errorMessage, color = Color.Red)
                }
            }
        }
    }
}



// Common Screen Content
@Composable
fun ScreenContent(title: String, navController: NavHostController, backgroundColor: Brush) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Text(text = title, color = Color.White)
    }
}
