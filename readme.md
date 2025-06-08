# Summer Chore Callback Hell!

This project uses node.js

John has a lot of summer chores he needs to complete each Saturday, but he often gets tired and needs to take a nap.
If John falls asleep, he will not complete his chores.

This program simulates a probability of John falling asleep after completing each chore using a randomly generated number and 
checking if it is greater than a percentage (in decimal form). 
The probability of John falling asleep increases with each chore he completes.

Changed the probability simulation to a whole number and declared it outside of the functions so that the same number is used throughout each function. The threshold gets higher in each function to simulate the person getting more tired throught the day.

Added promiseVersion.js to change the callback functions to promises to make the code cleaner and easier to read.

Added asyncAwaitVersion.js and turned the functions into async/await to make the code easier to read.
