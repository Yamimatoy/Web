document.getElementById("show").addEventListener("submit",login);

function login(event){
    event.preventDefault()

    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if(username === "reaper@gmail.com" && password === "nakalimotko"){
        alert("Login succesfull");
        window.location.replace("main_interface.html");
    }

    else{
        alert("Incorrect username or password");
    }

}