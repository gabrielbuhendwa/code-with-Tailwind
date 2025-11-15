//menu icon toggle
window.onload = () => {
    const mobileMenuIcon = document.getElementById("mobile-menu-button");
    mobileMenuIcon.addEventListener("click", () => {
        if (mobileMenuIcon.classList.contains("open")) {
            mobileMenuIcon.classList.remove("open");
        }else{
            mobileMenuIcon.classList.add("open");
          }
        });

//tickets menu toggle
    const ticketsMenuItem = document.getElementById("ticket-menu-item");
    ticketsMenuItem.addEventListener("click", () => {
        if (ticketsMenuItem.classList.contains("open")) {
            ticketsMenuItem.classList.remove("open");
        }else{
            ticketsMenuItem.classList.add("open");
        }
    });
};