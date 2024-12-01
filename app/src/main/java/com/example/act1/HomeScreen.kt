package com.example.act1

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.github.kittinunf.fuel.httpPost
import com.github.kittinunf.fuel.json.responseJson
import com.stripe.android.PaymentConfiguration
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult
import com.stripe.android.paymentsheet.rememberPaymentSheet

// HomeScreen
@Composable
fun HomeScreen(navController: NavHostController, backgroundColor: Brush) {
    var customerConfig by remember { mutableStateOf<PaymentSheet.CustomerConfiguration?>(null) }
    var paymentIntentClientSecret by remember { mutableStateOf<String?>(null) }
    val paymentSheet = rememberPaymentSheet(::onPaymentSheetResult)
    val context = LocalContext.current
    var isLoading by remember { mutableStateOf(true) }
    LaunchedEffect(context) {
        "http://10.0.2.2:5000/payment-sheet".httpPost().responseJson { request, response, result ->
            result.fold(
                success = { jsonResponse ->
                    try {
                        val responseJson = jsonResponse.obj()
                        paymentIntentClientSecret = responseJson.getString("paymentIntent")
                        customerConfig = PaymentSheet.CustomerConfiguration(
                            id = responseJson.getString("customer"),
                            ephemeralKeySecret = responseJson.getString("ephemeralKey")
                        )
                        val publishableKey = responseJson.getString("publishableKey")
                        PaymentConfiguration.init(context, publishableKey)
                    } catch (e: Exception) {
                        println("Error parsing response: ${e.message}")
                    }
                },
                failure = { error ->
                    println("Request failed: ${error.message}")
                }
            )
        }
    }
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
                text = "Fund Management Starts Here",
                style = MaterialTheme.typography.headlineLarge.copy(color= Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Manage your investments, track stocks, and gain access to premium features.",
                style = MaterialTheme.typography.headlineLarge.copy(color= Color.White),
                textAlign = TextAlign.Center

            )

            Spacer(modifier = Modifier.height(24.dp))
            LaunchedEffect(context) {
                fetchPaymentSheetData(context)
            }
            Button(
                onClick = {
                    val currentConfig = customerConfig
                    val currentClientSecret = paymentIntentClientSecret

                    if (currentConfig != null && currentClientSecret != null) {
                        presentPaymentSheet(paymentSheet, currentConfig, currentClientSecret)
                    }
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White),
                modifier = Modifier.padding(16.dp)
            ) {
                Text(text = "Subscribe to ACT Premium")
            }
        }
    }
}


