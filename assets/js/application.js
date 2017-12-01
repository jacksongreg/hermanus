function myFunction() {
    var toggle = document.getElementById("myTopnav");
    if (toggle.className === "topnav") {
        toggle.className += " responsive";
    } else {
        toggle.className = "topnav";
    }
}
