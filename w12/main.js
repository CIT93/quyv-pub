document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workoutForm");
    const outputDiv = document.getElementById("output");

    function displayWorkoutMessages(name, exercise, reps, time) {
        // Show a "Get Ready" message synchronously
        outputDiv.innerHTML = `<p>${name}, get ready to start your ${exercise} workout!</p>`;

        // After 2 seconds, show the "Start" message
        setTimeout(() => {
            outputDiv.innerHTML += `<p>Start! Do ${reps} reps of ${exercise}.</p>`;

            // After the specified workout time in minutes, show the "Stop" message
            setTimeout(() => {
                outputDiv.innerHTML += `<p>Stop! You've completed ${time} minute(s) of ${exercise}.</p>`;
            }, time * 1000 * 60); // Convert time in minutes to milliseconds

        }, 2000); // Initial 2-second delay
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
