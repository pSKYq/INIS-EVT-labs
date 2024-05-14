document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;
  
      carouselItems.forEach(item => item.classList.remove('animate'));
  
      carouselItems[currentIndex].classList.add('animate');
  
      setTimeout(function() {
        carouselItems[currentIndex].classList.remove('animate');
      }, 3000);
    }
  });
  
  document.addEventListener('click', function(event) {
    const navigation = document.querySelector('.navigation');
    const carouselContainer = document.querySelector('.carousel-container');
    const burgerMenu = document.querySelector('.burger-menu');
    
    if (!event.target.closest('.navigation') && !event.target.closest('.burger-menu')) {
        navigation.classList.remove('active');
        carouselContainer.classList.remove('active'); 
        carouselContainer.style.marginTop = '0'; 
        burgerMenu.classList.remove('active'); 
    }
});

document.querySelector('.burger-menu').addEventListener('click', function(event) {
    const navigation = document.querySelector('.navigation');
    const carouselContainer = document.querySelector('.carousel-container');
    const isActive = navigation.classList.contains('active');
    const burgerMenu = document.querySelector('.burger-menu');
    
    if (isActive) {
        navigation.classList.remove('active');
        carouselContainer.classList.remove('active'); 
        carouselContainer.style.marginTop = '0'; 
        burgerMenu.classList.remove('active');
    } else {
        navigation.classList.add('active');
        carouselContainer.classList.add('active'); 
        carouselContainer.style.marginTop = '426px'; 
        burgerMenu.classList.add('active'); 
    }
    event.stopPropagation(); 
});

document.addEventListener("DOMContentLoaded", function() {
  const themeSwitcher = document.querySelector(".theme-switcher");
  const body = document.body;

  const isDarkMode = localStorage.getItem("isDarkMode");

  if (isDarkMode === "true") {
    body.classList.add("dark-mode");
  }

  themeSwitcher.addEventListener("click", function() {
    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      localStorage.setItem("isDarkMode", "false");
    } else {
      localStorage.setItem("isDarkMode", "true");
    }

    body.classList.toggle("dark-mode");
  });
});








