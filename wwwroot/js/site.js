// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Write your JavaScript code.

// Function to handle smooth scrolling to products table
function exploreProducts() {
    // Get the button element
    const exploreButton = document.querySelector('a.btn.btn-primary');

    // Add a click event listener
    exploreButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Scroll to the products table
        const productsTable = document.querySelector('table.table');
        productsTable.scrollIntoView({ behavior: 'smooth' });
    });
}

// Function to handle image hover effect
function handleImageHover() {
    // Get all product images
    const productImages = document.querySelectorAll('img.our-work-image');

    // Add event listeners for mouseover and mouseout
    productImages.forEach((img) => {
        img.addEventListener('mouseover', () => {
            img.classList.add('img-zoom');
        });

        img.addEventListener('mouseout', () => {
            img.classList.remove('img-zoom');
        });
    });
}

// Function to handle parallax effect on scroll
function handleParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        parallaxElements.forEach((element) => {
            const scrollPosition = window.pageYOffset;
            const elementPosition = element.offsetTop;

            if (scrollPosition > elementPosition - window.innerHeight) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    });
}

// Function to handle smooth scrolling to sections
function handleSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Function to initialize the JavaScript functionality
function init() {
    exploreProducts();
    handleImageHover();
    handleParallaxEffect();
    handleSmoothScrolling();
}

// Call the init function when the page is loaded
window.addEventListener('DOMContentLoaded', init);