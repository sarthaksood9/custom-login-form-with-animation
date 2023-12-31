const emailBtn = document.getElementById("email");
const phoneBtn = document.getElementById("phone");
const phoneField = document.getElementById("phoneField");
const emailField = document.getElementById("emailField");


// id="emailField"
// id="phoneField"

emailBtn.addEventListener("click", () => {
    const bluediv = document.getElementById("blueDiv");
    bluediv.style.left = "8.5rem";
    phoneField.style.display = "none";
    emailField.style.display = "block"
})

phoneBtn.addEventListener("click", () => {
    const bluediv = document.getElementById("blueDiv");
    bluediv.style.left = "0rem";
    phoneField.style.display = "block";
    emailField.style.display = "none"
})




function checkStringLength() {
    const passwordError=document.getElementById("passwordError");
    const emailError=document.getElementById("emailError");
    
    var inputPasswordElement = document.getElementById('password');
    var inputEmailElement = document.getElementById('emails');


    var passwordValue = inputPasswordElement.value;
    var emailValue = inputEmailElement.value;


    var passwordLength = passwordValue.length;
    var emailLength = emailValue.length;

    if(passwordLength===0){
        passwordError.style.display="block"
    }
    else{
        passwordError.style.display="none"
    }
    
    if(emailLength===0){
        emailError.style.display="block"
    }
    else{
        emailError.style.display="none"
    }

    


}

var inputEmailElement = document.getElementById('emails');

// console.log(emailValue);


inputEmailElement.addEventListener('input', function () {
    var emailValue = inputEmailElement.value;
    const loginBtn=document.getElementById("loginBtn");
    if(emailValue.includes("gmail.com")){
        // loginBtn.classList.toggle="Primary Pink-Orange-Gradient SignIn-Submit-Button Disabled"
        // loginBtn.classList.remove="Primary Pink-Orange-Gradient SignIn-Submit-Button"

        loginBtn.style.opacity="1"

    }
    else{
        loginBtn.style.opacity=".5"
    }
});