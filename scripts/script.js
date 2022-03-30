let imges=Array.from(document.getElementsByClassName("img-item")) ;
let lightBox= document.getElementById("lightBox");
let colsIcon= document.getElementById("colsIcon");
let lightBoxBakground= document.getElementById("lightBoxBakground");
let btnNextSlide= document.getElementById("btnNextSlide");
let btnPrevSlide= document.getElementById("btnPrevSlide");
let curentIndex=0;
for (let i = 0; i < imges.length; i++) {
 imges[i].addEventListener("click",function (e) {
  lightBox.classList.replace("d-none","d-flex")
    let imgSrc = e.target.src
  lightBoxBakground.style.backgroundImage=`url(${imgSrc})`

  curentIndex= imges.indexOf(e.target) //index img 
 })
  
}
// this function  for colse closeSlider
function closeSlider() {
  lightBox.classList.replace("d-flex","d-none")
}
// for btn x (close )
colsIcon.addEventListener("click", closeSlider) 

// this function for NextSlide
function nextSlide() {
  curentIndex ++
  if (curentIndex==imges.length) {
    curentIndex=0
  }
 let imgSrc= imges[curentIndex].src

  lightBoxBakground.style.backgroundImage=`url(${imgSrc})`
  
}
// next slide
btnNextSlide.addEventListener("click",nextSlide);

// this function for prevSlide
function prevSlide() {
  curentIndex--;
  if (curentIndex<0) {
    curentIndex=imges.length-1
  }
 let imgSrc= imges[curentIndex].src

  lightBoxBakground.style.backgroundImage=`url(${imgSrc})`
  
}
// prev slide
btnPrevSlide.addEventListener("click",prevSlide);
 
// keyboard nextslide and prevslide and exit 
document.addEventListener("keydown", (e) => {
if (e.key=="Escape") {
  closeSlider()
} else if(e.key=="ArrowRight") {
  nextSlide()
} else if(e.key=="ArrowLeft") {
  prevSlide()
}
})
// 
lightBox.addEventListener("click",(e) => {
 
  if (e.target!==lightBoxBakground&&e.target!==btnNextSlide &&e.target!==btnPrevSlide) {
    closeSlider()
  } 
})