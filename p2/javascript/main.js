console.log("...cargando");
console.log("El componente javascript ha cargado con éxito");

let links = document.querySelectorAll(".close");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {
        console.log("Paila papi");
        event.preventDefault();
        return false;
    });
});