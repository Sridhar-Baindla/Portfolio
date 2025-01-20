function opentab(tabname, event) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove the active class from all tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    // Remove the active class from all tab contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add the active class to the clicked tab link and corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}
z

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
