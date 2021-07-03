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

// Path for generated README
const writePath = "./output/README.md"

// Function call to initialize app
init();

function init() {
    inquirer.prompt(questions)
        .then(
            ( {title} ) => writeToFile(title)
        )
}

// Function to write README file
function writeToFile(data) {
    fs.writeFile(writePath, data, handleError)
}

function handleError(error) {
    if (error) {
        console.log("An error has occured.")
        console.log(error)
    } else {
        console.log("Write Successful.")
    }
}
