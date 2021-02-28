var inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// const generateMarkdown = require('./utils/generateMarkdown.js')
// need to pull HTML generator 

function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Name-M",
            message: "What is your name?",
            default: 'Asante',

        },
        {
            type: "input",
            name: "id-M",
            message: "What is your employee ID number",
            default: '00000',

        },
        {
            type: "input",
            name: "email-M",
            message: "What is your email?",
            default: 'NA',

        },
        {
            type: "input",
            name: "office",
            message: "What is your email?",
            default: 'NA',

        },
        {
            type: "checkbox",
            message: "End of manager profile. What would yoiu like to do?",
            name: "Choice",
            choices: [
                "add an engineer",
                "add intern",
                "end team builder",
            ],

        },
    ])
};

init();
