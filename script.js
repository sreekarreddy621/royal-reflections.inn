// Set today's date as the earliest selectable check-in date
document.addEventListener("DOMContentLoaded", function () {
    let checkinField = document.getElementById("checkin");
    let checkoutField = document.getElementById("checkout");

    if (checkinField) {
        let today = new Date().toISOString().split("T")[0];
        checkinField.setAttribute("min", today);
    }
    if (checkoutField) {
        let today = new Date().toISOString().split("T")[0];
        checkoutField.setAttribute("min", today);
    }
});

function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (checkin === "") {
        alert("Please select your check-in date.");
        return false;
    }

    if (checkout === "") {
        alert("Please select your check-out date.");
        return false;
    }

    if (new Date(checkin) < new Date(new Date().toDateString())) {
        alert("Check-in date cannot be in the past.");
        return false;
    }

    if (new Date(checkout) <= new Date(checkin)) {
        alert("Check-out date must be after the check-in date.");
        return false;
    }

    alert("Thank you! Your room booking request has been submitted successfully.");

    document.getElementById("bookingForm").reset();

    return false;
}