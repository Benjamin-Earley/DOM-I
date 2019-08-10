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

let navigation = document.querySelectorAll("a");
Array.from(navigation);

    navigation[0].textContent = siteContent["nav"]["nav-item-1"];
    navigation[1].textContent = siteContent["nav"]["nav-item-2"];
    navigation[2].textContent = siteContent["nav"]["nav-item-3"];
    navigation[3].textContent = siteContent["nav"]["nav-item-4"];
    navigation[4].textContent = siteContent["nav"]["nav-item-5"];
    navigation[5].textContent = siteContent["nav"]["nav-item-6"];
    navigation.forEach(element => { 
       element.style.color = "green";
    });
    const nav = document.querySelector('nav');
        const appended = document.createElement('a');
            appended.textContent = "Appended";
            appended.style.color = "green";
            nav.appendChild(appended);
        const prepended = document.createElement('a');
            prepended.textContent = "Prepended";
            prepended.style.color = "green";
            nav.prepend(prepended);

let hOne = document.querySelector("h1");
    let dom = siteContent.cta.h1.substring(0, 3);
    let is = siteContent.cta.h1.substring(3, 6);
    let awesome = siteContent.cta.h1.substring(6, 14);
    let brokenhOne = `${dom} \n ${is} \n ${awesome}`;
    hOne.textContent = brokenhOne;
    hOne.style.whiteSpace = "pre-line";    

let btn = document.querySelector("button").textContent = siteContent["cta"]["button"];

let image1 = document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

let allH4 = document.querySelectorAll("h4");
Array.from(allH4);

    allH4[0].textContent = siteContent["main-content"]["features-h4"];
    allH4[1].textContent = siteContent["main-content"]["about-h4"];
    allH4[2].textContent = siteContent["main-content"]["services-h4"];
    allH4[3].textContent = siteContent["main-content"]["product-h4"];
    allH4[4].textContent = siteContent["main-content"]["vision-h4"];

let allPs = document.querySelectorAll("p");
Array.from(allPs);

    allPs[0].textContent = siteContent["main-content"]["features-content"];
    allPs[1].textContent = siteContent["main-content"]["about-content"];
    allPs[2].textContent = siteContent["main-content"]["services-content"];
    allPs[3].textContent = siteContent["main-content"]["product-content"];
    allPs[4].textContent = siteContent["main-content"]["vision-content"];

let mainImg = document.querySelector('#middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

allH4[5].textContent = siteContent["contact"]["contact-h4"];
allPs[5].textContent = siteContent["contact"]["address"];

    let address1 = document.querySelector(".contact p");
      let street = siteContent.contact.address.substring(0, 18);
      let state = siteContent.contact.address.substring(18, 33);
      let brokenAddress = `${street} \n ${state}`;
      address1.textContent = brokenAddress;
      address1.style.whiteSpace = "pre-line";

allPs[6].textContent = siteContent["contact"]["phone"];
allPs[7].textContent = siteContent["contact"]["email"];
allPs[8].textContent = siteContent["footer"]["copyright"];
