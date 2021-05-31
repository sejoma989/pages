//console.log("...cargando");
//console.log("El componente javascript ha cargado con éxito");
/* let links = document.querySelectorAll("a");
console.log(links)
links.forEach(function(link) {
    console.log(link);
//  link.addEventListener("click", function(event) {
//  event.preventDefault();
    });
}); */

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
    td.addEventListener('click', function() {
        console.log(this);
    })
}); */
let links = document.querySelectorAll(".close");

links.forEach(function(link) {

    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove("animate__animated");
        content.classList.remove("animate__bounceInDown");

        content.classList.add("animate__bounceOutDown");
        content.classList.add("animate__animated");

        setTimeout(function() {
            location.href = "/pages/p2";
        }, 600);

        return false;
    });
});