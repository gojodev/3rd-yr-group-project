const DarkReader = require('darkreader');

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

    // Prevent the form from refreshing the page
    event.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    let response = await verifyManager(username, email, password)

    // todo send the current user data to a page for when the user to logged to show their custom data
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/currentUserData', {
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
    document.getElementById("username").value = "user1"
    document.getElementById("email").value = "user1@gmail.com"
    document.getElementById("password").value = "user1_password!"
}

autofill()

DarkReader.auto({
    brightness: 100,
    contrast: 100,
    darkSchemeTextColor: 'white',
});