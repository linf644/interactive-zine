// define dog text
let hoverDog = document.querySelector(".showdog");
// define dog img
let showDog = document.querySelector(".dog");
// define homework text
let hoverHw = document.querySelector(".showhw");
// define hw img
let showHw = document.querySelector(".hw");

// hover over the word "dog", dog image appears
hoverDog.addEventListener("mouseover", function(){
    showDog.classList.add("active");
})
// mouse out dog image disappear
hoverDog.addEventListener("mouseout", function(){
    showDog.classList.remove("active");
})
// hover over the word "homework", homework image appears
hoverHw.addEventListener("mouseover", function(){
    showHw.classList.add("active");
})
// mouse out, homework image disappear
hoverHw.addEventListener("mouseout", function(){
    showHw.classList.remove("active");
})


