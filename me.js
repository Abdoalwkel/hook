let tooglephone = document.querySelector(".toogle-phone");
let phone = document.querySelector(".phone");
let closePhone = document.querySelector(".close");

tooglephone.addEventListener("click", function () {
  phone.classList.add("active");
});

closePhone.addEventListener("click", function () {
  phone.classList.remove("active");
});

let arwwo = document.querySelector(".arwwo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    arwwo.classList.add("active");
  } else {
    arwwo.classList.remove("active");
  }
});
arwwo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let wats = document.querySelector(".whats");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    wats.classList.add("active");
  } else {
    wats.classList.remove("active");
  }
});

let point = 0;
let pointslide = document.querySelectorAll(".point-slide");
let pointslidespan = document.querySelectorAll(".point-slide span");

let arraypointslidespan = Array.from(pointslidespan);

arraypointslidespan[0].classList.add("active");
arraypointslidespan.forEach((element) => {
  element.addEventListener("click", function () {
    removeactive();
    element.classList.add("active");

    arraypointslidespan[0].addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

let scroolbottom = document.querySelector(".scrool-bottom");
let titlesection = document.querySelectorAll(".title-section");

scroolbottom.addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[0].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[1].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[0].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[2].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[1].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[3].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[2].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[4].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[3].offsetTop - 100,
    behavior: "smooth",
  });
});

function removeactive() {
  pointslidespan.forEach((element) => {
    element.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactive();
    arraypointslidespan[0].classList.add("active");
  }

  if (window.scrollY >= titlesection[0].offsetTop - 200) {
    removeactive();
    arraypointslidespan[1].classList.add("active");
  }

  if (window.scrollY >= titlesection[1].offsetTop - 200) {
    removeactive();
    arraypointslidespan[2].classList.add("active");
  }

  if (window.scrollY >= titlesection[2].offsetTop - 200) {
    removeactive();
    arraypointslidespan[3].classList.add("active");
  }
  if (window.scrollY >= titlesection[3].offsetTop - 200) {
    removeactive();
    arraypointslidespan[4].classList.add("active");
  }
});

// كود لما تضغط كليك يمين ميشتغلش

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  alert("talk me first");
  e.preventDefault();
});

// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
//     return false;
//   }
// };
