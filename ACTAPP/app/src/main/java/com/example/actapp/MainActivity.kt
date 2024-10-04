package com.example.actapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.*
import com.example.actapp.ui.theme.ACTAPPTheme

sealed class Screen(val route: String) {
    object Home : Screen("Home")
    object Register : Screen("Register")
    object Login : Screen("Login")
    object Premium : Screen("Premium")
    object Support : Screen("Support")
    object Rate : Screen("Rate Us")
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ACTAPPTheme {
                var isDarkTheme by remember { mutableStateOf(false) }
                val backgroundColor = if (isDarkTheme) {
                    Brush.horizontalGradient(
                        listOf(
                            Color(7, 3, 122),
                            Color(7, 0, 10),
                            Color(8, 105, 3)
                        )
                    )
                } else {
                    Brush.horizontalGradient(
                        listOf(
                            Color(185, 5, 41),
                            Color(237, 97, 4),
                            Color(185, 5, 41)
                        )
                    )
                }
                val textColor = if (isDarkTheme) Color.White else Color.Black

                val navController = rememberNavController()
                Box(modifier = Modifier
                    .fillMaxSize()
                    .background(backgroundColor)) {
                    NavHost(navController, startDestination = Screen.Home.route) {
                        composable(Screen.Home.route) {
                            HomeScreen(
                                navController,
                                backgroundColor,
                                textColor
                            )
                        }
                        composable(Screen.Register.route) {
                            RegisterScreen(
                                navController,
                                backgroundColor,
                                textColor
                            )
                        }
                        composable(Screen.Login.route) {
                            LoginScreen(
                                navController,
                                backgroundColor,
                                textColor
                            )
                        }
                        composable(Screen.Premium.route) {
                            PremiumScreen(
                                navController,
                                backgroundColor,
                                textColor
                            )
                        }
                        composable(Screen.Support.route) {
                            SupportScreen(
                                navController,
                                backgroundColor,
                                textColor
                            )
                        }
                        composable(Screen.Rate.route) {
                            RateScreen(
                                navController,
                                backgroundColor,
                                textColor
                            )
                        }
                    }


                    Button(
                        onClick = { isDarkTheme = !isDarkTheme },
                        modifier = Modifier
                            .align(Alignment.BottomStart)
                            .padding(16.dp)
                    ) {
                        Text(text = "SWITCH THEME")
                    }
                }
            }
        }
    }
}

@Composable
fun HomeScreen(navController: NavHostController, backgroundColor: Brush, textColor: Color) {
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
            Text(text = "HOME", color = textColor)
            Button(onClick = { navController.navigate(Screen.Register.route) }) {
                Text(text = "REGISTER", color = textColor)
            }
            Button(onClick = { navController.navigate(Screen.Login.route) }) {
                Text(text = "LOGIN", color = textColor)
            }
            Button(onClick = { navController.navigate(Screen.Premium.route) }) {
                Text(text = "PREMIUM", color = textColor)
            }
            Button(onClick = { navController.navigate(Screen.Support.route) }) {
                Text(text = "SUPPORT", color = textColor)
            }
            Button(onClick = { navController.navigate(Screen.Rate.route) }) {
                Text(text = "RATE US", color = textColor)
            }
        }
    }
}

@Composable
fun RegisterScreen(navController: NavHostController, backgroundColor: Brush, textColor: Color) {
    ScreenContent(title = "Register", navController = navController, backgroundColor, textColor)
}

@Composable
fun LoginScreen(navController: NavHostController, backgroundColor: Brush, textColor: Color) {
    ScreenContent(title = "Login", navController = navController, backgroundColor, textColor)
}

@Composable
fun PremiumScreen(navController: NavHostController, backgroundColor: Brush, textColor: Color) {
    ScreenContent(title = "Premium", navController = navController, backgroundColor, textColor)
}

@Composable
fun SupportScreen(navController: NavHostController, backgroundColor: Brush, textColor: Color) {
    ScreenContent(title = "Support", navController = navController, backgroundColor, textColor)
}

@Composable
fun RateScreen(navController: NavHostController, backgroundColor: Brush, textColor: Color) {
    ScreenContent(title = "Rate Us", navController = navController, backgroundColor, textColor)
}

@Composable
fun ScreenContent(
    title: String,
    navController: NavHostController,
    backgroundColor: Brush,
    textColor: Color
) {
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
            Text(text = title, color = textColor)
            Button(onClick = { navController.navigate(Screen.Home.route) }) {
                Text(text = "HOME", color = textColor)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    ACTAPPTheme {
        HomeScreen(
            rememberNavController(),
            Brush.horizontalGradient(
                listOf(
                    Color(185, 5, 41),
                    Color(237, 97, 4),
                    Color(185, 5, 41)
                )
            ),
            Color.Black
        )
    }
}
