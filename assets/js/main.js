// Hide and view content sections
const nav_links = document.querySelectorAll('.menu-item');
nav_links.forEach(navItem => {
    navItem.addEventListener("click", function(event){
        event.preventDefault();

        // Remove active class from all navs
        nav_links.forEach(item => item.classList.remove("active"));

        // Add active class to the clicked item
        this.classList.add("active");

        // Get the ID attribute for the clicked nav
        const targetID = this.dataset.target;

        //Hide all sections
        const sections = document.querySelectorAll('.content-wrapper');
        sections.forEach(section => section.classList.add('d-none'));

        // Show the target section
        const targetSection = document.getElementById(targetID);
        targetSection.classList.remove('d-none');
    })
})