/* ===========================================================
   ANIMATIONS.JS
   Premium Portfolio Website
   Part 1
   =========================================================== */

"use strict";

/* ===========================================================
   INITIALIZE
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeRevealAnimations();

});


/* ===========================================================
   REVEAL ELEMENTS
   =========================================================== */

const revealElements = document.querySelectorAll(

    ".fade-up, .fade-down, .fade-left, .fade-right, .scale-in"

);


/* ===========================================================
   INTERSECTION OBSERVER
   =========================================================== */

function initializeRevealAnimations(){

    if(!("IntersectionObserver" in window)){

        revealElements.forEach(element=>{

            element.classList.add("reveal-visible");

        });

        return;

    }

    const observer = new IntersectionObserver(

        revealOnScroll,

        {

            threshold:0.15,

            root:null,

            rootMargin:"0px 0px -50px 0px"

        }

    );

    revealElements.forEach(element=>{

        observer.observe(element);

    });

}


/* ===========================================================
   REVEAL CALLBACK
   =========================================================== */

function revealOnScroll(entries, observer){

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        entry.target.classList.add("reveal-visible");

        observer.unobserve(entry.target);

    });

}


/* ===========================================================
   END OF PART 1
   =========================================================== */


/* ===========================================================
   ANIMATIONS.JS
   Premium Portfolio Website
   Part 2
   =========================================================== */


/* ===========================================================
   STAGGER ANIMATION
   =========================================================== */

const staggerContainers = document.querySelectorAll(".stagger");

staggerContainers.forEach(container => {

    observeStaggerContainer(container);

});


function observeStaggerContainer(container){

    if(!("IntersectionObserver" in window)){

        container.classList.add("active");

        return;

    }

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(!entry.isIntersecting) return;

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        });

    },{

        threshold:0.15

    });

    observer.observe(container);

}


/* ===========================================================
   FLOATING ELEMENTS
   =========================================================== */

const floatingElements = document.querySelectorAll(".floating");

floatingElements.forEach(element => {

    element.style.willChange = "transform";

});


/* ===========================================================
   IMAGE ZOOM
   =========================================================== */

const zoomImages = document.querySelectorAll(".image-zoom img");

zoomImages.forEach(image => {

    image.setAttribute("loading","lazy");

});


/* ===========================================================
   ANIMATION RESET
   =========================================================== */

function resetRevealAnimations(){

    revealElements.forEach(element => {

        element.classList.remove("reveal-visible");

    });

}


/* ===========================================================
   MANUAL RE-INITIALIZATION
   =========================================================== */

function refreshAnimations(){

    initializeRevealAnimations();

}


/* ===========================================================
   PAGE VISIBILITY
   =========================================================== */

document.addEventListener("visibilitychange", () => {

    if(document.hidden) return;

    refreshAnimations();

});


/* ===========================================================
   SAFE INITIALIZATION
   =========================================================== */

window.addEventListener("load", () => {

    refreshAnimations();

});


/* ===========================================================
   END OF ANIMATIONS.JS
   =========================================================== */