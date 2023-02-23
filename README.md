# Command line README generator app
 Video demo available [here](https://drive.google.com/file/d/1MXX_b3gWxeL2ZBqB9ItiQRqYoZQV5vQj/view)

 I used default values as the answers for demo purposes
  
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The challenge

To create a command line app using node.js and npm inquirer to ask a user a set of questions and generate a README file based on the answers
 
A README-sample.md was generated using the app and is included in the repo

### Screenshot
A screenshot of the command line questions
 
![](./images/Screenshot%202023-02-19%20161028.png)


 
 Screenshot of the README file created with the above answers
 
![](./images/Screenshot%202023-02-19%20162447.png)

## My process
After importing installing and importing Inquirer into the index.mjs file i created the first question prompt, created a variable for the README text and linked in the answer. Then I used 'fs.writefile' to create the readme file. Once it worked added the rest of the questions and sections to the README file. 


### Built with

- node.js
- npm Inquirer
- object destructuring




### What I learned

- What node.js is and how we can use it to create apps that can be run without a browser
- How to use npm and particularly Inquirer to import and use their code in our own projects
- How to destructure objects and arrays




```js
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
```
