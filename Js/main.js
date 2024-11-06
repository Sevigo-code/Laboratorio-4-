function saludar() {
    console.log("Hola mundo")
}

let isBlack = true;
const button = document.getElementsByTagName("button")[0];

let text = document.getElementsByTagName("h1")[0];
let form = document.getElementById("form");


button.addEventListener("click", function() {

    if(isBlack) {
        document.body.style.backgroundColor = "black";
        text.style.color = "white";
        //form.style.color = "white";
    }

    else {
        document.body.style.backgroundColor = "antiquewhite"
        text.style.color = "black"
        //form.style.color = "black";
    }
    
    isBlack = !isBlack

})

/*
A traves del DOM y empleando variables para asignar los elementos obtenidos
se crea la funcionalidad del DarkMode, esto es posible cambiando el CSS
a traves de los metodos JavaScript
*/