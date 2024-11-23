import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.slf4j.LoggerFactory

suspend fun main() {
    test()
}

suspend fun test() {
    val logger = LoggerFactory.getLogger("Main")
    logger.info("test")

    @Serializable
    data class UserRequest(
        val name: String,
        val username: String,
        val email: String,
        val password: String,
        val operation: String,
        val type: String
    )

    @Serializable
    data class UserResponse(
        val verdict: Boolean,
        val correctEmail: Boolean,
        val correctPassword: Boolean,
        val correctName: Boolean
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
                json(Json {
                    prettyPrint = true
                    isLenient = true
                    ignoreUnknownKeys = true
                })
            }
        }

        return try {
            val response = client.post("https://userops-ieevug7ulq-nw.a.run.app") {
                contentType(ContentType.Application.Json)
                setBody(UserRequest(name, username, email, password, operation, type))
            }

            if (response.status.isSuccess()) {
                val responseBody = response.body<UserResponse>()
                logger.info("Response: $responseBody")
                responseBody
            } else {
                logger.error("Request failed with status: ${response.status}")
                null
            }
        } catch (e: Exception) {
            logger.error("Error during request: ${e.message}", e)
            null
        } finally {
            client.close()
        }
    }

    val result = verifyUserClient(
        username = "user1",
        name = "first1 last1",
        email = "user1@gmail.com",
        password = "user1_password!",
        operation = "verify",
        type = "admin"
    )
    logger.info("Result: $result")
}