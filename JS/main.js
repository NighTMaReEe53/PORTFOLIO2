let thePreLoader = document.querySelector(".preloader");
let theDuration = 1500;

setTimeout(() => {
  thePreLoader.classList.add("remove");
}, theDuration);

// Selector's

let theSection = Array.from(document.querySelectorAll(".section"));

// Get Length

let theLength = theSection.length;

// Let theLi

let theLinks = Array.from(document.querySelectorAll(".links li a"));

// Set Option

let currentSlide = 1;

function checker() {
  handleClass();
  theSection[currentSlide - 1].classList.add("active");
  theLinks[currentSlide - 1].classList.add("active");
}

checker();

console.log(theLinks[currentSlide - 1]);

theLinks.forEach((ele, indx) => {
  ele.setAttribute("data-index", indx + 1);
  ele.addEventListener("click", function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  });
});

// HandleActive Class

function handleClass() {
  theSection.forEach((ele) => {
    ele.classList.remove("active");
  });
  theLinks.forEach((ele) => {
    ele.classList.remove("active");
  });
}

// Filter Ul

let theFiter = Array.from(document.querySelectorAll("[data-filter]"));
let theBoxes = Array.from(document.querySelectorAll(".content-item .box"));

theFiter.forEach((item) => {
  item.addEventListener("click", (e) => {
    theFiter.forEach((itemRemove) => {
      itemRemove.classList.remove("active");
    });
    e.target.classList.add("active");
    theBoxes.forEach((box) => {
      box.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.filter).forEach((ele) => {
      ele.style.display = "block";
    });
  });
});

// lightBox

let theImages = Array.from(document.querySelectorAll(".content-item .box img"));
let theLightBox = document.querySelector(".lightBox");
let theImage = theLightBox.querySelector(".image img");
let closeBtn = theLightBox.querySelector(".image .closed");

theImages.forEach((img) => {
  img.addEventListener("click", () => {
    // Add Class To LightBox
    theLightBox.classList.add("show");
    theImage.src = img.src;
  });
});
closeBtn.addEventListener("click", () => {
  theLightBox.classList.remove("show");
});

// Draggable all Image

let allImage = document.querySelectorAll("img");

allImage.forEach((img) => {
  img.setAttribute("draggable", "false");
});
