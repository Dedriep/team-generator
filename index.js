const fs = require('fs')
var inquirer = require('inquirer')
const homepageTemplate = require('./src/homepage')


// questions to generate manager info
const managerQuestions = () => {
    return inquirer.prompt ([
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
    ])
    
}

// array to generate team member info
    const chooseTeam = () => {
        return inquirer.prompt ( {

            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add additional Team Members',
            choices: ["Engineer", "Intern", "None"]
            
        })
        .then(data => {
            if(data.choices == "Engineer") {
                addEngineer
            }else if (data.choices == "Intern") {
                addIntern
            }else {
            }
        })
        
    }
    

    

    const addEngineer= () => {
        return inquirer.prompt ([
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
    ])
}

    const addIntern = () => {
    return inquirer.prompt([
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
    ])
}

function init () {
managerQuestions ()
.then((data)=>{
    homepageTemplate(data)
    writeToFile(data)
})

.then(chooseTeam)  

.then((data)=>{
    homepageTemplate(data)
    writeToFile(data)
})

}



   

  function writeToFile (data)  {fs.writeFile('./dist/generated.html', homepageTemplate(data), err => {
        if (err) throw err;
          console.log(' Generator complete');
       });
      }




init()