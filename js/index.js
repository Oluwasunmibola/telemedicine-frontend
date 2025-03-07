const  hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// setting up get started and book consultation button
const getStarted = document.querySelector(".get-started");
const bookConsultation = document.querySelector(".book-consultation");

getStarted.addEventListener("click", () => {
    window.location.href = "../html/signup.html";
})
