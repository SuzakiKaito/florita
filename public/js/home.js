let eraseBtn = document.querySelector(".button");
let modal = document.querySelector(".modal");
let Box = document.querySelector(".box");
console.log(eraseBtn,modal,Box);


eraseBtn.addEventListener("click",()=>{
  modal.classList.add("erase");
  // console.log(modal.classList);
})

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

