var core = document.querySelector("#core");
var core2 = document.querySelector("#removed");


core.innerHTML = "Le texte a été changé !";
core.insertAdjacentHTML("afterbegin", "<p> Wow </p>");

core2.remove();

