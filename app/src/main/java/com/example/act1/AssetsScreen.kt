package com.example.act1

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
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
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController

// Assets Screen Composable
@Composable
fun AssetsScreen(navController: NavHostController, background: Brush) {
    var financialData by remember { mutableStateOf<StockResult?>(null) }

    LaunchedEffect(Unit) {
        financialData = getStockInformation()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(background),
        contentAlignment = Alignment.Center
    ) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.Start,
            verticalArrangement = Arrangement.spacedBy(8.dp),
            contentPadding = PaddingValues(16.dp)
        ) {
            item {
                Text(
                    text = "Stocks",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color.White
                )
            }

            financialData?.stocks?.entries?.forEach { (key, info) ->
                item {
                    StockCard(key,info, { favouriteStocks[key] = info })
                }
            }
        }


    }
}