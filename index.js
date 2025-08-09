let barBtn = document.querySelector(".bar-btn")
let navBar = document.querySelector(".navbar")
let isActive = false
let icon = document.querySelector(".my-menu-bar")


barBtn.addEventListener("click", ()=> {
    if(isActive === false) {
        isActive = true
        navBar.classList.add("active")
        navBar.classList.remove("not-active")
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    }

    else{
        isActive = false
        navBar.classList.remove("active")
        navBar.classList.add("not-active")
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-xmark")
    }
})


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Validate fields
    const name = this.user_name.value.trim();
    const email = this.user_email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.sendForm("service_153xmi3", "template_9yjvdh9", this)
        .then(function() {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
});
