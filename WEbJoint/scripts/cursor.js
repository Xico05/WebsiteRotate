let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links a, .more a, .footertxtl a, .col a. .slider-button');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px'; 
    
}

navLinks.forEach(link =>{
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    });
});