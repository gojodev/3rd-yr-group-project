package com.example.act1

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController

@Composable
fun RateScreen(navController: NavHostController, backgroundColor: Brush) {
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
            Text(
                text = "We Value Your Feedback!",
                style = MaterialTheme.typography.headlineMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Help us improve by rating your experience or sharing your thoughts.",
                style = MaterialTheme.typography.headlineMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(24.dp))
            Image(painter = painterResource(id = R.drawable.stars),
                contentDescription = "Stars",
                modifier = Modifier.size(150.dp),
                colorFilter = ColorFilter.tint(Color.White))
            Button(
                onClick = {
                    navController.navigate(Screen.Premium.route)
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(36,35,49), contentColor = Color.White),
                modifier = Modifier.padding(16.dp)
            ) {
                Text(text = "Rate Us Now")
            }
        }
    }
}