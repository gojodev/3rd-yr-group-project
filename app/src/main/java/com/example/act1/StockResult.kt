package com.example.act1

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class StockResult(
    val stocks: HashMap<String, Stock>
)


suspend fun getStockInformation(): StockResult {
    val client = HttpClient()

    val json = Json {
        ignoreUnknownKeys = true
    }
    val data = client.get("http://10.0.2.2:5000/stocks")
//    val data = client.get("https://history-ieevug7ulq-nw.a.run.app/")
    val stockInfo: StockResult = json.decodeFromString(data.body())


    return stockInfo
}