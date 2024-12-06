# Fur Feeder Reminder

Pup Feeder Reminder is a app that will help you remember when you last fed you little fur babies. I know now aday people can have a really busy lifestyle and at time can forget how many time your fur baby eats. 

This is a good app to help you remember when you last fed your fur babies and it will be helpful to keep track of fur baby diet due to you knowing how many time they that they have eaten through the day and you wont over feed them which can cause them to be overweight.

## Global Variable

*let feedCount (number) This is a feed count variable that tracks how many times you fed your fur babies.
*const petName (string) variable holds the name of your fur baby.
*let isFeedingTime (Boolean) Is used to indicate whether it's time to feed the pet  This value can change based on the time of day or the pet's feeding schedule.

## Decision Making Process

*If the time since the last feeding is greater than 4 hours and the pet has been fed less than 3 times, the app decides that it's time to feed the pet and logs the feeding.

*The feeding count is increased by 1.

*If the time since the last feeding is greater than 4 hours but the pet has already been fed 3 times today, the app will alert the user that the daily feeding limit has been reached and that feeding again may result in overfeeding.

*If the time since the last feeding is less than 4 hours and the pet has been fed less than 3 times, the app will recommend waiting until more time has passed before feeding again.

*If the pet has already been fed 3 times and less than 4 hours have passed since the last feeding, the app will recommend waiting until the next day to feed the pet again.

*If no feedings have been logged yet today, the app will prompt the user to log the first feeding of the day.

##OutPut
*Did you feed your fur babies the right amount of food today



10/21/24

Here are some links i found that helped me with this assissnment 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

https://www.w3schools.com/js//js_output.asp

https://codingtutorials.dev/understanding-javascript-output-a-comprehensive-guide/

https://www.studytonight.com/javascript/output-in-javascript

https://www.youtube.com/watch?v=j1laALb8OVM

The code sets up functions to manage a pet feeding system, ensuring that pets are fed according to specified intervals and maximum daily limits. It calculates the time difference since the last feeding, checks if the pet can be fed, and displays appropriate messages on the webpage for each pet. The code is modular, with separate functions handling calculations, checking conditions, and updating the UI, allowing for flexibility and reusability

The function checkFeedingTime(petData1) is called with petData1 as the argument.
checkFeedingTime processes the pet data (like last feeding time, feeding interval, and feed count) and returns a message based on the feeding conditions (e.g., whether it's time to feed or if the limit is reached)

The message returned from checkFeedingTime(petData1) is then used as an input for the displayDecision function

displayDecision creates a new paragraph (<p>) element, sets the text content to the message received, and appends it to the results div in the HTML.
This displays the result on the webpage, showing whether the pet needs to be fed, if it's not yet time, or if the daily feeding limit has been reached