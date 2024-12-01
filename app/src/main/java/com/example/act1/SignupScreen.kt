package com.example.act1

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
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
    var errorMessage by remember { mutableStateOf<String?>(null) }
    val coroutineScope = rememberCoroutineScope()

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 32.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = "Create Your Account.",
                style = MaterialTheme.typography.displayMedium,
                color = Color.White,
                modifier = Modifier.padding(bottom = 32.dp)
            )
            TextField(
                value = name,
                onValueChange = { name = it },
                label = { Text("Name") },
                colors = TextFieldDefaults.colors(
                    unfocusedContainerColor = Color(36, 35, 49),
                    focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                    unfocusedLabelColor = Color.White,
                    focusedLabelColor = Color.White,
                    unfocusedTextColor = Color.White,
                    focusedTextColor = Color.White
                ),
                modifier = Modifier.fillMaxWidth()
            )

            TextField(
                value = username,
                onValueChange = { username = it },
                label = { Text("Username") },
                colors = TextFieldDefaults.colors(
                    unfocusedContainerColor = Color(36, 35, 49),
                    focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                    unfocusedLabelColor = Color.White,
                    focusedLabelColor = Color.White,
                    unfocusedTextColor = Color.White,
                    focusedTextColor = Color.White
                ),
                modifier = Modifier.fillMaxWidth()
            )

            TextField(
                value = email,
                onValueChange = { email = it },
                label = { Text("Email") },
                colors = TextFieldDefaults.colors(
                    unfocusedContainerColor = Color(36, 35, 49),
                    focusedContainerColor = Color(36, 35, 49).copy(alpha = 0.7f),
                    unfocusedLabelColor = Color.White,
                    focusedLabelColor = Color.White,
                    unfocusedTextColor = Color.White,
                    focusedTextColor = Color.White
                ),
                modifier = Modifier.fillMaxWidth()
            )

            TextField(
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
                    focusedTextColor = Color.White
                ),
                modifier = Modifier.fillMaxWidth()
            )

            Button(
                onClick = {
                    coroutineScope.launch {
                        try {
                            val result = verifyUserClient(
                                username = username.trim(),
                                name = name.trim(),
                                email = email.trim(),
                                password = password.trim(),
                                operation = "create",
                                type = "admin"
                            )

                            result.onSuccess { response ->
                                if (response.verdict) {
                                    try {
                                        navController.navigate(Screen.Home.route) {
                                            popUpTo(Screen.Signup.route) { inclusive = true }
                                        }
                                    } catch (e: Exception) {
                                        errorMessage = "Navigation failed: ${e.message ?: "Unknown error"}"
                                    }
                                } else {
                                    errorMessage = buildString {
                                        append("Signup failed:")
                                        if (!response.correctEmail) append("\n- Invalid email")
                                        if (!response.correctPassword) append("\n- Weak password")
                                        if (!response.correctName) append("\n- Name mismatch")
                                    }
                                }
                            }.onFailure { exception ->
                                errorMessage = "Error during signup: ${exception.message ?: "Unknown error"}"
                            }
                        } catch (e: Exception) {
                            errorMessage = "Unexpected error: ${e.message ?: "Unknown error"}"
                        }
                    }
                },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(36, 35, 49),
                    contentColor = Color.White
                ),
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Sign Up")
            }

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

            errorMessage?.let { error ->
                if (error.isNotEmpty()) {
                    Text(
                        text = error,
                        color = Color.Red,
                        modifier = Modifier.padding(top = 8.dp)
                    )
                }
            }
        }
    }
}