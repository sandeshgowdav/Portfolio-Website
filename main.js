/******** toggle icon navbar **********/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/******** scroll section **********/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && tp < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /******** sticky navbar **********/

    let header = document.querySelector('headrer');
    header.classList.toggle('sticky', window.scrollY > 100);

    /******** remove toggle icon & navbar **********/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/******** scroll reveal **********/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, project-box, contact-form', {origin: 'left' });
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right' });


/******** styped js **********/

const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Blockchain Developer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});


/** Form JS **/


const scriptURL = 'https://script.google.com/macros/s/AKfycbzMpHHnGyulopivhF84cKINiPKoUDFvtX5Q_fGz0_ocDyTjsXkle97w-7HQ1FsfjGIX_w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})








