window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 50 ? '#222' : '#333';
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
