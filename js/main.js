document.getElementById('category-btn').addEventListener('click', () =>  {
        let nav = document.querySelector('.ctn-categories-menu nav');
        nav.classList.toggle('nav-display');
        console.log("hi")
    }
);

let languageBtn = document.querySelectorAll('.ctn-language-menu .language-btn');
languageBtn.forEach((element) => element.addEventListener('click' ,() => {
    let navLang = document.querySelectorAll('.ctn-language-menu nav');
    navLang.forEach((element) => element.classList.toggle('nav-display'))
} ) )

////////////////////////////////////////////////

let responsiveNav = document.querySelector('.responsive-nav');
document.getElementById('menu-btn').addEventListener('click' , () => {
    responsiveNav.classList.toggle('show-nav');
})

document.getElementById('x-btn').addEventListener('click' ,() => {
    responsiveNav.classList.remove('show-nav');
})

///////////////////////////////////////////
const slides = document.querySelectorAll('.slides .slide')
let slideIndex = 0;
function ShowSlide(index){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[index].classList.add('active');
}
function prevBtn() {
    if (slideIndex == 0) {
        slideIndex = slides.length -1
    }else{
        slideIndex--
    }
    ShowSlide(slideIndex);
}
function nextBtn() {
    if(slideIndex == slides.length -1){
        slideIndex = 0;
    }else{
        slideIndex++;
    }
    ShowSlide(slideIndex);

}