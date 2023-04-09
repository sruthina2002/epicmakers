function toggleMenu(){
    const menu= document.querySelector(".menulinks");
    const icon= document.querySelector(".hamburger-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
}
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// const observer = newIntersectionObserver((entries)=>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// })
// const hiddenElements = document.querySelectorAll('.awards-container');
// hiddenElements.forEach((el)=> observer.observe(el));

var items = document.querySelectorAll('.timeline li');

function elementInView(el){
    var rect = el.getBoundingClientRect();

    return(
        rect.top>= 0 &&
        rect.bottom <= (window.innerHeight||document.documentElement.clientHeight)
    )
}
function callBack(){
    for(var i=0; i< items.length; i++){
        if(elementInView(items[i])){
            items[i].classList.add("in-view")
        }
    }
}

window.onload=callBack;
window.onresize=callBack;
window.onscroll=callBack;



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});