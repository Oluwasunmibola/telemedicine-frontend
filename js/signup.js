
// Register as a patient
document.getElementById("signup-button").addEventListener("click", function(event){
    event.preventDefault();
    const form = document.getElementById("signup-form");
    const firstName = form.querySelector("#firstName").value;
    const lastName = form.querySelector("#lastName").value;
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;
    const confirmPassword = form.querySelector("#confirmPassword").value;
    const phoneNumber = form.querySelector("#phoneNumber").value;
    const gender = form.querySelector("#gender").value;
    const role = form.querySelector("#options");
    const selectedRoleValue = role.options[role.selectedIndex].value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    if(!emailPattern.test(email)){
        alert("Invalid email address.");
        return;
    }

    if(!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if(password !== confirmPassword || password.length < 8) {
        alert("Passwords do not match or are too short.");
        return;
    }

    const formData = {
        first_name:firstName,
        last_name:lastName,
        email: email,
        password: password,
        phone_number: phoneNumber,
        gender: gender,
        role: selectedRoleValue
    }
    console.log(selectedRoleValue);
    if(selectedRoleValue === "Patient"){
        fetch('http://127.0.0.1:3000/patient/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok){
                return response.json();
            } else{
                throw new Error('Failed to register. Please try again.')
            }
        }).then((data) => {
            console.log("Registeration Successful:", data);
            alert('Registeration successful!');
            form.reset();
        }).catch((error) => {
            console.log('Error:', error);
            alert('There was an error registering. Please try again.');
        });
    }

    else{
        console.log("This is patient registeration.");
        alert('Patient registeration only');
    }

});

// setting up get started and book consultation button
const getStarted = document.querySelector(".get-started");
const bookConsultation = document.querySelector(".book-consultation");

getStarted.addEventListener("click", () => {
    window.location.href = "../html/signup.html";
})