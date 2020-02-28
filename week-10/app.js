const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")
const render = require("./templates/renderHTML")

const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager")
const questions = require("./questions.js")
var team = []


function buildTeam() {
    inquirer
        .prompt(questions.addEmployee)
        .then(function (answers) {
            switch (answers.selection) {

                case 'Add engineer':
                    var engineerQuestions = questions.generalQuestions.concat(questions.engineerQuestions)
                    inquirer.prompt(engineerQuestions)
                        .then(function (answers) {
                            const engineerRes = new engineer(answers.name, parseInt(answers.id), answers.email, answers.github)
                            team.push(engineerRes)
                            buildTeam()
                        })

                    break

                case 'Add intern':
                    var internQuestions = questions.generalQuestions.concat(questions.internQuestions)
                    inquirer.prompt(internQuestions)
                        .then(function (answers) {
                            const internRes = new intern(answers.name, parseInt(answers.id), answers.email, answers.school)
                            team.push(internRes)
                            buildTeam()
                        })
                    break

                case 'Render HTML':

                    render(team)
                    break
            }
        })

};

function getManager() {
    var managerMainQuestions = questions.generalQuestions.concat(questions.managerQuestions)
    inquirer
        .prompt(managerMainQuestions)
        .then(function (answers) {
            const managerRes = new manager(answers.name, parseInt(answers.id), answers.email, answers.officeNumber)
            team.push(managerRes)

            buildTeam()
        })
}



getManager()

