const fs = require('fs')
var inquirer = require('inquirer')



// questions to generate manager info
const managerQuestions =
    [
        {

            type: 'input',
            name: 'Manager',
            message: 'What is your Team Managers Name? (Required)',
            validate: manager => {
                if (manager) {
                    return true;
                } else {
                    console.log("Please enter your Team Manager's name?")
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'phone',
            message: 'What is the Team Managers phone number?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the Team Managers email?',
        },
        
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the Team Managers Employee ID?',
        },
    ]

// function to generate team member info
    const teamMembers = [

        {

            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add additional Team Members',
            choices: ["Engineer", "Intern", "None"]
        },
    

    ]

function init() {
    inquirer.prompt(managerQuestions)
}

init()