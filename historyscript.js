// define the first shape
let showOrigin = document.querySelector(".origin");
// define the origin contemt
let originTxt = document.querySelector(".origincontent");
// define the second shape
let showPop = document.querySelector(".popularization");
// define the popularization content
let popTxt = document.querySelector(".popularizationcontent");
//define the third shape
let showCulture = document.querySelector(".culture");
// define culture content
let cultureTxt = document.querySelector(".culturecontent");


// click the first shape, and the origin context shows up
// after 20s, the text box disappear automatically
showOrigin.addEventListener("click", function(){
    originTxt.classList.add("active");
    setTimeout(() => {
        originTxt.classList.remove("active");
       }, 20000);
})
// click the second shape, and popularization content shows up
// after 20s, the text box disappear automatically
showPop.addEventListener("click", function(){
    popTxt.classList.add("active");
    setTimeout(() => {
        popTxt.classList.remove("active");
       }, 20000);
})
// click the third shape, and culture content shows up
// after 20s, the text box disappear automatically
showCulture.addEventListener("click", function(){
    cultureTxt.classList.add("active");
    setTimeout(() => {
        cultureTxt.classList.remove("active");
       }, 20000);
})