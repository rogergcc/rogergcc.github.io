


const body = document.querySelector('body');

const main = document.querySelector('main');

body.addEventListener("click", () => {
    var currentClass = main.className;

    main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
   
});