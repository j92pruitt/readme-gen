const inquirer = require("inquirer");
const fs = require('fs');

// Questions to gather information for building readme.
const questions = [
    {
        type: "input",
        message: "What is the title?",
        name: "title"
    }
];

// Function call to initialize app
init();

function init() {
    inquirer.prompt(questions)
        .then(
            ( {title} ) => writeToFile("./output/README.md", title)
        )
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, handleError)
}

function handleError(error) {
    if (error) {
        console.log("An error has occured.")
        console.log(error)
    } else {
        console.log("Write Successful.")
    }
}
