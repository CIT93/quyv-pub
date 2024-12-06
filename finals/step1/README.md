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