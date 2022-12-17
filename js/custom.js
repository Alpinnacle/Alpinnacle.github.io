let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}