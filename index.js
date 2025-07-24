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