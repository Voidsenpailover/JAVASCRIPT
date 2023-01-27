var button = document.querySelector("#buttonP");
var array = document.querySelectorAll("#liste li");

console.log(array);
button.addEventListener('click', (event) => {
    array.forEach(element => {
      element.classList.toggle("bleu");
      element.classList.toggle("vert");
  });
});

