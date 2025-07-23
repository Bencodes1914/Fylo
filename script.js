const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.src = "./images/icon-moon.svg";
} else {
    themeIcon.src = "./images/icon-sun.svg";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    
    themeIcon.src = isLight ? "./images/icon-moon.svg" : "./images/icon-sun.svg";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});