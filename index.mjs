import inquirer from 'inquirer';
import fs from 'fs/promises';


// ************* PROMPTS ****************
let {title,license, description, installation, usage, contribution, tests, github, email} = await inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?",
        default() {
          return 'README generator';
        },
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a product license',
        choices: ['MIT', 'IBM', 'Boost'],
      
      },
      {
        type: 'input',
        name: 'description',
        message: "How would you describe the project?",
        default() {
          return 'A command line app that that asks you a set of questions and generates a README file based on your answers';
        },
      },
      {
        type: 'input',
        name: 'installation',
        message: "How do you install the project?",
        default() {
          return 'You need to download node.js, then open your terminal and run "npm install" to get the app working. After that just use the "node index.mjs" command to start using the app';
        },
      }, {
        type: 'input',
        name: 'usage',
        message: "How is your project meant to be used?",
        default() {
          return 'Once started it will ask you a set of questions about your project. Simply answer them to generate your professional README file.';
        },
      },
      {
        type: 'input',
        name: 'contribution',
        message: "How can someone contribute to the project?",
        default() {
          return 'Check out the Issues if you would like to contribute';
        },
      },
      {
        type: 'input',
        name: 'tests',
        message: "What tests have been run?",
        default() {
          return 'Used the app to create this sample README file';
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your Github username?",
        default() {
          return 'pandi1813';
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        default() {
          return 'peter.andi1813@gmail.com';
        },
      },
  ])

  


//  **************** README TEXT **************************

let readmeText = `# ${title} ${generateLicense()}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the terms of the ${license} license.

## Contribution 
${contribution}

## Tests
${tests}

## Questions
- For more information check out my Github: [${github}](https://github.com/${github})
- For any questions email: [${email}](mailto:${email})

`


// Function to add license badge based on user selection 
function generateLicense() {
    if (license === "MIT") {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'IBM') {
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
    } else if (license === 'Boost') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
    }

}

// create README file with 'readmeText' as text content
fs.writeFile("README-sample.md", readmeText )


