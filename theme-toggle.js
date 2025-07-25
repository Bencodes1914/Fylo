// Get references to the DOM elements we need
const toggleButton = document.getElementById("theme-toggle"); // The button to toggle the dark and light themes
const themeIcon = document.getElementById("theme-icon");      // The icon that is inside the toggle button
const siteLogo = document.getElementById("site-logo");        // The website logo

// Function to apply a selected theme "light" or "dark"
function applyTheme(theme) {
    // Toggle the "light-mode" class on the body if theme is light
    document.body.classList.toggle("light-mode", theme === "light");

    // Change the icon image based on the current theme
    themeIcon.src = theme === "light" ? "./images/icon-moon.svg" : "./images/icon-sun.svg";

    // Change the site logo based on the theme 
    siteLogo.src = theme === "light" ? "./images/logo.svg" : "./images/logo.svg";

    // Save the selected theme in the localStorage 
    localStorage.setItem("theme", theme);
}

// Load the saved theme from localStorage if available, otherwise display "dark"
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme); // Apply the saved  theme on page load

// Listen for clicks on the toggle button to switch between themes
toggleButton.addEventListener("click", () => {
    // If the body already has light mode, switch to dark; otherwise, switch to light
    const newTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(newTheme); // Apply the new theme
});
