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

// /////////////////////////////////////////////

let responsiveNav = document.querySelector('.responsive-nav');
document.getElementById('menu-btn').addEventListener('click' , () => {
    responsiveNav.classList.toggle('show-nav');
})

document.getElementById('x-btn').addEventListener('click' ,() => {
    responsiveNav.classList.remove('show-nav');
})