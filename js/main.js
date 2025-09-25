let pricesSwiper = new Swiper(".prices__slider", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".prices__slider-next",
        prevEl: ".prices__slider-prev",
    },
});
let instantlySwiper = new Swiper(".instantly__slider", {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".instantly__slider-next",
        prevEl: ".instantly__slider-prev",
    },
    breakpoints: {
        769: {
            spaceBetween: 64,
            slidesPerView: 2,
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero__content",
            start: "top 80%"
        }
    });
    tl.from(".hero__name", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
    const svgPaths = Array.from(document.querySelectorAll(".hero__title svg path")).reverse();
    svgPaths.forEach((path, i) => {
        tl.from(path, { y: 100, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.4"); 
    });
    tl.from(".hero__title span", { y: 30, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 });
    tl.from(".hero__descr:nth-of-type(1)", { x: 100, opacity: 0, duration: 0.6, ease: "power3.out" });
    tl.from(".hero__descr:nth-of-type(2)", { x: -100, opacity: 0, duration: 0.6, ease: "power3.out" });
    tl.from(".hero__descr:nth-of-type(3)", { y: -50, opacity: 0, duration: 0.6, ease: "power3.out" });
    tl.from(".hero__descr:nth-of-type(4)", { x: 100, opacity: 0, duration: 0.6, ease: "power3.out" });
    gsap.from(".hero__trusted", {
        x: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".hero__trusted",
            start: "top 90%"
        }
    });
    gsap.from(".hero__verified", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".hero__verified",
            start: "top 100%"
        }
    });
    gsap.from(".hero__exchange", {
        x: 200,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".hero__trusted",
            start: "top 90%"
        }
    });

    const pricesElements = [
        ".prices",
        ".prices__title",
        ".prices__descr",
        ".prices__buttons",
        ".prices__slider",
        ".prices__block",
        ".prices__steps-block",
        ".prices__steps-number"
    ];

    pricesElements.forEach(selector => {
        gsap.utils.toArray(selector).forEach(el => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: el.classList.contains("prices__buttons") || el.classList.contains("prices__block") || el.classList.contains("prices__steps-block") ? 0.2 : 0,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
    });

  const instantlyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".instantly",
      start: "top 80%",
    }
  });
  instantlyTl.from(".instantly__title", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  })
  .from(".instantly__buttons", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.3")
  .from(".instantly__slider", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.3");


  const referalTitleSpans = document.querySelectorAll(".referal__title span");
  const referalIcon = document.querySelector(".referal__icon");
  const referalTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".referal__title",
      start: "top 70%",
    }
  });
  referalTl.from(referalTitleSpans[0], { x: 100, opacity: 0, duration: 0.6, ease: "power2.out" })
    .from(referalTitleSpans[1], { x: -100, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    .from(referalTitleSpans[2], { x: 100, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    .from(referalIcon, {
      opacity: 0,
      scale: 1.5,
      rotation: -15,
      duration: 0.7,
      ease: "back.out(1.7)"
    });



    gsap.from(".institutional__title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".institutional",
            start: "top 80%",
        }
    });
    gsap.from(".institutional__descr", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".institutional",
            start: "top 80%",
        }
    });
    gsap.from(".institutional__list", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".institutional",
            start: "top 80%",
        }
    });
    gsap.from(".institutional__btn", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".institutional",
            start: "top 80%",
        }
    });

    gsap.from(".institutional__name", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".institutional",
            start: "top 80%",
        }
    });
    gsap.from(".institutional__icon", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".institutional__block",
            start: "top 80%",
        }
    });
    document.addEventListener("mousemove", (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;
        document.querySelectorAll(".institutional__icon").forEach((icon, i) => {
            const speed = (i + 1) * 5;
            const range = (i + 1) * 10;

            gsap.to(icon, {
            x: x * range,
            y: y * range,
            duration: 1 / speed,
            ease: "power2.out"
            });
        });
        });




    gsap.from(".whywe__title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".whywe__title",
            start: "top 80%",
        }
    });
    gsap.from(".whywe__list li", {
        x: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".whywe__list",
            start: "top 80%",
        }
    });
    gsap.from(".whywe__btn", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".whywe__btn",
            start: "top 80%",
        }
    });
    gsap.from(".whywe__num", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".whywe__num",
            start: "top 80%",
        }
    });

    gsap.from(".faq__title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".faq__title",
            start: "top 80%",
        }
    });
    document.querySelectorAll(".faq__item").forEach((item, index) => {
        gsap.from(item, {
            x: index % 2 === 0 ? -150 : 150,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
            }
        });
    });
    gsap.from(".blogs__top", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".blogs__top",
            start: "top 80%",
        }
    });
    document.querySelectorAll(".blogs__item").forEach((item, index) => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
            }
        });
    });
});