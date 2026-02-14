const form=document.getElementById("signupForm");
form.addEventListener("submit", function(e){
    e.preventDefault();

    const nameInput=document.getElementById("name");
if(nameInput.value.trim()==="")
{
    alert("Name Required!");
    return;
}

const emailInput = document.getElementById("email");

if (emailInput.value.trim() === "") {
  alert("Email is required");
  return;
}

    console.log("Form Submitted");
})

