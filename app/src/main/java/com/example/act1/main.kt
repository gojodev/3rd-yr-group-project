import com.example.act1.UserRequest
import com.example.act1.UserResponse
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.engine.cio.CIO
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.http.isSuccess
import io.ktor.serialization.kotlinx.json.json
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

// Define the test case structure
data class TestCase(
    val name: String,
    val description: String,
    val testFunction: suspend () -> Result<UserResponse>
)

// Mock verifyUserClient implementation
suspend fun verifyUserClient(
    username: String,
    name: String,
    email: String,
    password: String,
    operation: String,
    type: String
): Result<UserResponse> {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
                ignoreUnknownKeys = true
                explicitNulls = false
            })
        }
    }

    return try {
        val response = client.post("https://userops-ieevug7ulq-nw.a.run.app") {
            header("Content-Type", "application/json")
            setBody(UserRequest(name.trim(), username.trim(), email.trim(), password.trim(), operation.trim(), type.trim()))
        }

        if (response.status.isSuccess()) {
            val responseBody = response.body<UserResponse>()
            Result.success(responseBody)
        } else {
            Result.failure(Exception("Request failed with status: ${response.status}"))
        }
    } catch (e: Exception) {
        Result.failure(e)
    } finally {
        client.close()
    }
}

// Main test function
fun main() {
    runBlocking {
        runTests()
    }
}

// Function to run all test cases
suspend fun runTests() {
    val testCases = listOf(
        TestCase(
            name = "Valid Inputs",
            description = "Should succeed with valid inputs",
            testFunction = {
                verifyUserClient(
                    "validUser".trim(),
                    "Test User".trim(),
                    "test@example.com".trim(),
                    "ValidPass123!".trim(),
                    "create".trim(),
                    "admin".trim()
                )
            }
        ),
        TestCase(
            name = "Invalid Email",
            description = "Should fail with invalid email",
            testFunction = {
                verifyUserClient(
                    username = "validUser".trim(),
                    name = "Test User".trim(),
                    email = "invalid-email".trim(),
                    password = "ValidPass123!".trim(),
                    operation = "create".trim(),
                    type = "admin".trim()
                )
            }
        ),
        TestCase(
            name = "Weak Password",
            description = "Should fail with weak password",
            testFunction = {
                verifyUserClient(
                    username = "validUser".trim(),
                    name = "Test User".trim(),
                    email = "test@example.com".trim(),
                    password = "123".trim(),
                    operation = "create".trim(),
                    type = "admin".trim()
                )
            }
        ),
        TestCase(
            name = "Empty Name",
            description = "Should fail with empty name",
            testFunction = {
                verifyUserClient(
                    username = "validUser".trim(),
                    name = "".trim(),
                    email = "test@example.com".trim(),
                    password = "ValidPass123!".trim(),
                    operation = "create".trim(),
                    type = "admin".trim()
                )
            }
        ),
        TestCase(
            name = "Multiple Invalid Inputs",
            description = "Should fail with multiple invalid inputs",
            testFunction = {
                verifyUserClient(
                    username = "invalidUser".trim(),
                    name = "".trim(),
                    email = "invalid-email".trim(),
                    password = "123".trim(),
                    operation = "create".trim(),
                    type = "admin".trim()
                )
            }
        )
    )

    for (testCase in testCases) {
        println("Running Test: ${testCase.name} - ${testCase.description}")
        val result = testCase.testFunction()
        result.onSuccess { response ->
            println("Test Passed!")
            println("Response: $response\n")
        }.onFailure { exception ->
            println("Test Failed! Error: ${exception.message}\n")
        }
    }
}
