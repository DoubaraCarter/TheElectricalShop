window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const navlinks = document.getElementById('navlinks');
    const navbtn = document.getElementById('nav-btn')
    if (window.scrollY > 0) {
      navbar.classList.add('bg-white', 'shadow-md');
      navlinks.classList.add('text-black')
      navbtn.classList.add('text-black')
    } else {
      navbar.classList.remove('bg-white', 'shadow-md');
      navlinks.classList.remove('text-black')
      navbtn.classList.remove('text-black')
    }
  });