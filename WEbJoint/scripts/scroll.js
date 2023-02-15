let theEnd = 0,
    navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > theEnd) {
        navbar.style.top = '-15vh';
    } 
    else{ 
        navbar.style.top = '15px';
    }
    theEnd = scrollTop;
})

$(document).ready(function() {
        $(".navbar a, [href='#myPage']").on('click', function(event) {
            if (this.hash !== "") {
                var hash = this.hash;
                $('#overlay').css('display', 'block');
                setTimeout(function() {
                    window.location.href = hash;
                    setTimeout(function() {
                        $('#overlay').css('display', 'none');
                    }, 10);
                }, 100);
            }
        });
    });
//-----------------------------------------------------------------------------------hamburger menu------------
const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-links");
        const navLink = document.querySelectorAll(".nav-links");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
//--------------------------------------------------------------------------------CursorFollow

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links a, .more a, .footertxtl a, .col a, .logo, .footertxtr a');

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