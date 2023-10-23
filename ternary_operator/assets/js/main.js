// ################################
//         ternary operator
// ################################

console.log("%c level-1_1", "color: blue; background-color: gold");
function checkAge()
{
    event.preventDefault();
    const inputAge = document.body.querySelector('#inputAge');
    const output = document.body.querySelector('#output');
    
    if(isNaN(inputAge.value) || inputAge.value === "")
    {
        output.textContent = "Please enter your Age.";
        return 0;
    }
    else 
    {
        const ergebnis = inputAge.value >= 18 ? output.textContent = "Volljährig" : output.textContent = "Minderjährig";
        console.clear()
        console.log(ergebnis);
    }
    
}

console.log("%c level-1_4", "color: blue; background-color: gold");

function checkPassword()
{
    event.preventDefault();
    const inputPassword = document.body.querySelector('#inputPassword');
    const infoDisplay = document.body.querySelector('#infoDisplay');
    
    const userInfo = inputPassword.value.length < 8 ? infoDisplay.textContent = "Password is to short." : infoDisplay.textContent = "Welcome to your new Account.";

    if(inputPassword.value.length < 8)
    {
        infoDisplay.classList.remove('message');
        infoDisplay.classList.add('errorMessage');
    }
    else
    {
        infoDisplay.classList.remove('errorMessage');
        infoDisplay.classList.add('message');
    }

    console.clear()
    console.log(userInfo);
}

console.log("%c level-2_1", "color: blue; background-color: gold");

function yourMessage()
{
    event.preventDefault();
    const textInput = document.body.querySelector('#txt_input');
    const infoDisplay2 = document.body.querySelector('#infoDisplay2');
    const textOutput = document.body.querySelector('#output2');

    const userMessage = textInput.value.length !== 0 ? textOutput.textContent = textInput.value : infoDisplay2.textContent = "Bitte Nachricht eingeben.";

    if(textInput.value.length !== 0)
    {
        infoDisplay2.textContent = "";
    }
}