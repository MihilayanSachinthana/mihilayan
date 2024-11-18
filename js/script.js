// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    

}

//email

const form = document.querySelector('form');

const fullName = document.getElementById("name")
const email = document.getElementById("email")
const mobile = document.getElementById("mobile")
const subject = document.getElementById("subject")
const massage = document.getElementById("massage")

function sendEmail() {

    const bodyMassage = `full Name: ${fullName.value} <br>Email: ${email.value} <br>Mobile: ${mobile.value} <br>Subject: ${subject.value} <br>Massage: ${massage.value}`;

    Email.send({
        SecureToken: "7d3bb854-33dd-4436-af35-83e57a641f9c",
        To: 'mihilayansachinthana@gmail.com',
        From: "mihicom2@gmail.com",
        Subject: subject.value,
        Body: bodyMassage
    }).then(

        message =>  {
            if (message == "OK") {
                Swal.fire({
                    title: "Successful!",
                    text: "Your Message Sent...",
                    icon: "success"
                });
            }
        }
        
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();

    form.reset();
    return false;
});
