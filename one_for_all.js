function what(){

    let a = document.getElementById('show');
    let b = a.options[a.selectedIndex].value;

    if(b !== ""){
        window.location.href = b;
    }

}

document.getElementById('out').addEventListener("click", logout);
function logout(event){
    event.preventDefault()
    window.location.replace("login.html");
}