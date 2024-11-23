package com.example.act1

import android.util.Log
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import kotlinx.coroutines.launch

@Composable
fun SignupScreen(navController: NavHostController, backgroundColor: Brush) {
    var name by remember { mutableStateOf("first4 last4") }
    var username by remember { mutableStateOf("user4") }
    var email by remember { mutableStateOf("user4@gmail.com") }
    var password by remember { mutableStateOf("user4_password!") }
    var errorMessage by remember { mutableStateOf("") }
    val coroutineScope = rememberCoroutineScope()

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
                    modifier = Modifier.fillMaxWidth(),
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Name") },
                    colors = TextFieldDefaults.colors(
                        unfocusedContainerColor = Color(36, 35, 49),
                        focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                        unfocusedLabelColor = Color.White,
                        focusedLabelColor = Color.White,
                        unfocusedTextColor = Color.White,
                        focusedTextColor = Color.White)
                )
            }
            item {
                TextField(
                    modifier = Modifier.fillMaxWidth(),
                    value = username,
                    onValueChange = { username = it },
                    label = { Text("Username") },
                    colors = TextFieldDefaults.colors(
                        unfocusedContainerColor = Color(36, 35, 49),
                        focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                        unfocusedLabelColor = Color.White,
                        focusedLabelColor = Color.White,
                        unfocusedTextColor = Color.White,
                        focusedTextColor = Color.White)
                )

            }
            item {
                TextField(
                    modifier = Modifier.fillMaxWidth(),
                    value = email,
                    onValueChange = { email = it },
                    label = { Text("Email") },
                    colors = TextFieldDefaults.colors(
                        unfocusedContainerColor = Color(36, 35, 49),
                        focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                        unfocusedLabelColor = Color.White,
                        focusedLabelColor = Color.White,
                        unfocusedTextColor = Color.White,
                        focusedTextColor = Color.White)
                )
            }
            item {
                TextField(
                    modifier = Modifier.fillMaxWidth(),
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Password") },
                    visualTransformation = PasswordVisualTransformation(),
                    colors = TextFieldDefaults.colors(
                        unfocusedContainerColor = Color(36, 35, 49),
                        focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                        unfocusedLabelColor = Color.White,
                        focusedLabelColor = Color.White,
                        unfocusedTextColor = Color.White,
                        focusedTextColor = Color.White)
                )
            }
            item {
                Button(
                    onClick = {
                        coroutineScope.launch {
                            val result = verifyUserClient(
                                username = username,
                                name = name,
                                email = email,
                                password = password,
                                operation = "create",
                                type = "admin"
                            )

                            result.onSuccess { response ->
                                if (response.verdict) {
                                    try {
                                        Log.d("SignupScreen", "Signup successful. Navigating to Home.")
                                        navController.navigate(Screen.Home.route) {
                                            popUpTo(Screen.Signup.route) { inclusive = true }
                                        }
                                    } catch (e: Exception) {
                                        Log.e("NavigationError", "Error during navigation: ${e.message}")
                                    }
                                } else {
                                    errorMessage = buildString {
                                        append("Signup failed:")
                                        if (!response.correctEmail) append("\n- Invalid email")
                                        if (!response.correctPassword) append("\n- Weak password")
                                        if (!response.correctName) append("\n- Name mismatch")
                                    }
                                    Log.d("SignupScreen", "Signup failed: $errorMessage")
                                }
                            }.onFailure { exception ->
                                errorMessage = "Error during signup: ${exception.message}"
                                Log.e("SignupScreen", "Error during signup: ${exception.message}")
                            }
                        }
                    },modifier= Modifier.fillMaxWidth(),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color(36, 35, 49),
                        contentColor = Color.White
                    )
                ) {
                    Text("Sign Up")
                }
                Spacer(modifier = Modifier.height(16.dp))
                Button(
                    onClick = { navController.navigate(Screen.Login.route) },
                    modifier = Modifier.fillMaxWidth(),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color(36, 35, 49),
                        contentColor = Color.White
                    )
                ) {
                    Text("Login")
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