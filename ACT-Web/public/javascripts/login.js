const DarkReader = require('darkreader');

const cors = require('cors');
cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})


async function verifyManager(username, email, password) {
    try {
        const response = await fetch('https://verifymanager-ieevug7ulq-nw.a.run.app', {
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

    // Prevent the form from refreshing the page
    event.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    let response = await verifyManager(username, email, password)

    // todo send the current user data to a page for when the user to logged to show their custom data
    try {
        const response = await fetch('https://currentuser-ieevug7ulq-nw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: response
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


    console.log(response)
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