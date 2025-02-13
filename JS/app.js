// Function to change menu color based on section in view
var open=0;
function updateMenuColor() {
    const menuIconLines = document.querySelectorAll(".menu .line");
    const homepage = document.querySelector(".homepage");
    const aboutUs = document.querySelector(".ABOUTUS");

    const homepageRect = homepage.getBoundingClientRect();
    const aboutUsRect = aboutUs.getBoundingClientRect();
    console.log(homepageRect.top +"bottom " +homepageRect.bottom)
    if (homepageRect.top <= 0 && homepageRect.bottom >= 0 && open%2==0) {
        menuIconLines.forEach(line => line.style.stroke = "white");  // White in Homepage
    } else if (aboutUsRect.top <= 0 && aboutUsRect.bottom >= 0 ) {
        menuIconLines.forEach(line => line.style.stroke = "black");  // Black in ABOUT US
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



})
// Run function on scroll
window.addEventListener("scroll", updateMenuColor);

// Run once on page load to set the initial color
window.addEventListener("DOMContentLoaded", updateMenuColor);
