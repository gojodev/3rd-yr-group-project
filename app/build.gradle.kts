plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)

    id("org.jetbrains.kotlin.plugin.serialization") version "2.0.21"
    alias(libs.plugins.compose.compiler)
}

android {
    namespace = "com.example.act1"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.act1"
        minSdk = 30
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    kotlinOptions {
        jvmTarget = "1.8"
    }

    buildFeatures {
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.15"
    }

    // Packaging block to handle META-INF conflicts
    packaging {
        resources {
            excludes += setOf(
                "META-INF/INDEX.LIST",
                "META-INF/DEPENDENCIES",
                "META-INF/{AL2.0,LGPL2.1}"
            )
        }
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.androidx.navigation.compose)
    implementation(libs.firebase.crashlytics.buildtools)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.ui.test.junit4)
    debugImplementation(libs.androidx.ui.tooling)
    debugImplementation(libs.androidx.ui.test.manifest)

    // Remove redundant Ktor dependencies
    implementation(libs.ktor.client.core)
    implementation(libs.ktor.client.cio)
    implementation(libs.ktor.client.content.negotiation)
    implementation(libs.ktor.serialization.kotlinx.json)
    implementation(libs.kotlinx.serialization.json)
    implementation(libs.ktor.client.android)

    // Remove redundant Firebase dependencies
    implementation(libs.firebase.firestore.ktx)
    implementation(platform(libs.firebase.bom))

    implementation ("com.github.tony19:logback-android:2.0.0")
    implementation(libs.slf4j.api)

    // Remove redundant Compose dependencies
    implementation(libs.ui)
    implementation(libs.material3)
    implementation(libs.ktor.client.core)
    implementation(libs.ktor.client.cio.v223)
    implementation(libs.ktor.client.content.negotiation.v223)
    implementation(libs.ktor.serialization.kotlinx.json)
    implementation(libs.ktor.client.logging)
    implementation(libs.kotlinx.serialization.json)
    implementation(libs.androidx.navigation.compose.v253)
    implementation ("com.google.code.gson:gson:2.11.0")
    implementation ("io.ktor:ktor-client-json:2.3.0")
    implementation ("io.ktor:ktor-client-gson:2.3.0")
    implementation (libs.stripe.android.v2060)
    implementation ("com.squareup.okhttp3:okhttp:4.12.0")
    implementation ("com.github.kittinunf.fuel:fuel:2.3.1")
    implementation ("com.github.kittinunf.fuel:fuel-json:2.3.1")
    implementation ("com.squareup.okhttp3:okhttp:4.9.0")
    implementation ("org.json:json:20210307")


}


