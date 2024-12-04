

const loginButton=document.getElementById("loginBtn")
const cart=document.querySelector(".box")

loginButton.onclick=showLogin

function showLogin(){
    cart.style.display="none";
}
