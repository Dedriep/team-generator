
module.exports = homepageTemplate 

// function to generate html

function homepageTemplate (data){
return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
</head>
<body>
<div class="Manager-info">
${data.Manager}
${data.phone}
${data.email}
${data.employeeId}
</div>
    
</body>
</html>

`
}