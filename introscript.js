// define trash can
let openText = document.querySelector(".trashcan");
// define intro text
let showIntro = document.querySelector(".intro");
// define "where" text
let showWhere = document.querySelector(".where");

// click or tap the trash can and intro text show up
openText.addEventListener("click", function(){
    showIntro.classList.add("active");
    showIntro.classList.add("disappear");
    openText.classList.add("inactive");
    setTimeout(() => {
        document.querySelector(".where").classList.add("active");
       }, 18000);
})