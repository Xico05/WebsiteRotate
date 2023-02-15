const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'),
            entry.target.classList.add('reveal');
        } else {
            entry.target.classList.remove('show'),
            entry.target.classList.remove('reveal');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hideElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));
hideElements.forEach((el) => observer.observe(el));


