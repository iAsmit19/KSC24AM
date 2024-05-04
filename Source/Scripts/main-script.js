// JSSCLP | JavaScript Command Line Panel

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
    display: "none",
    duration: 1,
    ease: "power4.easeOut",
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
    overflow: "auto",
  });
  timeline.to(root, {
    opacity: 1,
    display: "block",
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

const theRoot = () => {
  theHeader();
};

const theExecutioner = () => {
  // theLoader();
  theRoot();
};

theExecutioner();
