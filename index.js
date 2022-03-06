const fs = require('fs')
var inquirer = require('inquirer')
const homepageTemplate = require('./src/homepage')


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

// array to generate team member info
    const chooseTeam = [

        {

            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add additional Team Members',
            choices: ["Engineer", "Intern", "None"]
            
        },
    

    ]

    const addEngineer= [
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the members name',
        },

        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the members team ID?',
        },
        
        {
            type: 'input',
            name: 'engineerUserName',
            message: 'What is the members Github Username',
        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the members email address',
        },
    ]

    const addMember = [
        {
            type: 'input',
            name: 'internName',
            message: 'What is the members name',
        },

        {
            type: 'input',
            name: 'internId',
            message: 'What is the members team ID?',
        },
        
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the members school?',
        },

        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the members email address',
        },
    ]

    function writeToFile (answers)  {fs.writeFile('./dist/generated.html', homepageTemplate(answers), err => {
        if (err) throw err;
          console.log(' Generator complete');
       });
      }

function init() {
    //inquirer.prompt(managerQuestions)
    inquirer.prompt(chooseTeam) 
        if ('addTeam'=== 'Engineer') {
            return inquirer.prompt(addEngineer),
            inquirer.prompt(chooseTeam) 
        } else if ('addTeam'=== 'Intern'){
            return inquirer.prompt(addMember) 
        } else {
            return ''
        }
    



    // .then((answers)=>{
    //     homepageTemplate(answers)
    //     writeToFile(answers)
    // })
}

init()