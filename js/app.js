console.log("wassup");

const menuBtn = document.querySelector('.menu-btn');
const hamburger=document.querySelector('.menu-btn_burger');

let showMenu = false;

menuBtn.addEventListener('click',togglemenu);

function togglemenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        showMenu=true;
    }
    else{
        hamburger.classList.remove('open');
        showMenu=false;
    }
}