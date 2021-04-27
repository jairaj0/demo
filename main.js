const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar');
navbar.style.display="none";

menu.addEventListener('click', function(){
    navbar.style.display= 'flex ';
    close.style.display="block";
})

close.addEventListener('click', function(){
    navbar.style.display= 'none ';
    close.style.display="none";
})





