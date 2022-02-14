let form = document.getElementById("form");
let emailInput = document.getElementById("email");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    /* Check that user enters a value */
    const emailValue = emailInput.value;
    if(emailValue === ""){
        alert("Please enter your email");
        document.form.Email.focus();
        return false;
    }
    else{
        if(!validateEmail(emailValue)){
            form.classList.add("error");
        }
        else{
            form.classList.remove("error");
            document.body.innerHTML = `<div 
            style="display:flex;
            justify-content:center;
            align-items:center;
            margin-top:25%">
            <h1>THANK YOU!!</h1></div>`
        }
    }

})

function validateEmail(email){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
