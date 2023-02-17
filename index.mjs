import inquirer from 'inquirer';

let {title, description, installation, usage, contribution, tests} = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?",
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
        message: "How can someone contribute to teh project?",
      },
      {
        type: 'input',
        name: 'tests',
        message: "What tests have been run?",
      },
  ])

  console.log(title, description)

`# ${title}


## Description
${description}

## Installation
${installation}

## Contribution 
${contribution}

## Tests
${tests}
`
  