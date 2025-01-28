window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('bg-white', 'shadow-md');
    } else {
      navbar.classList.remove('bg-white', 'shadow-md');
    }
  });