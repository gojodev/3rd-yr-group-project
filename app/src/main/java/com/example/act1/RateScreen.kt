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
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RateScreen(navController: NavHostController, backgroundColor: Brush) {
    // Manage the text state for the feedback
    val feedbackText = remember { mutableStateOf("") }

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
                style = MaterialTheme.typography.bodyMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(16.dp))
            Image(
                painter = painterResource(id = R.drawable.stars),
                contentDescription = "Stars",
                modifier = Modifier.size(150.dp),
                colorFilter = ColorFilter.tint(Color.White)
            )
            Spacer(modifier = Modifier.height(16.dp))
            // Feedback input TextField
            TextField(
                value = feedbackText.value,
                onValueChange = { feedbackText.value = it },
                placeholder = { Text("Enter your feedback", color = Color.Gray) },
                colors = androidx.compose.material3.TextFieldDefaults.textFieldColors(
                    containerColor = Color(36, 35, 49),
                    cursorColor = Color.White
                ),
                modifier = Modifier
                    .padding(horizontal = 16.dp)
            )
            Spacer(modifier = Modifier.height(16.dp))
            Button(
                onClick = {
//                    sendRating(feedbackText.value)
                    navController.navigate(Screen.Premium.route)
                },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(36, 35, 49),
                    contentColor = Color.White
                ),
                modifier = Modifier.padding(16.dp)
            ) {
                Text(text = "Rate Us Now")
            }
        }
    }
}
//fun sendRating(feedback: String) {
//    println("Sending feedback: $feedback")
//     CoroutineScope(Dispatchers.IO).launch {
//         val response = httpClient(CIO).post("https://your-backend-api.com/feedback") {
//             body = FeedbackRequest(feedback)
//         }
//         // Handle response if needed
//     }
//}
