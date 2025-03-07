// setting up get started and book consultation button
const getStarted = document.querySelector(".get-started");
const bookConsultation = document.querySelector(".book-consultation");

getStarted.addEventListener("click", () => {
    window.location.href = "../html/signup.html";
})

document.getElementById("login-button").addEventListener("click", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginCredentials = {
        email: email,
        password: password
    }

    fetch('http://127.0.0.1:3000/patient/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginCredentials)
    }).then((response) => {
        if (response.ok){
            return response.json();
        }
        else{
            throw new Error('failed to login. Check credentials and try again.')
        }
    }).then((data) => {
        console.log('Login successful:', data);
        alert('Login successful');
        // come back to change this
        window.location.href = "../html/dashboard.html";
    }).catch((error) => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });
    // console.log(loginCredentials);
})