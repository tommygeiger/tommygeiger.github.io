window.onload = onPageLoad();
function onPageLoad() {

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

    var primaries = document.getElementsByClassName("color-primary");
    var accents = document.getElementsByClassName("color-accent");

    for (var i = 0; i < primaries.length; i++)
        primaries[i].classList.toggle("dark-mode-primary");

    for (var i = 0; i < accents.length; i++)
        accents[i].classList.toggle("dark-mode-accent");
}