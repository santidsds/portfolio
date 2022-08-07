gsap.from("#h-animation-x", {opacity: 0, x: 200,ease: "elastic.out(1,3)",duration: 1.5,delay:1});
gsap.from("#h-animation-1", {opacity: 0,ease: "elastic.out(0.1,0.3)",y: -100, duration: 2,delay:0.5});
gsap.from("#h-animation-2", {opacity: 0,ease: "elastic.out(0.5,0.3)",x: -300,duration: 2});
gsap.from("#h-animation-3", {opacity: 0,ease: "elastic.out(1,0.5)",x: -100, duration: 1,delay:1});


//REACT 

let react = document.getElementById("react");
let label = document.getElementById("react-label")

react.addEventListener('mouseover', () => {
    label.style.visibility = "visible";
    label.style.opacity = "1";
})

react.addEventListener('mouseout', () => {
    label.style.opacity = "0";
    label.style.visibility = "hidden";
})

label.addEventListener('mouseover', () => {
    label.style.visibility = "visible";
    label.style.opacity = "1";
})

label.addEventListener('mouseout', () => {
    label.style.opacity = "0";
    label.style.visibility = "hidden";
})  

//HTML

let html = document.getElementById("html");
let htmlLabel = document.getElementById("html-label")

html.addEventListener('mouseover', () => {
    htmlLabel.style.visibility = "visible";
    htmlLabel.style.opacity = "1";
})

html.addEventListener('mouseout', () => {
    htmlLabel.style.opacity = "0";
    htmlLabel.style.visibility = "hidden";
})

htmlLabel.addEventListener('mouseover', () => {
    htmlLabel.style.visibility = "visible";
    htmlLabel.style.opacity = "1";
})

htmlLabel.addEventListener('mouseout', () => {
    htmlLabel.style.opacity = "0";
    htmlLabel.style.visibility = "hidden";
})  

//CSS

let css = document.getElementById("css");
let cssLabel = document.getElementById("css-label")

css.addEventListener('mouseover', () => {
    cssLabel.style.visibility = "visible";
    cssLabel.style.opacity = "1";
})

css.addEventListener('mouseout', () => {
    cssLabel.style.opacity = "0";
    cssLabel.style.visibility = "hidden";
})

cssLabel.addEventListener('mouseover', () => {
    cssLabel.style.visibility = "visible";
    cssLabel.style.opacity = "1";
})

cssLabel.addEventListener('mouseout', () => {
    cssLabel.style.opacity = "0";
    cssLabel.style.visibility = "hidden";
})  

//JS

let js = document.getElementById("js");
let jsLabel = document.getElementById("js-label")

js.addEventListener('mouseover', () => {
    jsLabel.style.visibility = "visible";
    jsLabel.style.opacity = "1";
})

js.addEventListener('mouseout', () => {
    jsLabel.style.opacity = "0";
    jsLabel.style.visibility = "hidden";
})

jsLabel.addEventListener('mouseover', () => {
    jsLabel.style.visibility = "visible";
    jsLabel.style.opacity = "1";
})

jsLabel.addEventListener('mouseout', () => {
    jsLabel.style.opacity = "0";
    jsLabel.style.visibility = "hidden";
})  
