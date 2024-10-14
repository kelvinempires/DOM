const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   responsive breakpoint
  breakpoint: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
const love1El = document.getElementById("love1");
const span1El = document.getElementById("span1");
const span2El = document.getElementById("span2");
const numberEL = document.getElementById("number");
const minusBtnEl = document.getElementById("minusBtn");
const addBtnEL = document.getElementById("addBtn");
const addToCartEl = document.getElementById("addToCart");
const btnEl = document.querySelector(".btn");
const bigImageEl = document.querySelector(".bigImage");

document.querySelectorAll(".main-div").forEach((div) => {
  const bigImageEl = div.querySelector(".bigImage");

  div.querySelectorAll(".user-image-1").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075404.png";
    });
  });

  div.querySelectorAll(".user-image-2").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074812.png";
    });
  });

  div.querySelectorAll(".user-image-3").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074836.png";
    });
  });

  div.querySelectorAll(".user-image-4").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074922.png";
    });
  });

  div.querySelectorAll(".user-image-5").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075012.png";
    });
  });

  div.querySelectorAll(".user-image-6").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075032.png";
    });
  });
  div.querySelectorAll(".user-image-7").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075051.png";
    });
  });

  div.querySelectorAll(".user-image-8").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img1.bmp";
    });
  });

  div.querySelectorAll(".user-image-9").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img2.bmp";
    });
  });
  div.querySelectorAll(".user-image-10").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img3.bmp";
    });
  });

  div.querySelectorAll(".user-image-11").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img4.bmp";
    });
  });

  div.querySelectorAll(".user-image-12").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img5.bmp";
    });
  });
  div.querySelectorAll(".user-image-13").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-14").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./image samsung/img7.bmp";
    });
  });

  div.querySelectorAll(".user-image-15").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img1.bmp";
    });
  });
  div.querySelectorAll(".user-image-16").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img2.bmp";
    });
  });

  div.querySelectorAll(".user-image-17").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img3.bmp";
    });
  });

  div.querySelectorAll(".user-image-18").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img4.bmp";
    });
  });
  div.querySelectorAll(".user-image-19").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-20").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-21").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./25 utral/img7.bmp";
    });
  });
  div.querySelectorAll(".user-image-22").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.spngrc = "./glass samsung/img1.bmp";
    });
  });

  div.querySelectorAll(".user-image-23").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img2.bmp";
    });
  });

  div.querySelectorAll(".user-image-24").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img3.bmp";
    });
  });
  div.querySelectorAll(".user-image-25").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img4.bmp";
    });
  });

  div.querySelectorAll(".user-image-26").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-27").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-28").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img7.bmp";
    });
  });
  div.querySelectorAll(".user-image-29").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img1.bmp";
    });
  });

  div.querySelectorAll(".user-image-30").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img2.bmp";
    });
  });

  div.querySelectorAll(".user-image-31").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img3.bmp";
    });
  });
  div.querySelectorAll(".user-image-32").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img4.bmp";
    });
  });

  div.querySelectorAll(".user-image-33").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-34").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img6.bmp";
    });
  });
  div.querySelectorAll(".user-image-35").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./3fold/img7.bmp";
    });
  });

  div.querySelectorAll(".user-image-36").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img1.bmp";
    });
  });

  div.querySelectorAll(".user-image-37").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img2.bmp";
    });
  });
  div.querySelectorAll(".user-image-38").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img3.bmp";
    });
  });

  div.querySelectorAll(".user-image-39").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img4.bmp";
    });
  });

  div.querySelectorAll(".user-image-40").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img5.bmp";
    });
  });
  div.querySelectorAll(".user-image-41").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-42").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./spen/img7.bmp";
    });
  });

  div.querySelectorAll(".user-image-43").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img7.bmp";
    });
  });
  div.querySelectorAll(".user-image-44").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-45").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-46").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img7.bmp";
    });
  });
  div.querySelectorAll(".user-image-47").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-48").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-49").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img7.bmp";
    });
  });
  div.querySelectorAll(".user-image-50").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-51").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-52").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img7.bmp";
    });
  });
  div.querySelectorAll(".user-image-53").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img5.bmp";
    });
  });

  div.querySelectorAll(".user-image-54").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img6.bmp";
    });
  });

  div.querySelectorAll(".user-image-55").forEach((img) => {
    img.addEventListener("click", function () {
      bigImageEl.src = "./glass samsung/img7.bmp";
    });
  });
});

// const SmallImage1 = document.getElementById("user-image-1");
// const SmallImage2 = document.getElementById("user-image-2");
// const SmallImage3 = document.getElementById("user-image-3");
// const SmallImage4 = document.getElementById("user-image-4");
// const SmallImage5 = document.getElementById("user-image-5");
// const SmallImage6 = document.getElementById("user-image-6");
// const SmallImage7 = document.getElementById("user-image-7");
// const SmallImage8 = document.getElementById("user-image-8");

// document.querySelectorAll(".user-image-1").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075404.png";
//   });
// });

// document.querySelectorAll(".user-image-2").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074812.png";
//   });
// });

// document.querySelectorAll(".user-image-3").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074836.png";
//   });
// });
// document.querySelectorAll(".user-image-4").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074922.png";
//   });
// });
// document.querySelectorAll(".user-image-5").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075012.png";
//   });
// });
// document.querySelectorAll(".user-image-6").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075032.png";
//   });
// });
// document.querySelectorAll(".user-image-7").forEach((img) => {
//   img.addEventListener("click", function () {
//     bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075051.png";
//   });
// });
// Continue similarly for the rest of your small images

// SmallImage1.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075404.png";
// });
// SmallImage2.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074812.png";
// });
// SmallImage3.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074836.png";
// });
// SmallImage4.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074922.png";
// });
// SmallImage5.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075012.png";
// });
// SmallImage6.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075032.png";
// });
// SmallImage7.addEventListener("click", function () {
//   bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075051.png";
// });

love1El.addEventListener("click", function () {
  if (love1El.style.color === "red") {
    love1El.style.color = "rgba(255, 140, 0, 0.196)";
  } else {
    love1El.style.color = "red";
  }
});

const cart = () => {
  addToCartEl.style.display = "none";
  btnEl.style.display = "flex";
  btnEl.style.color = "darkblue";
  love1.style.display = "none";
};
addToCartEl.addEventListener("click", cart);

addBtnEL.addEventListener("click", function () {
  value++;
  numberEL.textContent = value;
  addBtnEL.style.backgroundColor = "darkorange";
  minusBtnEl.style.backgroundColor = "rgba(255, 140, 0, 0.235)";
  minusBtnEl.style.color = "white";
  addBtnEL.style.color = "black";
});

let value = 1;

minusBtnEl.addEventListener("click", cart);
minusBtnEl.addEventListener("click", function () {
  if (value < 1) {
    return value;
  }
  value--;
  numberEL.textContent = value;
  addBtnEL.style.backgroundColor = "rgba(255, 140, 0, 0.235)";
  minusBtnEl.style.backgroundColor = "darkorange";
  minusBtnEl.style.color = "black";
  addBtnEL.style.color = "white";
});
