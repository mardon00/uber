document.addEventListener("DOMContentLoaded", ()=> {
    const header = document.querySelector(".header_menu");
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", e => {
        if (header.classList.contains("header_menu_active")) {
            header.classList.remove("header_menu_active");
            hamburger.classList.remove("hamburger_close");
        } else {
            header.classList.add("header_menu_active");
            hamburger.classList.add("hamburger_close");
        }
        
    })
})