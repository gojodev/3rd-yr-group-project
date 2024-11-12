const DarkReader = require('darkreader');

const cors = require('cors');
cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})

async function updateInfo(data) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/currentUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: data
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}


async function verifyManager(username, email, password) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

let loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', async (event) => {

    event.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    let db_profile = await verifyManager(username, email, password)

    const data = {
        username: username,
        db_profile: db_profile
    }

    console.log(data)

    if (db_profile.verdict) {
        updateInfo(data)
        window.location.href = 'http://127.0.0.1:5500/ACT-Web/public/loggedinhomepage.html'
    }
    else {
        console.log('incorrect login details')
    }
})

function autofill() {
    document.getElementById("username").value = "m_user1"
    document.getElementById("email").value = "m_user1@gmail.com"
    document.getElementById("password").value = "m_user1_password!"
}

autofill()

DarkReader.auto({
    brightness: 100,
    contrast: 100,
    darkSchemeTextColor: 'white',
});