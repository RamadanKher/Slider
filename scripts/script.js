let imges=Array.from(document.getElementsByClassName("img-item")) ;
let lightBox= document.getElementById("lightBox");
 let bacground=document.querySelector(".item-slider")
 let imgIndex=0;
for (let index = 0; index < imges.length; index++) {
   imges[index].addEventListener("click",function (e) {
     imgSrc= e.target.src
   imgIndex=imges.indexOf(e.target)
  console.log(imgIndex)
     bacground.style.backgroundImage=`url(${imgSrc})`
     lightBox.classList.replace("d-none", "d-flex");
    })

}

document.getElementById("nextSlide").addEventListener("click", nextSlide)
function nextSlide() {
  imgIndex++;
  if (imgIndex==imges.length) {
    imgIndex=0
  }
  let sourcImge=imges[imgIndex].getAttribute('src');
  bacground.style.backgroundImage=`url(${sourcImge})`
}

document.getElementById('prevSlide').addEventListener("click",prevSlider)
function prevSlider() {
  imgIndex--;
 if (imgIndex==-1) {
  imgIndex=imges.length-1
 }
  let sourcImge =imges[imgIndex].getAttribute('src');
  bacground.style.backgroundImage=`url(${sourcImge})`
}

 

document.getElementById('clos-icon').addEventListener('click',closSlider)
function closSlider() {
  lightBox.classList.replace("d-flex","d-none");

}
document.addEventListener('keydown',function (e) {
if (e.key=="ArrowRight") {
  nextSlide()
}
else if(e.key=="ArrowLeft") {
  prevSlider()
}
else if(e.key=="Escape"){
  closSlider()
}
})

document.body.addEventListener("click",function (e) {
  if (e.target==lightBox) {
    closSlider()
  }
},true );



