
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    kotlin("jvm") version "2.0.21"
    alias(libs.plugins.compose.compiler) apply false

}