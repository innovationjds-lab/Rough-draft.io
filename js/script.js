/* ================= SCROLL REVEAL (SMOOTH + PERFORMANCE FRIENDLY) ================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.style.background = "rgba(15, 42, 67, 0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(15, 42, 67, 0.85)";
        navbar.style.boxShadow = "none";
    }
});


/* ================= HERO PARALLAX EFFECT ================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = scrollPosition * 0.4 + "px";
});


/* ================= SPARKLE EFFECT (IMPROVED) ================= */

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

setInterval(createSparkle, 500);


/* ================= GALLERY LIGHTBOX ================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {

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

        const imgClone = document.createElement("img");
        imgClone.src = img.src;
        imgClone.style.maxWidth = "90%";
        imgClone.style.maxHeight = "90%";
        imgClone.style.borderRadius = "20px";

        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });
});


/* ================= SCROLL PROGRESS BAR ================= */

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "linear-gradient(90deg, #5f8d4e, #a8dadc)";
progressBar.style.zIndex = "9999";
progressBar.style.width = "0%";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});


/* ================= OPTIONAL MOBILE MENU SUPPORT ================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}