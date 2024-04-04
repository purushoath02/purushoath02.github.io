function toggleContact(){
    var nav = document.getElementById('nav');
    nav.classList.add('active')
    nav.classList.remove('show')
    var contactSection = document.getElementById('contact'); 
    contactSection.classList.toggle('contactActive');
}

function toggleAbout(){
    var nav = document.getElementById('nav');
    nav.classList.add('active')
    nav.classList.remove('show')
    var aboutSection = document.getElementById('about'); 
    aboutSection.classList.toggle('aboutActive');
    
}


document.addEventListener("DOMContentLoaded", function() {
  
    var navbar = document.getElementById("nav");
    var animated = document.getElementById("animation");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");

    document.addEventListener("click", function handleClick(event) {
        navbar.classList.add('show')
        navbar.classList.remove('hidden')
        animated.remove();
      document.removeEventListener("click", handleClick)
     console.log(navbar.classList);
    });
    navbar.addEventListener("click", function(evenr){
        if(!about.classList.contains('aboutActive') && !contact.classList.contains('contactActive'))
        {
            navbar.classList.add('show');
            navbar.classList.remove('active')
        }
    })

    

})
