/* ===========================================================
   SCROLL.JS
   Premium Portfolio Website
   Part 1
   =========================================================== */

"use strict";

/* ===========================================================
   INITIALIZE
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeSmoothScroll();

});


/* ===========================================================
   SMOOTH SCROLL
   =========================================================== */

function initializeSmoothScroll(){

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function(event){

            const targetId = this.getAttribute("href");

            if(targetId === "#") return;

            const targetSection = document.querySelector(targetId);

            if(!targetSection) return;

            event.preventDefault();

            const headerHeight =
                document.querySelector("#header")?.offsetHeight || 80;

            const targetPosition =
                targetSection.offsetTop - headerHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });

}


/* ===========================================================
   SCROLL PROGRESS BAR
   =========================================================== */

window.addEventListener("scroll", updateScrollProgress);


function updateScrollProgress(){

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.documentElement.style.setProperty(

        "--scroll-progress",

        `${progress}%`

    );

}


/* ===========================================================
   END OF PART 1
   =========================================================== */


/* ===========================================================
   SCROLL.JS
   Premium Portfolio Website
   Part 2
   =========================================================== */


/* ===========================================================
   BACK TO TOP BUTTON
   =========================================================== */

const backToTopButton = document.querySelector(".back-to-top");


window.addEventListener("scroll", toggleBackToTopButton, {

    passive:true

});


function toggleBackToTopButton(){

    if(!backToTopButton) return;

    if(window.scrollY > 500){

        backToTopButton.classList.add("show");

    }

    else{

        backToTopButton.classList.remove("show");

    }

}


/* ===========================================================
   BACK TO TOP CLICK
   =========================================================== */

if(backToTopButton){

    backToTopButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ===========================================================
   SCROLL DIRECTION
   =========================================================== */

let lastScrollPosition = 0;


window.addEventListener("scroll", detectScrollDirection, {

    passive:true

});


function detectScrollDirection(){

    const currentScroll = window.scrollY;

    if(currentScroll > lastScrollPosition){

        document.body.classList.add("scroll-down");

        document.body.classList.remove("scroll-up");

    }

    else{

        document.body.classList.add("scroll-up");

        document.body.classList.remove("scroll-down");

    }

    lastScrollPosition = currentScroll;

}


/* ===========================================================
   SCROLL TO ELEMENT
   =========================================================== */

function scrollToElement(selector){

    const element = document.querySelector(selector);

    if(!element) return;

    const headerHeight =
        document.querySelector("#header")?.offsetHeight || 80;

    window.scrollTo({

        top: element.offsetTop - headerHeight,

        behavior:"smooth"

    });

}


/* ===========================================================
   END OF SCROLL.JS
   =========================================================== */