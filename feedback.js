document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting normally

    // Optionally: Add form validation here

    // Show confirmation message
    document.getElementById("message").classList.remove("hidden");

    // Clear form fields
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("feedback").value = '';
});
