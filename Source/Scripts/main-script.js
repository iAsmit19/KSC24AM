// JSSCLP | JavaScript Command Line Panel
document.addEventListener("DOMContentLoaded", () => {
  // Body
  const body = document.querySelector("body");

  // Loader
  const loader = document.querySelector(".loader");
  const loaderTextPlace_1 = document.querySelector(".loader-text-1");
  const loaderTextPlace_2 = document.querySelector(".loader-text-2");
  const loaderTextPlace_3 = document.querySelector(".loader-text-3");
  const loadingProgress = document.querySelector(".loading-progress");

  // Root
  const root = document.querySelector(".root");

  // Header
  const atNavModel = document.querySelector(".nav-model");
  const atNavStore = document.querySelector(".nav-store");
  const atNavServices = document.querySelector(".nav-services");
  const atNavAboutUs = document.querySelector(".nav-about-us");
  let navPos = -7;

  // Main
  // Hero Section

  // Working Bay
  const loaderTextLogic = () => {
    const loaderTextLogic_1 = () => {
      const loaderText_1 = "Powering your Journey";
      const loaderTextSplit_1 = loaderText_1.split("");

      loaderTextSplit_1.forEach((element) => {
        let loaderTextSpan_1 = document.createElement("span");
        loaderTextSpan_1.innerHTML = element;
        loaderTextSpan_1.classList.add("loader-text-span-1");
        loaderTextPlace_1.appendChild(loaderTextSpan_1);
      });
    };

    const loaderTextLogic_2 = () => {
      const loaderText_2 = "Every Ride";
      const loaderTextSplit_2 = loaderText_2.split("");

      loaderTextSplit_2.forEach((element) => {
        let loaderTextSpan_1 = document.createElement("span");
        loaderTextSpan_1.innerHTML = element;
        loaderTextSpan_1.classList.add("loader-text-span-2");
        loaderTextPlace_2.appendChild(loaderTextSpan_1);
      });
    };
    const loaderTextLogic_3 = () => {
      const loaderText_3 = "Every Adventure";
      const loaderTextSplit_3 = loaderText_3.split("");

      loaderTextSplit_3.forEach((element) => {
        let loaderTextSpan_1 = document.createElement("span");
        loaderTextSpan_1.innerHTML = element;
        loaderTextSpan_1.classList.add("loader-text-span-3");
        loaderTextPlace_3.appendChild(loaderTextSpan_1);
      });
    };
    loaderTextLogic_1();
    loaderTextLogic_2();
    loaderTextLogic_3();
  };

  const loaderAnimation = () => {
    let loaderSpans_1 = Array.from(
      document.querySelectorAll(".loader-text-span-1")
    );
    loaderSpans_1.sort(() => Math.random() - 0.5);

    let loaderSpans_2 = Array.from(
      document.querySelectorAll(".loader-text-span-2")
    );
    loaderSpans_2.sort(() => Math.random() - 0.5);

    let loaderSpans_3 = Array.from(
      document.querySelectorAll(".loader-text-span-3")
    );
    loaderSpans_3.sort(() => Math.random() - 0.5);

    let timeline = gsap.timeline({
      ease: "linear",
    });
    gsap.to(loadingProgress, {
      duration: 8,
      width: "100%",
      ease: "power4.inOut",
    });
    // gsap.set(root, {
    //   opacity: 0,
    // });
    gsap.set(body, {
      overflowY: "hidden",
    });
    timeline.to(loaderSpans_1, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.04,
    });
    timeline.to(loaderSpans_1, {
      opacity: 0,
      filter: "blur(5px)",
      stagger: 0.05,
    });

    timeline.to(loaderSpans_2, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.03,
    });
    timeline.to(loaderSpans_2, {
      opacity: 0,
      filter: "blur(5px)",
      stagger: 0.05,
    });

    timeline.to(loaderSpans_3, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.03,
    });
    timeline.to(loaderSpans_3, {
      opacity: 0,
      filter: "blur(5px)",
      stagger: 0.05,
    });
    timeline.to(loadingProgress, {
      opacity: 0,
      duration: 0.5,
    });
    timeline.to(loader, {
      opacity: 0,
      display: "none",
      duration: 0.5,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.to(body, {
          overflowY: "auto",
        });
        gsap.to(root, {
          opacity: 1,
          duration: 0.5,
          ease: "power4.inOut",
        });
      },
    });
  };

  const theLoader = () => {
    loaderTextLogic();
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

  const navStoreAnimation = (element) => {
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

  const headerNavSeparator = () => {
    let navModelText = "Models";
    let navModelTextSplit = navModelText.split("");

    navModelTextSplit.forEach((element) => {
      let navModelTextSpan = document.createElement("span");
      navModelTextSpan.innerHTML = element;
      navModelTextSpan.classList.add("nav-model-text-span");
      atNavModel.appendChild(navModelTextSpan);
    });

    let navModelSpan = document.querySelectorAll(".nav-model-text-span");
    navModelSpan.forEach((element) => {
      navModelAnimation(element);
    });

    let navStoreText = "Store";
    let navStoreTextSplit = navStoreText.split("");

    navStoreTextSplit.forEach((element) => {
      let navStoreTextSpan = document.createElement("span");
      navStoreTextSpan.innerHTML = element;
      navStoreTextSpan.classList.add("nav-store-text-span");
      atNavStore.appendChild(navStoreTextSpan);
    });

    let navStoreSpan = document.querySelectorAll(".nav-store-text-span");
    navStoreSpan.forEach((element) => {
      navStoreAnimation(element);
    });

    let navServicesText = "Services";
    let navServicesTextSplit = navServicesText.split("");

    navServicesTextSplit.forEach((element) => {
      let navServicesTextSpan = document.createElement("span");
      navServicesTextSpan.innerHTML = element;
      navServicesTextSpan.classList.add("nav-services-text-span");
      atNavServices.appendChild(navServicesTextSpan);
    });

    let navServicesSpan = document.querySelectorAll(".nav-services-text-span");
    navServicesSpan.forEach((element) => {
      navServicesAnimation(element);
    });

    let navAboutUsText = "About";
    let navAboutUsTextSplit = navAboutUsText.split("");

    navAboutUsTextSplit.forEach((element) => {
      let navAboutUsTextSpan = document.createElement("span");
      navAboutUsTextSpan.innerHTML = element;
      navAboutUsTextSpan.classList.add("nav-about-us-text-span");
      atNavAboutUs.appendChild(navAboutUsTextSpan);
    });

    let navAboutUsSpan = document.querySelectorAll(".nav-about-us-text-span");
    navAboutUsSpan.forEach((element) => {
      navAboutUsAnimation(element);
    });
  };

  const headerNavElements = () => {
    headerNavSeparator();
  };

  const theHeader = () => {
    headerNavElements();
  };

  const heroVideo = document.querySelector("#hero-video");
  const heroSectionCont = document.querySelector(".hero-content");

  const heroVideoLogic = () => {
    gsap.to(heroVideo, {
      // width: "1344px",
      width: "70vw",
      scrollTrigger: {
        trigger: heroVideo,
        scrub: 5,
        // markers: true,
        start: "20% top",
        end: "60% 20%",
      },
    });
    gsap.to(heroSectionCont, {
      backgroundColor: "#00000000",
      scrollTrigger: {
        trigger: heroVideo,
        scrub: true,
        // markers: true,
        start: "10% top",
        end: "40% 20%",
      },
    });
  };

  const heroSection = () => {
    // heroVideoLogic();
  };

  const buttonWrapper = document.querySelector(".button-wrapper");
  const buttonMover = document.querySelector(".button-mover");
  const buttonText = document.querySelector(".button-text");

  const buttonLogic = () => {
    buttonWrapper.addEventListener("mouseenter", () => {
      gsap.to(buttonMover, {
        opacity: 1,
      });

      gsap.to(buttonText, {
        mixBlendMode: "difference",
        // filter: "invert(1)",
      });

      gsap.to(buttonMover, {
        scale: 20,
        ease: "back.in(0.1)",
      });
    });

    buttonWrapper.addEventListener("mouseleave", () => {
      gsap.to(buttonMover, {
        scale: 1,
        ease: "back.in(0.3)",
      });

      gsap.to(buttonMover, {
        opacity: 0,
        delay: 0.3,
      });

      gsap.to(buttonText, {
        // filter: "none",
        mixBlendMode: "none",
      });
    });

    buttonWrapper.addEventListener("mousemove", (event) => {
      let rect = buttonWrapper.getBoundingClientRect();
      gsap.to(buttonMover, {
        top: event.clientY - rect.top,
        left: event.clientX - rect.left,
      });
    });
  };

  const theMain = () => {
    heroSection();
    buttonLogic();
  };

  const EXECUTIONOR = () => {
    // Comment to disable the loader
    // theLoader();

    theHeader();
    theMain();
  };
  EXECUTIONOR();
});
