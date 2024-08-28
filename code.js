var menuicon = document.getElementById("menuicon");
var mobnav = document.getElementById("mobnav");
menuicon.style.transform = "scale(1)";
mobnav.style.opacity = "0";
mobnav.style.display = "none";

menuicon.addEventListener('click', function () {
    var scale = menuicon.style.transform;
    if (scale === "scale(1.3)") {
        menuicon.style.transform = "scale(1)";
        menuicon.style.transition = "all 0.5s ease";
        mobnav.style.opacity = "0";
        mobnav.style.transition = "opacity 0.5s ease";
        setTimeout(function () {
            mobnav.style.display = "none";
        }, 500);
    }
    else {
        menuicon.style.transform = "scale(1.3)";
        menuicon.style.transition = "all 0.5s ease";
        mobnav.style.display = "block";
        setTimeout(function () {
            mobnav.style.opacity = "1";
            mobnav.style.transition = "opacity 0.5s ease";
        }, 10);
        mobnav.style.transform = "scaleY(1)";
    }
});


var cont1 = document.getElementById("cont1");
var mainpic = document.getElementById("mainpic");


cont1.addEventListener("mouseout", function () {
    mainpic.style.filter = "blur(1px)";
    cont1.style.border = "1px solid rgb(0, 208, 255)"
});
cont1.addEventListener("mouseover", function () {
    mainpic.style.filter = "blur(8px)";
    cont1.style.border = "none"

});