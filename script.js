window.onload = onPageLoad();
function onPageLoad() {
    // Save primary and accent elements to global vars
    window.primaries = document.getElementsByClassName("color-primary");
    window.accents = document.getElementsByClassName("color-accent");

    if (localStorage.getItem("darkmode") == null)
        localStorage.setItem("darkmode", "false");

    if (localStorage.getItem("darkmode") == "true") {
        document.getElementById("dm-switch").checked = true;
        toggleDarkMode();
    }
}

function onDarkModeSwitch() {
    if (localStorage.getItem("darkmode") == "false")
        localStorage.setItem("darkmode", "true");
    else
        localStorage.setItem("darkmode", "false");

    toggleDarkMode();
}

function toggleDarkMode() {
    for (var i = 0; i < window.primaries.length; i++)
        window.primaries[i].classList.toggle("dark-mode-primary");

    for (var i = 0; i < window.accents.length; i++)
        window.accents[i].classList.toggle("dark-mode-accent");
}