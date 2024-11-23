package com.example.act1

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedCard
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun StockCard(key : String ,info : Stock, stockCallBack: ()-> Unit){
    OutlinedCard(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(8.dp),
        border = BorderStroke(1.dp, Color.White),
        colors = CardDefaults.outlinedCardColors(containerColor = Color(36, 35, 49))
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Text(
                text = "${key} ${info.name}",
                style = MaterialTheme.typography.bodyMedium,
                color = Color.White
            )
            Text(
                text = "Price: ${info.currentPrice}",
                style = MaterialTheme.typography.bodySmall,
                color = Color.White.copy(alpha = 0.7f)
            )
            IconButton(
                onClick = {stockCallBack()}
            ) {
                Icon(
                    imageVector = Icons.Filled.Add,
                    contentDescription = "Add Card",
                    tint = Color.White
                )
            }

        }
    }
}
var favouriteStocks : MutableMap<String, Stock> = mutableMapOf()