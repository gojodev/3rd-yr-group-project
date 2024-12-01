package com.example.act1
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.ThumbUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.*
import com.example.act1.ui.theme.ACT1Theme
import com.google.gson.Gson
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.launch
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json



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
                explicitNulls = false
            })
        }
    }

    return try {
        val response = client.post("https://userops-ieevug7ulq-nw.a.run.app") {
            contentType(ContentType.Application.Json)
            setBody(UserRequest(name, username, email, password, operation, type))
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
































