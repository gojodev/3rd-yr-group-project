const DarkReader = require('darkreader');

async function addManager(username, name, email, password) {
    try {
        const response = await fetch('https://addmanager-ieevug7ulq-nw.a.run.app', {
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
    document.getElementById("username").value = "m_user4"
    document.getElementById("name").value = "Mfirst4 Mlast4"
    document.getElementById("email").value = "m_user4@gmail.com"
    document.getElementById("password").value = "m_user4_password!"
}

autofill()

DarkReader.auto({
    brightness: 100,
    contrast: 100,
    darkSchemeTextColor: 'white',
});