

 // navbar.js
 function includeNavbar() {
    const navbarContainer = document.getElementById('navbarContainer');
 
    if (navbarContainer) {
       fetch('navbar.html')
          .then(response => response.text())
          .then(data => {
             navbarContainer.innerHTML = data;
 
             
   const mobileNavShow = document.querySelector('.mobile-nav-show');
   const mobileNavHide = document.querySelector('.mobile-nav-hide');
 
   document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
     el.addEventListener('click', function(event) {
       event.preventDefault();
       mobileNavToogle();
     })
   });
 
   function mobileNavToogle() {
     document.querySelector('body').classList.toggle('mobile-nav-active');
     mobileNavShow.classList.toggle('d-none');
     mobileNavHide.classList.toggle('d-none');
   }
 
   const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
 
   navDropdowns.forEach(el => {
     el.addEventListener('click', function(event) {
       if (document.querySelector('.mobile-nav-active')) {
         event.preventDefault();
         this.classList.toggle('active');
         this.nextElementSibling.classList.toggle('dropdown-active');
 
         let dropDownIndicator = this.querySelector('.dropdown-indicator');
         dropDownIndicator.classList.toggle('bi-chevron-up');
         dropDownIndicator.classList.toggle('bi-chevron-down');
       }
     })
   });
 
             // Initialize any JavaScript components or plugins here
             // that are related to the navbar
          })
          .catch(error => {
             console.error('Error fetching navbar:', error);
          });
    }
 }
 window.onscroll = function() {
   changeNavbarColor();
 };
 
 function changeNavbarColor() {
   var navbar = document.getElementById("header");
 
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     navbar.style.backgroundColor = "#fff"; // Change to white when scrolled down
   } else {
     navbar.style.backgroundColor = "transparent"; // Change back to transparent when at the top
   }
 }
 
 document.addEventListener("DOMContentLoaded", function() {
     const path = window.location.pathname;
     const links = document.querySelectorAll('#navbar a');
   
     links.forEach(link => {
         if (link.getAttribute('href') === path) {
             // Add 'active' class to the matching link
             link.classList.add('active');
         } else {
             link.classList.remove('active');
         }
     });
 });
 
 
 
 // Call the function to include the navbar on page load
 includeNavbar();
 
 
 