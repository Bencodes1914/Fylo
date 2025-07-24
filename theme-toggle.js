const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const siteLogo = document.getElementById("site-logo");

function applyTheme(theme) {
    document.body.classList.toggle("light-mode", theme === "light");
    themeIcon.src = theme === "light" ? "./images/icon-moon.svg" : "./images/icon-sun.svg";
    siteLogo.src = theme === "light" ? "./images/logo.svg" : "./images/logo.svg";
    localStorage.setItem("theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleButton.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(newTheme);
});
