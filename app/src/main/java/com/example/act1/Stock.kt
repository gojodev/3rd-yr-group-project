package com.example.act1

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

// Data Classes for Stock and Crypto
@Serializable
data class Stock(
    val currentPrice: Float,
    val marketCap: Long,
    val name: String,
    val volume: Long,
    @SerialName("52WeekHigh") val fiftyTwoWeekHigh: Float,
    @SerialName("52WeekLow") val fiftyTwoWeekLow: Float
)