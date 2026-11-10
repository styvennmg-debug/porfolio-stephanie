
// Éléments du menu
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Ouvrir et fermer le menu mobile
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
    menuToggle.textContent = navbar.classList.contains("open") ? "✕" : "☰";
});

// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// Mode clair et mode sombre
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkMode = document.body.classList.contains("dark-mode");
    themeToggle.textContent = darkMode ? "☀" : "☾";

    localStorage.setItem("theme", darkMode ? "dark" : "light");
});

// Restaurer le thème choisi
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀";
}

// Animations au défilement
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Bouton retour en haut
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mettre en évidence la section active dans le menu
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar a");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.35
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Écran de chargement
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 500);
});
