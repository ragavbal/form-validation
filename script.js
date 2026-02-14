const form=document.getElementById("signupForm");
form.addEventListener("submit", function(e){
    e.preventDefault();

const nameInput=document.getElementById("name");
const nameError=document.getElementById("nameError");
const emailerror=document.getElementById("emailerror");
const emailInput = document.getElementById("email");

//reset error
nameError.textContent="";
emailerror.textContent="";

if (emailInput.value.trim() === "") {
  emailerror.textContent="email is required";
}
if(nameInput.value.trim()==="")
{
    nameError.textContent="Name is required";
    return;
}
console.log("Form Submitted");
})

