/*
const tutorial = require('./tutorial') // Import the tutorial module created(In The same directory)
console.log(tutorial) // Get all the functions from the tutorial module
A = new tutorial.A_class('Harsh') // Importing a class from the tutorial module
console.log(tutorial.a_no, 'and string is: ', tutorial.a_string, 'and sum is: ', tutorial.sum(1, 1)) // Performing Other functions From The Tutorial Module
*/
// ------------------------------------------------------------------------------------------------------------------------
/*
// Getting To Event Handling In Node.js
const EventEmitter = require('events'); // import the events module
const eventEmitter = new EventEmitter(); // Createa new empty object of the event EventEmitter

eventEmitter.on('tutorial', (num, num2) => { // If a event named tutorial occur with the num and num2 as the arguments,
    console.log(num + num2); // Print num + num2
})

eventEmitter.emit('tutorial', 1, 2) // Occur a event named tutorial and supply numbers as the arguments
*/

/*
const readline = require('readline'); // Import the readline module
const rl = readline.createInterface({ // ref for readline
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor(Math.random() * 10) + 1; // Get a random number between 1 and 10
let num2 = Math.floor(Math.random() * 10) + 1; // Get a random number between 1 and 10
let answer = num1 + num2; // Save the answer to be the sum of num1 and num2

rl.question(`What is ${num1} + ${num2} ? \n`, (Inputuser) => { // Question the user or get input based on the Question 
    if (Inputuser.trim() == answer) {  //If the Input of user (.trim removes spaces) == the saved answer
        console.log('correct'); // then print correct
        rl.close(); // And close rl instance.When it closes an closing event takes place which is handled by thecode on line 50
    } else {
        rl.setPrompt('Incorrect ......Please try again \n'); // else show incorrect ans 'set' the Question to  'Incorrect ......Please try again'('set' not show )
        rl.prompt(); // Now, after setting the question show it
        rl.on('line', (Inputuser) => { // Listen for newline( When the user will enter the input , newline event will take place)
            if (Inputuser.trim() == answer) { // Check answer if correct
                console.log('correct');
                rl.close()
            } else {                                          // if not correct 
                rl.setPrompt('Incorrect Please try again \n') // 'set' the Question to 'Incorrect and try again'
                rl.prompt() // Show the Question
            }
        })
    }
});

rl.on('close', () => {
    console.log('Good')
})
*/

const fs = require('fs');
// fs.writeFile('example.txt', "This is example written through node", (err) => { // write text in example.txt file
//     if (err) { // if there error is a error writing 
//         console.log(err) // print it
//     } else {
//         console.log('file written successfully')
//         fs.readFile('example.txt', 'utf8', (err, file) => { // read the file that we just wrote and decode it in utf8
//             if (err)
//                 console.log(erro)
//             else
//                 console.log(file)
//         })
//     }
// })
// fs.rename('example.txt', 'example2.txt', (err, file) => { // rename file..first argument is the file name to rename folloewed by second argument which tells what to rename to
//     if (err)
//         console.log(err);
//     else
//         console.log('file renamed successfully');
// })
// fs.appendFile('example2.txt', 'appended data', (err, file) => { // Add text to end of the file
//     if (err)
//         console.log(err);
//     else
//         console.log('appended data successfully');
// })

// fs.unlink('example2.txt', (err) => { // Delele File
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('deleted file successfully');
//     }
// })

// fs.mkdir('examplefolder', (err) => { // Make folder
//     if (err)
//         console.log(err);
//     else
//         fs.rmdir('examplefolder', (err) => {
//             console.log('deleted folder successfully');
//         })
// })

// Create a file within folder
// fs.mkdir('examplefolder', (err) => { // Make a Folder
//     if (err)
//         console.log(err);
//     else {
//         fs.writeFile('./examplefolder/filewithinfolder.txt', 'file created within folder', (err) => { // Create file in folder that we just created
//             if (err)
//                 console.log(err);
//             else
//                 console.log('file created successfully within folder');
//         })
//     }
// })

/*
Notes:
To deleted a folder it must be empty or delete the file/files within the folder to delete the folder
*/

// Deleting a folder having multiple files
// fs.readdir('examplefolder', (err, files) => { // Getting the list of files from a folder
//     if (err)
//         console.log(err);
//     else
//         for (let file of files) {
//             fs.unlink('./examplefolder/' + file, (err) => {
//                 if (err)
//                     console.log(err)
//                 else
//                     console.log('succesfully deleted file ' + file)
//             })
//         }
// })

// Working with streams
// Streams are the efficient way of writing to a file in chunks rather than all at once
// const readStream = fs.createReadStream('./example.txt', 'utf8')
// readStream.on('data', (chunk) => {
//     console.log(chunk) // reading in chunks
// })

/*
When reading a very large file with a normal readFile method it gives an range error.So for that we use strems
*/
// const readStream = fs.createReadStream('./verylargefile.txt', 'utf8')
// readStream.on('data', (chunk) => {
//     console.log(chunk);
// })

//                    I am following https://www.youtube.com/watch?v=RLtyhwFtXQA tutorial                                  //