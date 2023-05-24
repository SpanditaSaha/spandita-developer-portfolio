// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}




// Scroll sections active link
console.log("LINKED");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });

    // Sticky navbar

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};


// scroll reveal

ScrollReveal({ 
    //reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });



// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'ML-AI Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function sendMail()
{
   console.log("Buttton working");
   var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    phone_number: document.getElementById("phone_number").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
}
emailjs.send("service_3jm8fgv","template_7h3kd6c", params).then(function (res){
    alert("Your Message Has Been Sent Successfully!" + res.status);
})
}
