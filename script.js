
// 1. Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// 2. Prevent selection of past appointment dates
const visitDate = document.getElementById("visitDate");

const today = new Date();
const localDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

visitDate.min = localDate;

// 3. Appointment Form
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const department = document.getElementById("department").value;
    const date = visitDate.value;

    if (!name || !department || !date) {
        formMessage.textContent = "Please complete all required fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your demo appointment request has been submitted.";

    appointmentForm.reset();

    // Keep today's date as the minimum after resetting
    visitDate.min = localDate;
});
