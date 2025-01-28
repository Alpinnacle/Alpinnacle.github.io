window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    const topButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function welcomeTransition() {
    const greyOverlay = document.getElementById("grey-overlay")
    greyOverlay.classList.add ("dark-grey-overlayer")
    const greyTail = document.getElementById("grey-transition-tail")
    greyTail.classList.add ("grey-transition-tail")
    const orangeTail = document.getElementById("light-orange-transition-tail")
    orangeTail.classList.add ("light-orange-transition-tail")
    const blueTransition = document.getElementById("light-blue-transition")
    blueTransition.classList.add ("light-blue-transition")
    const orangeHead = document.getElementById("light-orange-transition-head")
    orangeHead.classList.add ("light-orange-transition-head")
    const greyHead = document.getElementById("grey-transition-head")
    greyHead.classList.add ("grey-transition-head")

    const disappearTimeout = setTimeout(function(){
        const goneLandingPage = document.getElementById("landing-page-container")
        goneLandingPage.remove();
    }, 2000);
}

function beginAutoTyping() {
    wPCont1Typing()
    p1Typing()
    wPCont2Typing()
    p2Typing()
    wPCont3Typing()
    p3Typing()
}

function wPCont1Typing(){
    const wPCont1 = document.getElementById("w-p-cont-1")
    wPCont1.classList.add ("welcome-portfolio-container-1")
    wPCont1.classList.remove ("item-hidden");
}

function p1Typing(){
    const p1 = document.getElementById("p1")
    p1.classList.add ("p1")
    p1.classList.remove ("item-hidden");
}

function wPCont2Typing(){
    const wPCont2 = document.getElementById("w-p-cont-2")
    wPCont2.classList.add ("welcome-portfolio-container-2")
    wPCont2.classList.remove ("item-hidden");
}

function p2Typing(){
    const p2 = document.getElementById("p2")
    p2.classList.add ("p2")
    p2.classList.remove ("item-hidden");
}

function wPCont3Typing(){
    const wPCont3 = document.getElementById("w-p-cont-3")
    wPCont3.classList.add ("welcome-portfolio-container-3")
    wPCont3.classList.remove ("item-hidden");
}

function p3Typing(){
    const p3 = document.getElementById("p3")
    p3.classList.add ("p3")
    p3.classList.remove ("item-hidden");
}

function stopArrowWave() {
    const scrollArrow = document.getElementById(scroll-arrow)
    scrollArrow;
}