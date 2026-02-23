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

/* ================= SMOOTH SCROLL ================= */
window.addEventListener("load", () => {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});

/* ================= SPARKLES / BUBBLES ================= */
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.width = `${20 + Math.random() * 50}px`;
    bubble.style.height = bubble.style.width;
    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 8000);
}

setInterval(createBubble, 600);

/* ================= PORTFOLIO LIGHTBOX ================= */
document.addEventListener("click", (e) => {
    if(e.target.closest(".portfolio-item")) {
        const imgUrl = e.target.closest(".portfolio-item").style.backgroundImage.slice(5,-2);
        const lightbox = document.createElement("div");
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,0.9)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = "9999";

        const img = document.createElement("img");
        img.src = imgUrl;
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "20px";

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => lightbox.remove());
    }
});

/* ================= SCROLL REVEAL ================= */
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });
sections.forEach(section => observer.observe(section));

/* ================= NAVBAR SHADOW ON SCROLL ================= */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }
});