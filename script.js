const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.src = "./images/icon-moon.svg";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeIcon.src = isLight ? "./images/icon-sun.svg" : "./images/icon-moon.svg";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});
