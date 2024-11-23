package com.example.act1

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.ThumbUp

data class NavItem(val label: String, val icon: androidx.compose.ui.graphics.vector.ImageVector, val screen: Screen)

val navItemList = listOf(
    NavItem("Home", Icons.Default.Home, Screen.Home),
    NavItem("Assets", Icons.Default.Menu, Screen.Assets),
    NavItem("Premium", Icons.Default.Star, Screen.Premium),
    NavItem("Support", Icons.Default.Person, Screen.Support),
    NavItem("Rate Us", Icons.Default.ThumbUp, Screen.Rate)
)