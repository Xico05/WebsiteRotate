filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}















(function() {
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll('.nav-links a, .more a, .logo, .col a');
  
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
  
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".frame").forEach((shift) => {
      const position = shift.getAttribute("data-speed");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
  
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
})();


const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-links");
        const navLink = document.querySelectorAll(".nav-links");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        navLink.forEach(n => n.addEventListener("click", closeMenu));
