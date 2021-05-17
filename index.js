// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email for you?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should this project be used?'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license does this project have?',
      choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'GNU GPL v3']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Lastly, what are some test instructions for your project?'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
      
        console.log('README Complete! Check it out in the dist folder!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Creating your README...");
      writeToFile("./dist/README.md", generateMarkdown({ ...inquirerResponses }));
    })
}

// Function call to initialize app
init();