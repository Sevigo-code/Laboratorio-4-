function saludar() {
    console.log("Hola mundo")
}

let isBlack = true;
const button = document.getElementsByTagName("button")[0];

let text = document.getElementsByTagName("h1")[0];


button.addEventListener("click", function() {

    if(isBlack) {
        document.body.style.backgroundColor = "black";
        text.style.color = "white"
    }

    else {
        document.body.style.backgroundColor = "antiquewhite"
        text.style.color = "black"
    }
    
    isBlack = !isBlack

})