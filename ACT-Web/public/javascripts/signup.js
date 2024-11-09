const DarkReader = require('darkreader');

async function addManager(username, name, email, password) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addManager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
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

let signUpButton = document.getElementById('signUpButton')
signUpButton.addEventListener('click', async (event) => {

    // Prevent the form from refreshing the page
    event.preventDefault();

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value


    let response = await addManager(username, name, email, password)
    console.log(response)
})

function autofill() {
    document.getElementById("username").value = "user4"
    document.getElementById("name").value = "first4 last4"
    document.getElementById("email").value = "user4@gmail.com"
    document.getElementById("password").value = "user4_password!"
}

autofill()

DarkReader.auto({
    brightness: 100,
    contrast: 100,
    darkSchemeTextColor: 'white',
});