package com.example.act1

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController


@Composable
fun PremiumScreen(navController: NavHostController, backgroundColor: Brush) {
    val favouriteStocksState = remember { mutableStateOf(favouriteStocks.toMutableMap()) }
    ScreenContent(title = "", navController = navController, backgroundColor)
    Column(
        Modifier
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        favouriteStocksState.value.forEach { (key, info) ->
            StockCardWithGraph(
                key = key,
                info = info,
                stockCallBack = {
                    favouriteStocksState.value = favouriteStocksState.value.toMutableMap().apply {
                        remove(key)
                    }
                }
            )
        }
    }
}

