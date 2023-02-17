import inquirer from 'inquirer';

let response = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'first_name',
        message: "What's your first name",
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default() {
          return 'Doe';
        },
      },
  ])