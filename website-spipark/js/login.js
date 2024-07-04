var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var loginButton = document.querySelector("#loginButton");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
});

loginButton.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do botão
  window.location.href = "index.html"; // Redireciona para index.html
});