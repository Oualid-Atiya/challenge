document.getElementById('category-btn').onclick =  () =>  {
    let nav = document.querySelector('.ctn-categories-menu nav');
    nav.classList.toggle('nav-display');
};

document.getElementById('language-btn').onclick = () => {
    let nav = document.querySelector('.ctn-language-menu nav');
    nav.classList.toggle('nav-display');
}