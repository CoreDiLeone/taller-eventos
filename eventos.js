
const button = document.getElementById("btn");

button.addEventListener("click", function(saludo){
saludo.stopPropagation();
alert("Hola!");
});

const container = document.getElementById("btn-container");

container.addEventListener("click", function (evento){
evento.stopPropagation();
alert("Hola! Soy el div");

});