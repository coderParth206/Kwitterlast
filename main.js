function login(){
username = document.getElementById("input_username").value;
localStorage.setItem("input_username", username);
window.location = "game.Index.html";
}
