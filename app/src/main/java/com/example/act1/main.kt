
import com.google.gson.Gson
import com.google.gson.JsonObject
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.client.statement.bodyAsText
import io.ktor.http.isSuccess
import android.util.Log
import com.example.act1.UserRequest
import kotlinx.coroutines.launch

// Your data model class
data class UserResponse(
    val verdict: Boolean,
    val correctEmail: Boolean?,
    val correctPassword: Boolean?,
    val correctName: Boolean?
)

suspend fun verifyUserClient(
    username: String,
    name: String,
    email: String,
    password: String,
    operation: String,
    type: String
): UserResponse? {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            // You don't need to set up content negotiation here for Gson
        }
    }

    return try {
        // Send request and get response
        val response = client.post("https://yourapiendpoint.com") {
            this.contentType(ContentType.Application.Json)
            setBody(UserRequest(name, username, email, password, operation, type))
        }

        val responseBody = response.bodyAsText()
        Log.d("ResponseBody", responseBody)  // Log the raw response

        if (response.status.isSuccess()) {
            // Parse the response body using Gson
            val gson = Gson()
            try {
                val userResponse = gson.fromJson(responseBody, UserResponse::class.java)
                userResponse
            } catch (e: Exception) {
                Log.e("GsonParsingError", "Error parsing response: ${e.message}")
                null
            }
        } else {
            Log.e("Error", "Failed to verify user. Status: ${response.status}")
            null
        }
    } catch (e: Exception) {
        Log.e("Exception", "Request failed: ${e.message}")
        null
    } finally {
        client.close()
    }
}
