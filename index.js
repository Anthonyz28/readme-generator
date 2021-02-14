// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?(Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }}
    },  
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project link!');
                return false;
            }
        }

    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for how to install the project:'
    
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who worked on the project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a License?',
        choices: [ 'MIT', 'GPL-v3',  'Apache-v2', 'none' ]
    },
    {
        type: 'input',
        name: 'contact',
        messages: 'What is your email for questions on the project?'
    }

]
 
    



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {

        console.log("Success! The README.md file was generated.");}
    });
};

// TODO: Create a function to initialize app
function init(questions) {
    
    
    return inquirer.prompt(questions)};


// Function call to initialize app
init(questions)
    .then(answers => generateMarkdown(answers))
    .then(data => writeToFile('./Generated/README.md', data))
    .catch(err => console.log(err));


