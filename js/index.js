const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//site navbar
let navItem = document.querySelectorAll('a');

navItem[0].textContent = siteContent["nav"]["nav-item-1"];

navItem[1].textContent = siteContent["nav"]["nav-item-2"];

navItem[2].textContent = siteContent["nav"]["nav-item-3"];

navItem[3].textContent = siteContent["nav"]["nav-item-4"];

navItem[4].textContent = siteContent["nav"]["nav-item-5"];

navItem[5].textContent = siteContent["nav"]["nav-item-6"];

//site heading
let pageHeading = document.querySelector(".cta-text h1");

pageHeading.textContent = siteContent["cta"]["h1"];

//image next to heading
let ctaImg = document.querySelector(".cta img");

ctaImg.src = siteContent['cta']['img-src'];

//cta button 
let ctaButton = document.querySelector(".cta button");

ctaButton.textContent = siteContent["cta"]["button"];

//first two text area headings
let sectionOneHeadings = document.querySelectorAll(".top-content .text-content h4");

sectionOneHeadings[0].textContent = siteContent["main-content"]["features-h4"];

sectionOneHeadings[1].textContent = siteContent["main-content"]["about-h4"];

//first two text area content
let sectionOneBodys = document.querySelectorAll(".top-content .text-content p");

sectionOneBodys[0].textContent = siteContent["main-content"]["features-content"];

sectionOneBodys[1].textContent = siteContent["main-content"]["about-content"];

//code image across screen
let codeImg = document.getElementById("middle-img");

codeImg.src = siteContent["main-content"]["middle-img-src"];

//bottom content headings
let bottomHeadings = document.querySelectorAll(".bottom-content .text-content h4");

bottomHeadings[0].textContent = siteContent['main-content']['services-h4'];

bottomHeadings[1].textContent = siteContent['main-content']['product-h4'];

bottomHeadings[2].textContent = siteContent['main-content']['vision-h4'];

//bottom content bodys
let bottomBodys = document.querySelectorAll(".bottom-content .text-content p");

bottomBodys[0].textContent = siteContent['main-content']['services-content'];

bottomBodys[1].textContent = siteContent['main-content']['product-content'];

bottomBodys[2].textContent = siteContent['main-content']['vision-content'];

//contact heading
let contactHeading = document.querySelector(".contact h4");

contactHeading.textContent = siteContent['contact']['contact-h4'];

//contact content
let contactContent = document.querySelectorAll(".contact p");

contactContent[0].textContent = siteContent['contact']['address'];

contactContent[1].textContent = siteContent['contact']['phone'];

contactContent[2].textContent = siteContent['contact']['email'];

//footer content 
let footerContent = document.querySelector("footer p");

footerContent.textContent = siteContent['footer']['copyright'];