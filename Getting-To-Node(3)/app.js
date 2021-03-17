const tutorial = require('./tutorial') // Import the tutorial module created(In The same directory)
console.log(tutorial) // Get all the functions from the tutorial module
A = new tutorial.A_class('Harsh') // Importing a class from the tutorial module
console.log(tutorial.a_no, 'and string is: ', tutorial.a_string, 'and sum is: ', tutorial.sum(1, 1)) // Performing Other functions From The Tutorial Module