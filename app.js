"use strict";

window.addEventListener("load", initApp);

function initApp() {
console.log("app.js code is working!");
const string = "Hello world";
showText(string)
}

function showText(string) {
    console.log(string);
}