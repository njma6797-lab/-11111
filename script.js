const clickSound = document.getElementById("click-sound");

function openPage(page) {
    clickSound.play();

    if (page === "editor") {
        window.location = "editor.html";
    }
    else if (page === "test") {
        window.location = "test.html";
    }
    else if (page === "tools") {
        window.location = "tools.html";
    }
}
