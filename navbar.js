/* ===========================================================
   NAVBAR.JS
   Premium Portfolio Website
   Part 1
   =========================================================== */

"use strict";

/* ===========================================================
   NAVBAR ELEMENTS
   =========================================================== */

const header = document.querySelector("#header");

const navbar = document.querySelector(".navbar");

const mobileMenuButton = document.querySelector(".mobile-menu-btn");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");


/* ===========================================================
   INITIALIZE
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();

});


/* ===========================================================
   INITIALIZE NAVBAR
   =========================================================== */

function initializeNavbar(){

    initializeStickyNavbar();

    initializeMobileMenu();

}


/* ===========================================================
   STICKY NAVBAR
   =========================================================== */

function initializeStickyNavbar(){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 40){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}


/* ===========================================================
   MOBILE MENU
   =========================================================== */

function initializeMobileMenu(){

    if(!mobileMenuButton || !navMenu) return;

    mobileMenuButton.addEventListener("click", toggleMobileMenu);

}


/* ===========================================================
   TOGGLE MENU
   =========================================================== */

function toggleMobileMenu(){

    navMenu.classList.toggle("menu-open");

    mobileMenuButton.classList.toggle("active");

    updateMenuIcon();

}


/* ===========================================================
   UPDATE ICON
   =========================================================== */

function updateMenuIcon(){

    const icon = mobileMenuButton.querySelector("i");

    if(!icon) return;

    if(navMenu.classList.contains("menu-open")){

        icon.classList.remove("ri-menu-3-line");

        icon.classList.add("ri-close-line");

    }

    else{

        icon.classList.remove("ri-close-line");

        icon.classList.add("ri-menu-3-line");

    }

}


/* ===========================================================
   END OF PART 1
   =========================================================== */


/* ===========================================================
   NAVBAR.JS
   Premium Portfolio Website
   Part 2
   =========================================================== */


/* ===========================================================
   CLOSE MENU ON NAV LINK CLICK
   =========================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


/* ===========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   =========================================================== */

document.addEventListener("click", (event) => {

    if(!navMenu || !mobileMenuButton) return;

    const clickedInsideNavbar = navbar.contains(event.target);

    if(
        navMenu.classList.contains("menu-open") &&
        !clickedInsideNavbar
    ){

        closeMobileMenu();

    }

});


/* ===========================================================
   CLOSE MENU USING ESC KEY
   =========================================================== */

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        closeMobileMenu();

    }

});


/* ===========================================================
   CLOSE MOBILE MENU
   =========================================================== */

function closeMobileMenu(){

    if(!navMenu || !mobileMenuButton) return;

    navMenu.classList.remove("menu-open");

    mobileMenuButton.classList.remove("active");

    updateMenuIcon();

}


/* ===========================================================
   ACTIVE NAVIGATION
   =========================================================== */

window.addEventListener("scroll", highlightActiveSection);


function highlightActiveSection(){

    const sections = document.querySelectorAll("section[id]");

    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        const activeLink = document.querySelector(

            `.nav-link[href="#${sectionId}"]`

        );

        if(!activeLink) return;

        if(

            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight

        ){

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            activeLink.classList.add("active");

        }

    });

}


/* ===========================================================
   END OF NAVBAR.JS
   =========================================================== */