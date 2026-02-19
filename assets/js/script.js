
    /* ============================
    Navabr Fix on Scroll
  ============================ */


$(document).ready(function () {
      var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav'),
        linkScroll = $('.scroll');

      docEl.on('scroll', function () {
        if (docEl.scrollTop() > 60) {
          headerEl.addClass('fixed-to-top');
          headerWrapEl.addClass('fixed-to-top');
          navEl.addClass('fixed-to-top');
        } else {
          headerEl.removeClass('fixed-to-top');
          headerWrapEl.removeClass('fixed-to-top');
          navEl.removeClass('fixed-to-top');
        }
      });

      linkScroll.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
          scrollTop: $(this.hash).offset().top
        }, 500);
      });
    });


    /* ============================
    Navabr Fix on Scroll
  ============================ */


      /* ============================
    Mobile nav
  ============================ */
  document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Mobile Menu Toggle
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Navbar Scroll Effect
  let lastScrollTop = 0;
  const navbar = document.querySelector(".quantum-navbar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px"; // Hide navbar on scroll down
    } else {
      navbar.style.top = "0"; // Show navbar on scroll up
    }
    lastScrollTop = scrollTop;
  });
});


/* ============================
    Mobile nav
  ============================ */

  
      /* ============================
    Scroll to Top Button
  ============================ */

$(document).ready(function () {
    const scrollBtn = document.querySelector(".scroll-top");

    // Show button after scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
        } else {
        scrollBtn.classList.remove("show");
        }
    });

    // Smooth scroll to top
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
});
        /* ============================
    Scroll to Top Button
  ============================ */

   /* ============================
    Pricing Tab Switcher
  ============================ */


   document.querySelectorAll(".staff-pricing").forEach(pricingBlock => {
    const buttons = pricingBlock.querySelectorAll(".staff-tab-btn");
    const panels = pricingBlock.querySelectorAll(".staff-tab-panel");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        pricingBlock
          .querySelector("#" + btn.dataset.tab)
          .classList.add("active");
      });
    });
  });

    /* ============================
    Pricing Tab Switcher
  ============================ */


   /* ============================
    OTP
  ============================ */


$(document).ready(function () {
const inputs = document.querySelectorAll(".otp-inputs input");

inputs.forEach((input, index) => {

  // Force single digit only
  input.addEventListener("input", (e) => {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace handling
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });

  // Handle paste (distribute digits, max 5)
  input.addEventListener("paste", (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, inputs.length);

    pastedData.split("").forEach((char, i) => {
      if (inputs[index + i]) {
        inputs[index + i].value = char;
      }
    });

    const nextIndex = Math.min(index + pastedData.length, inputs.length - 1);
    inputs[nextIndex].focus();
  });
});

/* TIMER */
let time = 152; // seconds (02:32)
const timerEl = document.getElementById("timer");

const timerInterval = setInterval(() => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;

  if (time <= 0) {
    clearInterval(timerInterval);
    timerEl.textContent = "00:00";
  }
  time--;
}, 1000);

/* RESEND */
document.getElementById("resend").addEventListener("click", (e) => {
  e.preventDefault();
  time = 152;
});
  });



   /* ============================
    OTP
  ============================ */

  
   /* ============================
    Comparison Table Column Highlight
  ============================ */

  document.addEventListener("DOMContentLoaded", function () {
  console.log("JS LOADED");
  const headerTHs = document.querySelectorAll(".table-head th[data-col]");
  const tables = document.querySelectorAll(".sticky-table");

  if (!tables.length) return;

  function clearAllTables() {
    tables.forEach(table => {
      table.querySelectorAll("td").forEach(td => {
        td.classList.remove("col-active", "col-hover");
      });
    });
  }
  function highlightColumn(colIndex, className) {
    tables.forEach(table => {
      table.querySelectorAll("tbody tr").forEach(row => {
        const td = row.children[colIndex - 1];
        if (td && !td.classList.contains("feature-name")) {
          td.classList.add(className);
        }
      });
    });
  }
  headerTHs.forEach(th => {
    const col = parseInt(th.dataset.col);
    const inner = th.querySelector(".table-head-inner");

    // CLICK → ACTIVE COLUMN
    th.addEventListener("click", () => {
      document.querySelectorAll(".table-head-inner")
        .forEach(el => el.classList.remove("active"));

      clearAllTables();
      inner?.classList.add("active");
      highlightColumn(col, "col-active");
    });

    // HOVER → TEMP COLUMN
    th.addEventListener("mouseenter", () => {
      if (!inner?.classList.contains("active")) {
        highlightColumn(col, "col-hover");
      }
    });

    th.addEventListener("mouseleave", () => {
      tables.forEach(table => {
        table.querySelectorAll(".col-hover")
          .forEach(td => td.classList.remove("col-hover"));
      });
    });
  });
  // Default active column (Business)
  document.querySelector('.table-head th[data-col="4"]')?.click();
});

   /* ============================
    Comparison Table Column Highlight
  ============================ */

      /* ============================
    feature Slider Item Animation
  ============================ */

$(document).ready(function () {
    new Swiper(".kf-slider", {
    loop: true,
    loopAdditionalSlides: 3,   // IMPORTANT for multi-column
    spaceBetween: 24,
    navigation: {
      nextEl: ".kf-next",
      prevEl: ".kf-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
});


      /* ============================
    feature Slider Item Animation
  ============================ */




    /* ============================
    feature Item Scroll Animation
  ============================ */
$(document).ready(function () {
   const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector("i").className = "fa-solid fa-plus";
        }
      });

      item.classList.toggle("active");
      const icon = item.querySelector("i");

      icon.className = item.classList.contains("active")
        ? "fa-solid fa-xmark"
        : "fa-solid fa-plus";
    });
  });
});

      /* ============================
    About Text Animation
  ============================ */


   gsap.registerPlugin(ScrollTrigger);

    /* Split text into words */
    const text = document.getElementById("aboutText");
    const words = text.innerText.split(" ");
    text.innerHTML = words.map(word => `<span>${word}&nbsp;</span>`).join("");

    /* Animate word opacity */
    gsap.to("#aboutText span", {
      opacity: 1,
      ease: "power1.out",
      stagger: 0.08, // controls word-by-word flow
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 50%",
        end: "top 25%",
        scrub: 2
      }
    });

    /* ============================
    About Text Animation
  ============================ */


      /* ============================
    feature Item Scroll Animation
  ============================ */


    gsap.registerPlugin(ScrollTrigger);

  gsap.to(".ab-feature-item", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
    toggleActions: "play none none reverse", // one by one
    scrollTrigger: {
      trigger: ".ab-feature-bar",
      start: "top 80%",
    }
  });

    /* ============================
    feature Item Scroll Animation
  ============================ */
  


    
  
        /* ============================
    Smooth scroll
  ============================ */


   const lenis = new Lenis();

    let isScrolling = false;
    const scrollDelay = 100; // Delay in milliseconds

    lenis.on('scroll', (e) => {
      if (!isScrolling) {
        isScrolling = true;

        console.log(`Scroll event:`, e);

        setTimeout(() => {
          isScrolling = false;
        }, scrollDelay);
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


         /* ============================
    Smooth scroll
  ============================ */