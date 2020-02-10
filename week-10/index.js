const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const generateHTML = require('./generateHTML.js');


let data = {};

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"

    },

    {
        message: 'Please choose your favorite color',
        name: "color",
        type: "list",
        choices: ['green', 'red', 'pink', 'blue']
    }
];

function init() {
    try {
        inquirer
            .prompt(questions)
            .then(function (answers) {
                const queryUrl = `https://api.github.com/users/${answers.username}`;

                axios
                .get(queryUrl)
                .then(function (res) {

                    const html = generateHTML.generateHTML(res, answers)
                    return writeFileAsync("index.html", html);
                })
                .then(function() {
                  console.log("Successfully wrote to index.html");
                })  });
    } catch (error) {
        console.log(error)
    }
}

init();