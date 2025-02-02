// lisa added this
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

//bruh
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    const inputField = document.querySelector(".form__field");

    button.addEventListener("click", function () {
        const email = inputField.value.trim(); // Get input and remove spaces

        if (email) { 
            console.log("Submitted Email:", email); // Log email to console
            alert("Email Submitted: " + email); // Shows an alert (replace with actual submission logic)
            inputField.value = ""; // Clear the input field
        }
    });
});
