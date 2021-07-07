const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// Path for generated README
const writePath = "./output/README.md"

// Questions to gather information for building readme.
const questions = [
    {
        type: "input",
        message: "What is the title?",
        name: "title"
    },
    {
        type: "editor",
        message: "Give a description.",
        name: "description"
    },
    {
        type: "editor",
        message: "Provide installation instructions.",
        name: "installation"
    },
    {
        type: "editor",
        message: "Provide instructions for use. Remember to include visual aids.",
        name: "usage"
    },
    {
        type: "editor",
        message: "How can people contribute?",
        name: "contributing"
    },
    {
        type: "editor",
        message: "How can people test the code?",
        name: "tests"
    },
    {
        type: "list",
        choices: [
            "No License, all rights reserved.",
            "MIT License - simple and highly permisive.",
            "Mozilla Public License - private use with some open source maintanence.",
            "GNU GPLv3 License - keeps code open source.",
        ],
        message: "What license would you like to use.",
        name: "license"
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name: "github"
    },
    {
        type: "input",
        message: "What email can people reach you at with questions?",
        name: "email"
    }
];

// Function call to initialize app
init();

function init() {
    inquirer.prompt(questions)
        .then( generateMarkdown )
        .then( writeToFile )
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
