// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // Inquirer package to prompt user for input
const fs = require('fs'); // File system module to write files
const generateMarkdown = require('./utils/generateMarkdown'); // Function to generate markdown content for README
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?', // Prompt for project title
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:', // Prompt for project description
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?', // Prompt for installation instructions
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:', // Prompt for usage information
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?', // Prompt for contribution guidelines
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?', // Prompt for test instructions
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:', // Prompt for license choice
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'], // List of license options
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?', // Prompt for GitHub username
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?', // Prompt for email address
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md generated!') // Log error or success message
    );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) // Prompt the user with the questions array
      .then((responses) => {
        const markdown = generateMarkdown(responses); // Generate markdown content based on user responses
        writeToFile('README.md', markdown); // Write the markdown content to a README.md file
      });
  }
  
  // Function call to initialize the application
  init();
