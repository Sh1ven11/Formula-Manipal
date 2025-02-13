// Function to change menu color based on section in view
function updateMenuColor() {
    const menuIconLines = document.querySelectorAll(".menu .line");
    const homepage = document.querySelector(".homepage");
    const aboutUs = document.querySelector(".ABOUTUS");

    const homepageRect = homepage.getBoundingClientRect();
    const aboutUsRect = aboutUs.getBoundingClientRect();
    console.log(homepageRect.top +"bottom " +homepageRect.bottom)
    if (homepageRect.top <= 0 && homepageRect.bottom >= 0) {
        menuIconLines.forEach(line => line.style.stroke = "white");  // White in Homepage
    } else if (aboutUsRect.top <= 0 && aboutUsRect.bottom >= 0) {
        menuIconLines.forEach(line => line.style.stroke = "black");  // Black in ABOUT US
    }
}
document.querySelector(".menu").addEventListener("click",function(){
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    var element=document.querySelector(".sidebar");
  
if (element.style.display === "block") {
    element.style.display = "none";  
    document.querySelector(".sidebar").classList.remove("open")

} 
else{
    document.querySelector(".sidebar").classList.add("open")

    element.style.display = "block";   

    const menuIconLines = document.querySelectorAll(".menu .line");
    menuIconLines.forEach(line => line.style.stroke = "white");

}

})
// Run function on scroll
window.addEventListener("scroll", updateMenuColor);

// Run once on page load to set the initial color
window.addEventListener("DOMContentLoaded", updateMenuColor);
