const formTag = document.querySelector("form"),
    inputMessageGP = document.querySelector(".input-message-group"),
    emailInput = inputMessageGP.querySelector(".email-input"),
    message = inputMessageGP.querySelector(".message");

function checkEmail(e){
    e.preventDefault();
    const emailInputVal = emailInput.value;

    if(emailInputVal.includes("@gmail.com") || emailInputVal.includes("@email.com")){
        inputMessageGP.classList.remove("invalid");
        message.innerText = "The provided email address (or Gmail address) is accurate.";
    }else{
        inputMessageGP.classList.add("invalid");
        message.innerText = "Please provide a valid email.";
    }
}

formTag.addEventListener("submit", checkEmail);