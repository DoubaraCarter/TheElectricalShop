window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const navlinks = document.getElementById('navlinks');
    const navbtn = document.getElementById('nav-btn')
    const menuBtn = document.getElementById("menu-btn");
    if (window.scrollY > 0) {
      navbar.classList.add('bg-white', 'shadow-md');
      navlinks.classList.add('text-black')
      navbtn.classList.add('text-black')
      menuBtn.classList.add('text-black')
    } else {
      navbar.classList.remove('bg-white', 'shadow-md');
      navlinks.classList.remove('text-black')
      navbtn.classList.remove('text-black')
      menuBtn.classList.remove('text-black')
    }
  });

    document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
      mobileMenu.style.right = "0"; // Slide in
    });

    closeBtn.addEventListener("click", function () {
      mobileMenu.style.right = "-100%"; // Slide out
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        mobileMenu.style.right = "-100%";
      }
    });
  });