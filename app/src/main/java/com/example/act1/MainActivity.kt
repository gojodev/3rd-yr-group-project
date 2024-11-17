package com.example.act1
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.ThumbUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.*
import com.example.act1.ui.theme.ACT1Theme
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json


@Serializable
data class UserRequest(val username: String, val name: String, val email: String, val password: String)

@Serializable
data class UserResponse(val message: String, val userData: Map<String, @Contextual Any>?)


suspend fun verifyUserClient(username: String, name: String, email: String, password: String): UserResponse? {
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
        client.post("http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager") {
            contentType(ContentType.Application.Json)
            setBody(UserRequest(username, name, email, password))
        }.body()
    } catch (e: Exception) {
        println("Error fetching user data: ${e.message}")
        null
    } finally {
        client.close()
    }
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ACT1Theme {
                var isDarkTheme by remember { mutableStateOf(false) }
                var showBottomBar by remember { mutableStateOf(true) }

                val backgroundColor = if (isDarkTheme) {
                    Brush.horizontalGradient(listOf(Color(7, 3, 122), Color(7, 0, 10), Color(8, 105, 3)))
                } else {
                    Brush.horizontalGradient(listOf(Color(185, 5, 41), Color(237, 97, 4), Color(185, 5, 41)))
                }
                val navController = rememberNavController()
                var selectedIndex by remember { mutableStateOf(0) }
                LaunchedEffect(navController) {
                    navController.addOnDestinationChangedListener { _, destination, _ ->
                        showBottomBar = destination.route !in listOf(Screen.Signup.route, Screen.Login.route)
                    }
                }
                Scaffold(
                    modifier = Modifier.fillMaxSize(),
                    bottomBar = {
                        if (showBottomBar) {
                            BottomAppBar(containerColor = Color(36, 35, 49)) {
                                NavigationBar(containerColor = Color(36, 35, 49)) {
                                    navItemList.forEachIndexed { index, item ->
                                        NavigationBarItem(
                                            icon = { Icon(item.icon, contentDescription = null, tint = Color.White) },
                                            label = { Text(item.label, color = Color.White) },
                                            selected = selectedIndex == index,
                                            onClick = {
                                                selectedIndex = index
                                                if (navController.currentDestination?.route != item.screen.route) {
                                                    navController.navigate(item.screen.route) {
                                                        launchSingleTop = true
                                                        restoreState = true
                                                    }
                                                }
                                            }
                                        )
                                    }
                                }
                            }
                        }
                    }
                ) { paddingValues ->
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(backgroundColor)
                            .padding(paddingValues)
                    ) {
                        NavHost(navController = navController, startDestination = Screen.Signup.route) {
                            composable(Screen.Home.route) { HomeScreen(navController, backgroundColor) }
                            composable(Screen.Premium.route) { PremiumScreen(navController, backgroundColor) }
                            composable(Screen.Support.route) { SupportScreen(navController, backgroundColor) }
                            composable(Screen.Rate.route) { RateScreen(navController, backgroundColor) }
                            composable(Screen.Signup.route) { SignupScreen(navController, backgroundColor) }
                            composable(Screen.Login.route) { LoginScreen(navController, backgroundColor) }
                            composable(Screen.Assets.route) { AssetsScreen(navController, backgroundColor) }
                        }

                        // Theme Button
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Button(
                                onClick = { isDarkTheme = !isDarkTheme },
                                modifier = Modifier.padding(16.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White)
                            ) {
                                Text(text = "Theme")
                            }
                        }
                    }
                }
            }
        }
    }
}


// Navigation Screen Definitions
sealed class Screen(val route: String) {
    object Home : Screen("Home")
    object Premium : Screen("Premium")
    object Support : Screen("Support")
    object Rate : Screen("Rate Us")
    object Signup : Screen("Sign Up")
    object Login : Screen("Login")
    object Assets : Screen("Assets")
}

// Navigation Item Class
data class NavItem(val label: String, val icon: androidx.compose.ui.graphics.vector.ImageVector, val screen: Screen)

val navItemList = listOf(
    NavItem("Home", Icons.Default.Home, Screen.Home),
    NavItem("Assets", Icons.Default.Menu, Screen.Assets),
    NavItem("Premium", Icons.Default.Star, Screen.Premium),
    NavItem("Support", Icons.Default.Person, Screen.Support),
    NavItem("Rate Us", Icons.Default.ThumbUp, Screen.Rate)
)

// Data Classes for Stock and Crypto
@Serializable
data class Stock(
//    val fiftyTwoWeekHigh: Float,
//    val fiftyTwoWeekLow: Float,
    val currentPrice: Float,
    val marketCap: Long,
    val name: String,
    val volume: Long
)
var favouriteStocks : MutableMap<String, Stock> = mutableMapOf()

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
    val stockInfo: StockResult = json.decodeFromString(data.body())

    return stockInfo
}

// Assets Screen Composable
@Composable
fun AssetsScreen(navController: NavHostController, background: Brush) {
    // Load financial data
    val context = LocalContext.current
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
                    StockCard(key,info, { favouriteStocks.put(key, info)})
                }
            }
        }


    }
}

// Home Screen Composable
@Composable
fun HomeScreen(navController: NavHostController, backgroundColor: Brush) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Title and description
            Text(
                text = "Fund Management Starts Here",
                style = MaterialTheme.typography.headlineLarge.copy(color=Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Manage your investments, track stocks, and gain access to premium features.",
                style = MaterialTheme.typography.headlineLarge.copy(color=Color.White),
                textAlign = TextAlign.Center

            )

            Spacer(modifier = Modifier.height(24.dp))


            Button(
                onClick = {
                    navController.navigate(Screen.Premium.route)
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White),
                modifier = Modifier.padding(16.dp)
            ) {
                Text(text = "Subscribe to ACT Premium")
            }
        }
    }
}


// Premium Screen Composable
@Composable
fun PremiumScreen(navController: NavHostController, backgroundColor: Brush) {
    ScreenContent(title = "", navController = navController, backgroundColor)
    Column (
        Modifier.verticalScroll(rememberScrollState()).padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ){
        favouriteStocks.forEach{(key,info)->
            StockCard(key,info, {})
        }

    }

}

// Support Screen Composable
@Composable
fun SupportScreen(navController: NavHostController, backgroundColor: Brush) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = "Need Help? We're Here for You!",
                style = MaterialTheme.typography.headlineMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Get in touch with our support team or explore premium features to enhance your experience.",
                style = MaterialTheme.typography.headlineMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )

            Spacer(modifier = Modifier.height(24.dp))
            Button(
                onClick = {
                    navController.navigate(Screen.Premium.route)
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White),
                modifier = Modifier.padding(16.dp)
            ) {
                Text(text = "Open Chat")
            }
        }
    }
}


// Rate Screen Composable
@Composable
fun RateScreen(navController: NavHostController, backgroundColor: Brush) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = "We Value Your Feedback!",
                style = MaterialTheme.typography.headlineMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Help us improve by rating your experience or sharing your thoughts.",
                style = MaterialTheme.typography.headlineMedium.copy(color = Color.White),
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(24.dp))
            Image(painter = painterResource(id = R.drawable.stars),
                contentDescription = "Stars",
                modifier = Modifier.size(150.dp),
                colorFilter = ColorFilter.tint(Color.White))
            Button(
                onClick = {
                    navController.navigate(Screen.Premium.route)
                },
                colors = ButtonDefaults.buttonColors(containerColor = Color(36,35,49), contentColor = Color.White),
                modifier = Modifier.padding(16.dp)
            ) {
                Text(text = "Rate Us Now")
            }
        }
    }
}


// Login Screen Composable
@Composable
fun LoginScreen(navController: NavHostController, backgroundColor: Brush) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
    var username by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf("") }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            TextField(
                value = email,
                onValueChange = { email = it },
                label = { Text("Email") }
            )
            TextField(
                value = password,
                onValueChange = { password = it },
                label = { Text("Password") },
                visualTransformation = PasswordVisualTransformation()
            )
            Button(
                onClick = {
                    CoroutineScope(Dispatchers.IO).launch {
                        val response = verifyUserClient(username, name, email, password)
                        response?.let {
                            if (it.message == "User verified") {
                                navController.navigate(Screen.Home.route) {
                                    popUpTo(Screen.Login.route) { inclusive = true }
                                }
                            } else {
                                errorMessage = it.message
                            }
                        } ?: run {
                            errorMessage = "Error verifying user."
                        }
                    }
                }, colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White)
            ) {
                Text("Login")
            }
            if (errorMessage.isNotEmpty()) {
                Text(text = errorMessage, color = Color.Red)
            }
        }
    }
}

// Sign Up Screen Composable
@Composable
fun SignupScreen(navController: NavHostController, backgroundColor: Brush) {
    // State variables for user input and error message
    var name by remember { mutableStateOf("") }
    var username by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf("") }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        LazyColumn(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
            contentPadding = PaddingValues(16.dp)
        ) {
            item {
                Text(
                    text = "Fund Management Starts Here.",
                    style = MaterialTheme.typography.displayMedium,
                    color = Color.White,
                    modifier = Modifier.padding(bottom = 32.dp)
                )

            }
            item {
                TextField(
                    value = name,
                    onValueChange = { name = it },
                    label = { Text("Name") }
                )
            }
            item {
                TextField(
                    value = username,
                    onValueChange = { username = it },
                    label = { Text("Username") }
                )
            }
            item {
                TextField(
                    value = email,
                    onValueChange = { email = it },
                    label = { Text("Email") }
                )
            }
            item {
                TextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Password") },
                    visualTransformation = PasswordVisualTransformation()
                )
            }
            item {
                Button(colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White),
                    onClick = {
                        // Simulate signup logic and navigation on success
                        // Uncomment the coroutine block to implement actual signup logic
                        // CoroutineScope(Dispatchers.IO).launch {
                        //     // Perform your signup API call here
                        //     val response = verifyUserClient(username, name, email, password)
                        //     response?.let {
                        //         if (it.message == "User verified") {
                        //             navController.navigate(Screen.Home.route) {
                        //                 popUpTo(Screen.Signup.route) { inclusive = true }
                        //             }
                        //         } else {
                        //             errorMessage = it.message
                        //         }
                        //     } ?: run {
                        //         errorMessage = "Error during signup."
                        //     }
                        // }
                        navController.navigate(Screen.Home.route) // Temporary navigation
                    }

                ) {
                    Text("Sign Up")
                }
                Button(
                    onClick = { navController.navigate(Screen.Login.route) },
                    modifier = Modifier.padding(16.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(36, 35, 49), contentColor = Color.White)
                ) {
                    Text("Login")
                }
            }
            item {
                if (errorMessage.isNotEmpty()) {
                    Text(text = errorMessage, color = Color.Red)
                }
            }
        }
    }
}

@Composable
fun ScreenContent(title: String, navController: NavHostController, backgroundColor: Brush) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Text(text = title, color = Color.White)
    }
}
