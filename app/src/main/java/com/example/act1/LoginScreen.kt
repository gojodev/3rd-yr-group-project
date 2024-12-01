package com.example.act1

import android.util.Log
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
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
import com.google.gson.Gson
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.http.isSuccess
import kotlinx.coroutines.launch

@Composable
fun LoginScreen(navController: NavHostController, backgroundColor: Brush) {
    var name by remember { mutableStateOf("first1 last1") }
    var username by remember { mutableStateOf("user1") }
    var email by remember { mutableStateOf("user1@gmail.com") }
    var password by remember { mutableStateOf("user1_password!") }
    var errorMessage by remember { mutableStateOf("") }
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
                text = "Welcome Back.",
                style = MaterialTheme.typography.displayMedium,
                color = Color.White,
                modifier = Modifier.padding(bottom = 32.dp)
            )

            // No nullable types here, we use non-nullable String.
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

            // Function to verify the user with Ktor client
            suspend fun verifyUserClient(
                username: String,
                name: String,
                email: String,
                password: String,
                operation: String,
                type: String
            ): UserResponse? {
                val client = HttpClient(CIO)

                return try {

                    val userRequest = UserRequest(name, username, email, password, operation, type)

                    val gson = Gson()
                    val jsonRequestBody = gson.toJson(userRequest)

                    val response = client.post("https://userops-ieevug7ulq-nw.a.run.app") {
                        this.contentType(ContentType.Application.Json)
                        setBody(jsonRequestBody)
                    }

                    val responseBody = response.bodyAsText()

                    Log.d("RawResponseBody", responseBody)

                    if (response.status.isSuccess()) {
                        try {
                            return gson.fromJson(responseBody, UserResponse::class.java)
                        } catch (e: Exception) {
                            Log.e("GsonParsingError", "Error parsing response: ${e.message}")
                            if (responseBody.startsWith("{")) {
                                return gson.fromJson(responseBody, UserResponse::class.java)
                            } else {

                                Log.e("ResponseError", "Unexpected response format: $responseBody")
                                return null
                            }
                        }
                    } else {
                        Log.e("Error", "Failed to verify user. Status: ${response.status}")
                        return null
                    }
                } catch (e: Exception) {
                    Log.e("Exception", "Request failed: ${e.message}")
                    return null
                } finally {
                    client.close()
                }
            }

            Button(
                onClick = {
                    coroutineScope.launch {
                        try {
                            val result = verifyUserClient(
                                username = username.trim(),
                                name = name.trim(),
                                email = email.trim(),
                                password = password.trim(),
                                operation = "verify",
                                type = "admin"
                            )
                            if (result != null) {
                                if (result.verdict) {
                                    try {
                                        navController.navigate(Screen.Home.route) {
                                            popUpTo(Screen.Login.route) { inclusive = true }
                                        }
                                    } catch (e: Exception) {
                                        errorMessage = "Navigation failed: ${e.message ?: "Unknown error"}"
                                    }
                                } else {
                                    // Handle specific response errors
                                    errorMessage = buildString {
                                        append("Verification failed: ")
                                        if (!result.correctEmail) append("\n- Invalid email")
                                        if (!result.correctPassword) append("\n- Incorrect password")
                                        if (!result.correctName) append("\n- Name mismatch")
                                    }
                                }
                            } else {
                                errorMessage = "Error verifying user: Request failed or server error."
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
                Text("Login")
            }

            Button(
                onClick = { navController.navigate(Screen.Login.route) },
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(36, 35, 49),
                    contentColor = Color.White
                )
            ) {
                Text("Signup")
            }

            // Display error message if any
            errorMessage.let { error ->
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


