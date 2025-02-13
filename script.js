// Function to check the user's answer
function checkAnswer() {
    // Get the selected radio button value
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Check if an answer was selected
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return; // Exit the function if no answer is selected
    }

    // Check if the selected answer is correct
    const correctAnswers = ["yes1", "yes2", "yes3"]; // The possible correct answers

    if (correctAnswers.includes(selectedAnswer.value)) {
        // If the answer is correct, display the surprise image
        document.getElementById("imageDisplay").style.display = "block"; // Make the image container visible
        document.getElementById("surpriseImage").src = "https://static.toiimg.com/thumb/imgsize-23456,msid-107627545,width-600,resizemode-4/107627545.jpg"; // Replace with your image URL
    } else {
        alert("Oops! You have no sneham.");
    }
}
