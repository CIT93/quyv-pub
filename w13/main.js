document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workoutForm");
    const outputDiv = document.getElementById("output");

    // Helper function to create a promise that resolves after a specified delay
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // Function to display workout messages with promise chaining
    function displayWorkoutMessages(name, exercise, reps, time) {
        // Show a "Get Ready" message synchronously
        outputDiv.innerHTML = `<p>${name}, get ready to start your ${exercise} workout!</p>`;

        // After 2 seconds, show the "Start" message
        delay(2000)
            .then(() => {
                outputDiv.innerHTML += `<p>Start! Do ${reps} reps of ${exercise}.</p>`;
                return delay(time * 1000 * 60); // Convert time in minutes to milliseconds
            })
            .then(() => {
                outputDiv.innerHTML += `<p>Stop! You've completed ${time} minute(s) of ${exercise}.</p>`;
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                outputDiv.innerHTML += `<p>Error: ${error}</p>`;
            });
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value;
        const exercise = document.getElementById("exercise").value;
        const reps = document.getElementById("reps").value;
        const time = document.getElementById("time").value;

        if (name && exercise && reps && time) {
            displayWorkoutMessages(name, exercise, reps, time);
        } else {
            outputDiv.innerHTML = "<p>Please fill in all fields.</p>";
        }
    });
});
