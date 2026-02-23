/* ================= LOAD COMPONENTS ================= */

function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("hero", "components/hero.html");
loadComponent("services", "components/services.html");
loadComponent("portfolio", "components/portfolio.html");
loadComponent("contact", "components/contact.html");
loadComponent("footer", "components/footer.html");


/* ================= WAIT UNTIL COMPONENTS LOAD ================= */

window.addEventListener("load", () => {

    // Smooth scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

});