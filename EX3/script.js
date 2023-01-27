var core = document.querySelector("#core");

core.addEventListener('click', event => {
  core.innerHTML = "Merci d'avoir cliqué !";
  core.classList.add("change-col");
});

