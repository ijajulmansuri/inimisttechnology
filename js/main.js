(function ($) {
    "use strict";

    //------------------- Spinner section start----------------
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    //------------------Initiate the wowjs---------------------------
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // -----------------------Team carousel----------------------------------
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    //-------------------Testimonial carousel-----------------------

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


  //-------------------Index page rotate image-----------------------

        document.addEventListener("DOMContentLoaded", function () {
            const progressSections = document.querySelectorAll(".progress");
            const observerOptions = { threshold: 0.5 };

            const animateProgressBar = (entry) => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    const percentEl = container.previousElementSibling.querySelector(".progress-percent");
                    const target = parseInt(percentEl.dataset.target);
                    const bar = container.querySelector(".progress-bar");

                    let count = 0;
                    const interval = setInterval(() => {
                        if (count <= target) {
                            bar.style.width = count + "%";
                            percentEl.innerText = count + "%";
                            count++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 20);
                    observer.unobserve(container); 
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => animateProgressBar(entry));
            }, observerOptions);

            progressSections.forEach(section => observer.observe(section));
        });
    


//-------------------active menu bar-----------------------


 const currentPage = window.location.pathname.split("/").pop(); 
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      link.classList.add("active");
    }
  });


//------------------- menu bar toggle-----------------------

    const toggler = document.getElementById('navbarToggler');
    toggler.addEventListener('click', function () {
    this.classList.toggle('open');
    });



//----------------web developement service section-------------------

  // Initialize AOS
  AOS.init({
    duration: 1000, 
    once: true, 
    offset: 200, 
  });






})(jQuery);




