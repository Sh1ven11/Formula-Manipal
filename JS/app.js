// Function to change menu color based on section in view
var open=0;
function updateMenuColor() {
    const menuIconLines = document.querySelectorAll(".menu .line");
    const homepage = document.querySelector(".homepage");
    const aboutUs = document.querySelector(".ABOUTUS");
    const sponsor =document.querySelector(".Sponsors")

    const sponsorRect=sponsor.getBoundingClientRect();
    const homepageRect = homepage.getBoundingClientRect();
    const aboutUsRect = aboutUs.getBoundingClientRect();

    console.log(" about su"+aboutUsRect.top+"bottom "+aboutUsRect.bottom+"Sponsor"+sponsorRect.top+"bottom"+sponsorRect.bottom)
    if (homepageRect.top <= 0 && homepageRect.bottom >= 40 && open%2==0) {
        menuIconLines.forEach(line => line.style.stroke = "white");  // White in Homepage
    } else if (aboutUsRect.top <= 40 && aboutUsRect.bottom >= 10 ) {
        menuIconLines.forEach(line => line.style.stroke = "black");  // Black in ABOUT US
    }else{
        menuIconLines.forEach(line => line.style.stroke="white")
    }
}
document.querySelector(".menu").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("open")
    this.classList.toggle('opened');
    open++;
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    var element=document.querySelector(".sidebar");

    const menuIconLines = document.querySelectorAll(".menu .line");
    menuIconLines.forEach(line => line.style.stroke = "white");
    if (open%2==0){updateMenuColor();}

})
// Run function on scroll
window.addEventListener("scroll", updateMenuColor);

// Run once on page load to set the initial color
window.addEventListener("DOMContentLoaded", updateMenuColor);
