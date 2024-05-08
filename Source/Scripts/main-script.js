// JSSCLP | JavaScript Command Line Panel

document.addEventListener("DOMContentLoaded", () => {
  // Body
  const body = document.querySelector("body");

  // Loader
  const loader = document.querySelector(".loader");
  const loaderTextPlace1 = document.querySelector(".loader-text-1");
  const loaderTextPlace2 = document.querySelector(".loader-text-2");
  const loaderTextPlace3 = document.querySelector(".loader-text-3");
  const loaderLoadingAnimation = document.querySelector(
    ".loader-loading-animation"
  );
  const loadingProgress = document.querySelector(".loading-progress");

  // Root
  const root = document.querySelector(".root");

  // Header
  let headerNavModel = document.querySelector("#nav-model");
  let headerNavStores = document.querySelector("#nav-stores");
  let headerNavServices = document.querySelector("#nav-services");
  let headerNavAboutUs = document.querySelector("#nav-about-us");
  const navPos = -7;

  // Featured Section
  const dotContainer = document.querySelector(".dot-container");
  const cards = document.querySelectorAll(".cards");
  const cardsHolder = document.querySelector(".cards-holder-housing");
  const cardsIndicator = document.querySelector(".card-indicator");
  let indicatorToggle = true;
  const cardsMainImage = document.querySelectorAll(".card-main-img");
  const scrollSpeed = 1.2;
  const cardsButtonWrapper = document.querySelector(".card-button-wrapper");
  const cardsButtonMover = document.querySelector(".card-button-mover");
  const cardbuttonText = document.querySelector(".card-button-text");

  // Main

  // Hero Section
  const heroContents = document.querySelector(".hero-contents");
  const heroSectionVideo = document.querySelector(".hero-video");
  const arrowIcon = document.querySelector(".hero-arrow-icon");
  const heroButtonWrapper = document.querySelector(".hero-button-wrapper");
  const heroButtonMover = document.querySelector(".hero-button-mover");
  const buttonText = document.querySelector(".hero-button-text");

  const loaderText1Logic = () => {
    let loaderText1 = "Powering Your Journey";
    let loaderText1Split = loaderText1.split("");

    loaderText1Split.forEach((element) => {
      let loaderTextSpan1 = document.createElement("span");
      loaderTextSpan1.innerHTML = element;
      loaderTextSpan1.classList.add("loader-text-1-span");
      loaderTextPlace1.appendChild(loaderTextSpan1);
    });
  };

  const loaderText2Logic = () => {
    let loaderText2 = "Every Ride";
    let loaderText2Split = loaderText2.split("");

    loaderText2Split.forEach((element) => {
      let loaderTextSpan2 = document.createElement("span");
      loaderTextSpan2.innerHTML = element;
      loaderTextSpan2.classList.add("loader-text-2-span");
      loaderTextPlace2.appendChild(loaderTextSpan2);
    });
  };

  const loaderText3Logic = () => {
    let loaderText3 = "Every Adventure";
    let loaderText3Split = loaderText3.split("");

    loaderText3Split.forEach((element) => {
      let loaderTextSpan3 = document.createElement("span");
      loaderTextSpan3.innerHTML = element;
      loaderTextSpan3.classList.add("loader-text-3-span");
      loaderTextPlace3.appendChild(loaderTextSpan3);
    });
  };

  const loaderLogic = () => {
    loaderText1Logic();
    loaderText2Logic();
    loaderText3Logic();
  };

  const loaderAnimation = () => {
    let loaderSpans1 = Array.from(
      document.querySelectorAll(".loader-text-1-span")
    );
    let loaderSpans2 = Array.from(
      document.querySelectorAll(".loader-text-2-span")
    );
    let loaderSpans3 = Array.from(
      document.querySelectorAll(".loader-text-3-span")
    );

    loaderSpans1.sort(() => Math.random() - 0.5);
    loaderSpans2.sort(() => Math.random() - 0.5);
    loaderSpans3.sort(() => Math.random() - 0.5);

    let timeline = gsap.timeline({ delay: 0.1 });
    gsap.to(loadingProgress, {
      width: "100%",
      duration: 9,
      ease: "power4.inOut",
    });
    gsap.to(loaderLoadingAnimation, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
    gsap.set(root, {
      opacity: 0,
      duration: 1,
      ease: "power4.easeOut",
    });
    timeline.to(body, {
      overflowY: "hidden",
    });
    timeline.to(loaderSpans1, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.06,
    });

    timeline.to(loaderSpans1, {
      opacity: 0,
      filter: "blur(0px)",
      stagger: 0.05,
    });

    timeline.to(loaderSpans2, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.06,
    });
    timeline.to(loaderSpans2, {
      opacity: 0,
      filter: "blur(0px)",
      stagger: 0.06,
    });

    timeline.to(loaderSpans3, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.06,
    });
    timeline.to(loaderSpans3, {
      opacity: 0,
      filter: "blur(0px)",
      stagger: 0.06,
    });
    timeline.to(loader, {
      opacity: 0,
      display: "none",
      duration: 1,
      ease: "power4.easeOut",
    });
    timeline.to(body, {
      overflowY: "auto",
    });
    timeline.to(root, {
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
    });
  };

  const theLoader = () => {
    loaderLogic();
    loaderAnimation();
  };

  const navModelAnimation = (element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        y: navPos,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        y: 0,
      });
    });
  };

  const navStoresAnimation = (element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        y: navPos,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        y: 0,
      });
    });
  };

  const navServicesAnimation = (element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        y: navPos,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        y: 0,
      });
    });
  };

  const navAboutUsAnimation = (element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        y: navPos,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        y: 0,
      });
    });
  };

  const headerNavSeperator = () => {
    let navModelText = "Models";
    let navModelSplit = navModelText.split("");

    navModelSplit.forEach((element) => {
      let modelSpan = document.createElement("span");
      modelSpan.innerHTML = element;
      modelSpan.classList.add("nav-model-span");
      headerNavModel.appendChild(modelSpan);
    });

    let navModelSpan = document.querySelectorAll(".nav-model-span");
    navModelSpan.forEach((element) => {
      navModelAnimation(element);
    });

    let navStoresText = "Stores";
    let navStoresSplit = navStoresText.split("");

    navStoresSplit.forEach((element) => {
      let storesSpan = document.createElement("span");
      storesSpan.innerHTML = element;
      storesSpan.classList.add("nav-stores-span");
      headerNavStores.appendChild(storesSpan);
    });

    let navStoresSpan = document.querySelectorAll(".nav-stores-span");
    navStoresSpan.forEach((element) => {
      navStoresAnimation(element);
    });

    let navServicesText = "Services";
    let navServicesSplit = navServicesText.split("");

    navServicesSplit.forEach((element) => {
      let servicesSpan = document.createElement("span");
      servicesSpan.innerHTML = element;
      servicesSpan.classList.add("nav-services-span");
      headerNavServices.appendChild(servicesSpan);
    });

    let navServicesSpan = document.querySelectorAll(".nav-services-span");
    navServicesSpan.forEach((element) => {
      navServicesAnimation(element);
    });

    let navAboutUsText = "About";
    let navAboutUsSplit = navAboutUsText.split("");

    navAboutUsSplit.forEach((element) => {
      let aboutUsSpan = document.createElement("span");
      aboutUsSpan.innerHTML = element;
      aboutUsSpan.classList.add("nav-about-us-span");
      headerNavAboutUs.appendChild(aboutUsSpan);
    });

    let navAboutUsSpan = document.querySelectorAll(".nav-about-us-span");
    navAboutUsSpan.forEach((element) => {
      navAboutUsAnimation(element);
    });
  };

  const headerLogic = () => {
    headerNavSeperator();
  };

  const theHeader = () => {
    headerLogic();
  };

  const heroVideoAnimation = () => {
    gsap.to(heroSectionVideo, {
      duration: 1,
      ease: "power4.inOut",
      width: "60%",
      scrollTrigger: {
        trigger: heroSectionVideo,
        scrub: 3,
        // markers: true,
        // Problem with markers when loader enabled
        start: "20% 10%",
        end: "80% 60%",
      },
    });
  };

  // const heroVideo = () => {
  //   heroContents.addEventListener("mouseenter", () => {

  //   });
  // };

  const heroArrowAnimation = () => {
    document.addEventListener("mousemove", (event) => {
      const angle = Math.atan2(
        event.clientY - arrowIcon.offsetTop,
        event.clientX - arrowIcon.offsetLeft
      );

      const angleDeg = angle * (180 / Math.PI);

      gsap.to(arrowIcon, {
        rotation: angleDeg,
        ease: "linear",
      });
    });
  };

  const heroButtonLogic = () => {
    heroButtonWrapper.addEventListener("mouseenter", () => {
      gsap.to(heroButtonMover, {
        scale: 30,
        duration: 0.5,
        ease: "back.in(0.2)",
      });
      gsap.to(buttonText, {
        filter: "invert(1)",
        duration: 1,
      });
    });

    heroButtonWrapper.addEventListener("mouseleave", () => {
      gsap.to(heroButtonMover, {
        opacity: 0,
        scale: 1,
        ease: "back.out(0.5)",
      });
      gsap.to(buttonText, {
        filter: "none",
      });
    });

    heroButtonWrapper.addEventListener("mousemove", (event) => {
      let rect = heroButtonWrapper.getBoundingClientRect();
      gsap.to(heroButtonMover, {
        top: event.clientY - rect.top,
        left: event.clientX - rect.left,
        ease: "back.out(2)",
        opacity: 1,
      });
    });
  };

  const heroButton = () => {
    // heroArrowAnimation();
    heroButtonLogic();
  };

  const heroSection = () => {
    // heroVideo();
    heroButton();
  };

  const cardsHeading = () => {
    const createDots = () => {
      const dotCount = 500;
      const dotMinSize = 1;
      const dotMaxSize = 2;

      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.width = `${
          Math.floor(Math.random() * (dotMaxSize - dotMinSize + 1)) + dotMinSize
        }px`;
        dot.style.height = dot.style.width;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.opacity = "0";
        dotContainer.appendChild(dot);
      }
    };

    const dotsAnimation = () => {
      gsap.to(".dot", {
        duration: 0.3,
        opacity: 1,
        stagger: 0.2,
        ease: "power4.inOut",
        delay: 0.5,
        filter: "blur(1px)",
      });
    };

    document.addEventListener("mousemove", (event) => {
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const scaler = Math.hypot(
          event.clientX - (rect.left + rect.width / 2),
          event.clientY - (rect.top + rect.height / 2)
        );
        gsap.to(dot, {
          duration: 0.3,
          opacity: 1 - scaler / 200,
        });
      });
    });

    const shootingStar = document.querySelectorAll(".shooting-star");
    const shootingStarAnimation = () => {
      let starNumber = () => {
        return Math.floor(Math.random() * 20) + 10;
      };
      let starStagger = () => {
        return Math.floor(Math.random() * 10) + 1;
      };

      gsap.to(shootingStar, {
        height: "40px",
        x: 1000,
        y: 1000,
        opacity: 1,
        ease: "power4.inOut",
        duration: 2,
        delay: 1,
        repeat: -1,
        repeatDelay: starNumber(),
        stagger: starStagger(),
      });
    };

    createDots();
    shootingStarAnimation();
    // dotsAnimation();
  };

  const cardsLogic = () => {
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      scrub: 5,
      onUpdate: () => {
        gsap.to(cardsHolder, {
          x: -window.scrollY * scrollSpeed,
          ease: "none",
          overwrite: "auto",
        });
      },
    });
    Draggable.create(cardsHolder, {
      type: "x",
      edgeResistance: 0.65,
      bounds: ".cards-holder",
      zIndexBoost: false,
    });
  };

  const cardsHover = () => {
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          boxShadow: "0px 0px 15px 7px #0f0f0f",
          duration: 0.5,
          ease: "power4.inOut",
          overwrite: "auto",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          boxShadow: "0px 0px 10px 1px black",
          duration: 0.5,
          ease: "power1.inOut",
          overwrite: "auto",
        });
      });
    });
    cards.forEach(() => {
      cardsMainImage.forEach((image) => {
        image.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.01,
            ease: "power4.inOut",
            overwrite: "auto",
          });
        });
        image.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            ease: "power4.inOut",
            overwrite: "auto",
          });
        });
      });
    });
  };

  const indicator = () => {
    cardsIndicator.addEventListener("click", () => {
      if (indicatorToggle) {
        indicatorToggle = false;
        window.scrollBy(0, 1);
      } else {
        indicatorToggle = true;
        window.scrollBy(0, -1);
      }
    });
  };

  const cardsAnimation = () => {
    cardsHeading();
    cardsHover();
    indicator();
  };

  const cardsButtonLogic = () => {
    cardsButtonWrapper.addEventListener("mouseenter", () => {
      gsap.to(cardsButtonMover, {
        scale: 30,
        duration: 0.5,
        ease: "back.in(0.5)",
      });
      gsap.to(buttonText, {
        filter: "invert(1)",
        duration: 1,
      });
    });

    cardsButtonWrapper.addEventListener("mouseleave", () => {
      gsap.to(cardsButtonMover, {
        opacity: 0,
        scale: 1,
        ease: "back.out(1.7)",
      });
      gsap.to(buttonText, {
        filter: "none",
      });
    });

    cardsButtonWrapper.addEventListener("mousemove", (event) => {
      let rect = cardsButtonWrapper.getBoundingClientRect();
      gsap.to(cardsButtonMover, {
        top: event.clientY - rect.top,
        left: event.clientX - rect.left,
        ease: "back.out(2)",
        opacity: 1,
      });
    });
  };

  const theCardsSection = () => {
    cardsAnimation();
    cardsLogic();
    cardsButtonLogic();
  };

  const theMain = () => {
    heroSection();
    theCardsSection();
  };

  const theRoot = () => {
    theHeader();
    theMain();
  };

  const theExecutioner = () => {
    theLoader();
    theRoot();
  };

  // theExecutioner();
});
