const slider=document.querySelector('.slider');
const sliderImg=document.querySelectorAll('.slider-img');
const sliderLine=document.querySelector('.slider-line')

const btnNext=document.querySelector('.slider__btn-next')
const btnPrev=document.querySelector('.slider__btn-prev')

let sliderCount=0;
let sliderWidth=slider.offsetWidth;

btnNext.addEventListener('click',nextSlide)
btnPrev.addEventListener('click',prevSlide)

function nextSlide(){
    sliderCount++
    if(sliderCount>=sliderImg.length){
        sliderCount=0
    }

    rollSlider()
}
function prevSlide(){
    sliderCount--
    if(sliderCount<0){
        sliderCount=sliderImg.length -1
    }
    rollSlider()
}
function rollSlider(){
  sliderLine.style.transform=`translateX(${-sliderCount*sliderWidth}px)`
}


setInterval(()=>{nextSlide()}, 2000)