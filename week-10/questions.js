
var questions = {
    generalQuestions:[
    {
        type: "input",
        message: "Enter your name",
        name: "name"
    },  {
        type: "input",
        message: "Input Email",
        name: "email"
    },{
        type: "input",
        message: "Enter ID",
        name: "id"
    }
],

    internQuestions: [
        {
            type: "input",
            message: "What school are you going to?",
            name: "school"
        }
    ],

    managerQuestions:[
        {
            type: "input",
            message: "What's the office number?",
            name: "officeNumber"
        }
    ],

    engineerQuestions:[
        {
            type: "input",
            message: "What is your github username?",
            name: "github"
        }
    ],
    addEmployee:[
        {
            type: "list",
            message: "What do you want to do?",
            choices:["Add engineer", "Add intern", "Render HTML"],
            name: "selection"
        }
    ]
};


module.exports = questions
