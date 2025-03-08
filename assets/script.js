function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert( "Usuário ou senha incorretos.");
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}