// Get references to the toggle button and the icon inside it
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// On page load: Check if the user previously selected "light" theme
if (localStorage.getItem("theme") === "light") {
    // If yes, apply the "light-mode" class to the body
    document.body.classList.add("light-mode");
    // Set the icon to a moon
    themeIcon.src = "./images/icon-moon.svg";
} else {
    // If not, keep dark mode and set the icon to a sun 
    themeIcon.src = "./images/icon-sun.svg";
}

// Add an event listener to handle theme toggling when the button is clicked
toggleButton.addEventListener("click", () => {
    // Toggle the "light-mode" class on the body 
    document.body.classList.toggle("light-mode");

    // Check if the new mode is light mode
    const isLight = document.body.classList.contains("light-mode");
    
    // Update the icon based on the current mode
    themeIcon.src = isLight ? "./images/icon-moon.svg" : "./images/icon-sun.svg";

    // Save the current theme to localStorage so it persists after page reload
    localStorage.setItem("theme", isLight ? "light" : "dark");
});
