document.addEventListener("DOMContentLoaded", function () {
    // Form Validation
    const form = document.getElementById("contactForm"); // Get the form
    const nameInput = document.getElementById("name"); // Get name field
    const emailInput = document.getElementById("email"); // Get email field
    const nameError = document.getElementById("nameError"); // Error message for name
    const emailError = document.getElementById("emailError"); // Error message for email

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Check if name is empty
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Check if email is valid
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
            emailError.textContent = "Enter a valid email.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Stop form submission if there are errors
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Quiz Functionality
    const quizForm = document.getElementById("quizForm"); // Get quiz form
    const resultText = document.getElementById("quizResult"); // Result message

    quizForm.addEventListener("change", function () {
        const answer = document.querySelector('input[name="quiz"]:checked').value; // Get selected answer
        
        if (answer === "correct") {
            resultText.textContent = "✅ Correct! Well done!";
            resultText.style.color = "green";
        } else {
            resultText.textContent = "❌ Incorrect. Try again!";
            resultText.style.color = "red";
        }
    });
});
