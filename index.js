const inquirer = require("inquirer");

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
            ( {title} ) => console.log(title)
        )
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
