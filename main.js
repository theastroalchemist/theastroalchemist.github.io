/* ===========================================================
   MAIN.JS
   Premium Portfolio Website
   Part 1
   =========================================================== */

"use strict";

/* ===========================================================
   DOM READY
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


/* ===========================================================
   WEBSITE INITIALIZER
   =========================================================== */

function initializeWebsite(){

    console.log("Portfolio Website Initialized");

    initializeScrollToTop();

    initializeExternalLinks();

    initializeCurrentYear();

}


/* ===========================================================
   SCROLL TO TOP
   =========================================================== */

function initializeScrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"instant"

    });

}


/* ===========================================================
   OPEN EXTERNAL LINKS SAFELY
   =========================================================== */

function initializeExternalLinks(){

    const externalLinks = document.querySelectorAll(

        'a[target="_blank"]'

    );

    externalLinks.forEach(link=>{

        link.setAttribute(

            "rel",

            "noopener noreferrer"

        );

    });

}


/* ===========================================================
   CURRENT YEAR
   =========================================================== */

function initializeCurrentYear(){

    const yearElement =

        document.querySelector("#current-year");

    if(!yearElement) return;

    yearElement.textContent =

        new Date().getFullYear();

}


/* ===========================================================
   HELPER
   =========================================================== */

function $(selector){

    return document.querySelector(selector);

}


function $$(selector){

    return document.querySelectorAll(selector);

}


/* ===========================================================
   END OF PART 1
   =========================================================== */


/* ===========================================================
   MAIN.JS
   Premium Portfolio Website
   Part 2
   =========================================================== */



/* ===========================================================
   RESIZE EVENT
   =========================================================== */

window.addEventListener("resize", debounce(() => {

    console.log("Window Resized");

}, 200));


/* ===========================================================
   SCROLL EVENT
   =========================================================== */

window.addEventListener("scroll", throttle(() => {

    // Reserved for future global scroll logic

}, 100));


/* ===========================================================
   DEBOUNCE
   =========================================================== */

function debounce(callback, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback.apply(this, args);

        }, delay);

    };

}


/* ===========================================================
   THROTTLE
   =========================================================== */

function throttle(callback, limit){

    let waiting = false;

    return function(...args){

        if(waiting) return;

        callback.apply(this, args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

}


/* ===========================================================
   CHECK MOBILE DEVICE
   =========================================================== */

function isMobile(){

    return window.innerWidth <= 768;

}


/* ===========================================================
   SMOOTH SCROLL
   =========================================================== */

function smoothScroll(target){

    const element = document.querySelector(target);

    if(!element) return;

    element.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}


/* ===========================================================
   SAFE CONSOLE MESSAGE
   =========================================================== */

console.log(
    "%cPortfolio by Kaushalya Gumphalwar",
    "color:#00E5FF;font-size:14px;font-weight:bold;"
);


/* ===========================================================
   END OF MAIN.JS
   =========================================================== */