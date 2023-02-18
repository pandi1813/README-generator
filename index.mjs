import inquirer from 'inquirer';
import fs from 'fs/promises';

let {title,license, description, installation, usage, contribution, tests, github, email} = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?",
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a product license',
        choices: ['MIT', 'IBM', 'Boost'],
        // filter(val) {
        //   return val.toLowerCase();
        // },
      },
      {
        type: 'input',
        name: 'description',
        message: "How would you describe the project?",
      },
      {
        type: 'input',
        name: 'installation',
        message: "How do you install the project?",
      }, {
        type: 'input',
        name: 'usage',
        message: "How is your project meant to be used?",
      },
      {
        type: 'input',
        name: 'contribution',
        message: "How can someone contribute to the project?",
      },
      {
        type: 'input',
        name: 'tests',
        message: "What tests have been run?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your Github username?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
      },
  ])

  console.log(title, description)

let readmeText = `# ${title} ${generateLicense()}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## LIcense
This project is licensed under the terms of the ${license} license.

## Contribution 
${contribution}

## Tests
${tests}

## Questions
- For more information check out my Github: [${github}](https://github.com/${github})
- For any questions email: [${email}](mailto:${email})

`




function generateLicense() {
    if (license === "MIT") {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'IBM') {
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
    } else if (license === 'Boost') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
    }

}

console.log(license)

fs.writeFile("README.md", readmeText )


