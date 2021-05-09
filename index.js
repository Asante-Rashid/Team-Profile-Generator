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
            name: "office-M",
            message: "What is your office number?",
            default: 'NA',

        },
              {
            type: "checkbox",
            message: "End of profile. What would yoiu like to do?",
            name: "Choice",
            choices: [
                "add engineer",
                "add intern",
                "end team builder",
            ],

        }
    ]).then(finalAction => {
        switch (finalAction.choices){
            case "add engineer": addEnginer();
            case "add intern": addIntern();
            case "end team builder": completeTeam();
        }
    })
};

function addEnginer() {
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
            name: "github-M",
            message: "What is your GitHub?",
            default: 'NA',

        },
              {
            type: "checkbox",
            message: "End of profile. What would yoiu like to do?",
            name: "Choice",
            choices: [
                "add engineer",
                "add intern",
                "end team builder",
            ],

        }
    ]).then(finalAction => {
        switch (finalAction.choices){
            case "add engineer": addEnginer();
            case "add intern": addIntern();
            case "end team builder": completeTeam();
        }
    })
};

function addIntern() {
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
            name: "school-M",
            message: "What is your school?",
            default: 'NA',

        },
              {
            type: "checkbox",
            message: "End of profile. What would yoiu like to do?",
            name: "Choice",
            choices: [
                "add engineer",
                "add intern",
                "end team builder",
            ],

        }
    ]).then(finalAction => {
        switch (finalAction.choices){
            case "add engineer": addEnginer();
            case "add intern": addIntern();
            case "end team builder": completeTeam();
        }
    })
};

function completeTeam();

init();
