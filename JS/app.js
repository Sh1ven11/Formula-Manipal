// Function to change menu color based on section in view
function updateMenuColor() {
    const menuIconLines = document.querySelectorAll(".menu .line");
    const homepage = document.querySelector(".homepage");
    const aboutUs = document.querySelector(".ABOUTUS");

    const homepageRect = homepage.getBoundingClientRect();
    const aboutUsRect = aboutUs.getBoundingClientRect();
    console.log(homepageRect.top +"bottom " +homepageRect.bottom)
    if (homepageRect.top <= 0 && homepageRect.bottom >= 50) {
        menuIconLines.forEach(line => line.style.stroke = "white");  // White in Homepage
    } else if (aboutUsRect.top <= 0 && aboutUsRect.bottom >= 0) {
        menuIconLines.forEach(line => line.style.stroke = "black");  // Black in ABOUT US
    }
}
document.querySelector(".menu").addEventListener("click",function(){
    //onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    var element=document.querySelector(".sidebar");
    
if (element.style.display === "none") {
    element.style.display = "block";  // Show element
} else {
    element.style.display = "none";   // Hide element
}

})
// Run function on scroll
window.addEventListener("scroll", updateMenuColor);

// Run once on page load to set the initial color
window.addEventListener("DOMContentLoaded", updateMenuColor);
