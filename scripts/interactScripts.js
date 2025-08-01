





const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navMenu');


burger.addEventListener('click',()=>{
    console.log('cliked')
    navMenu.classList.toggle('active');
})