gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  let lastScroll = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      // only for desktop
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // scrolling down
        header.classList.add("hide");
      } else {
        // scrolling up
        header.classList.remove("hide");
      }

      lastScroll = currentScroll;
    } else {
      // reset header state on mobile/tablet
      header.classList.remove("hide");
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////
  // side nav open close function HIGHLIGHT
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".closeBtn");
  const nav = document.querySelector(".mainNav");

  hamburger.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    nav.style.transform = "translateX(100%)";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  });

  /////////////////////////////////////////////////////////////////////////

  const cards = document.querySelectorAll(".memberCard");
  const bios = document.querySelectorAll(".bioContent");

  function activateBio(memberId) {
    bios.forEach((b) => b.classList.remove("active"));
    const activeBio = document.getElementById(memberId);
    if (activeBio) activeBio.classList.add("active");
  }

  cards.forEach((card) => {
    const memberId = card.dataset.member;

    // Desktop hover
    card.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        activateBio(memberId);
      }
    });

    // Desktop click
    card.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        activateBio(memberId);
      } else {
        // Mobile toggle open
        card.classList.toggle("open");
      }
    });
  });

  // home partner slider

  $(".homePartner .sliderWrapper").slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".homePartner .leftBtn").click(function () {
    $(".homePartner .sliderWrapper").slick("slickPrev");
  });
  $(".homePartner .rightBtn").click(function () {
    $(".homePartner .sliderWrapper").slick("slickNext");
  });

  // Fade-in text  HIGHLIGHT
  gsap.utils.toArray(".fade-in").forEach((item, index) => {
    gsap.set(item, { opacity: 0, y: 60 });

    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: index * 0.01,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.utils.toArray(".op").forEach((item, index) => {
    gsap.set(item, { opacity: 0 });

    gsap.to(item, {
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: index * 0.01,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Image animations with directional clip path effect HIGHLIGHT
  gsap.utils
    .toArray(".img-left, .img-right, .img-center, .img-door")
    .forEach((img, index) => {
      let clipPathValue = "polygon(0% 110%, 100% 110%, 100% 210%, 0% 210%)";

      if (img.classList.contains("img-left")) {
        clipPathValue = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
      } else if (img.classList.contains("img-right")) {
        clipPathValue = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      } else if (img.classList.contains("img-center")) {
        clipPathValue = "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)";
      } else if (img.classList.contains("img-door")) {
        clipPathValue = "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)";
      }

      gsap.set(img, {
        opacity: 0,
        clipPath: clipPathValue,
      });

      let finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      if (img.classList.contains("img-left")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else if (img.classList.contains("img-right")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else if (img.classList.contains("img-center")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else if (img.classList.contains("img-door")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      }

      gsap.to(img, {
        opacity: 1,
        clipPath: finalClipPath,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
});
