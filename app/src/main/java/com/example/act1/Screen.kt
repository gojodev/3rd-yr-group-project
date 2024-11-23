package com.example.act1

sealed class Screen(val route: String) {
    object Home : Screen("Home")
    object Premium : Screen("Premium")
    object Support : Screen("Support")
    object Rate : Screen("Rate Us")
    object Signup : Screen("Sign Up")
    object Login : Screen("Login")
    object Assets : Screen("Assets")
}