function toggleContact(){
    var contactSection = document.getElementById('contact'); 
    contactSection.classList.toggle('contactActive');
}

function toggleAbout(){
    var aboutSection = document.getElementById('about'); 
    aboutSection.classList.toggle('aboutActive');
    
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar and animated elements
    var navbar = document.getElementById("nav");
    var animated = document.getElementById("animation");
// console.log(animated)
    // Add click event listener to the whole document
    document.addEventListener("click", function(event) {
        navbar.style.display='block';
        animated.style.display ='none';
    });

    // Prevent animated element from hiding when clicked
    // animated.addEventListener("click", function(event) {
    //     event.stopPropagation(); // Prevent event from bubbling up to the document
    // });
});