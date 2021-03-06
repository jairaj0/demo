const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar');
const model = document.querySelector('.model_bg');
const connect = document.querySelector('.connect');
const hero_connect = document.querySelector('.hero_connect');
const model_close = document.querySelector('.model_close');
const model_close_bg = document.querySelector('.model_close_bg');
const pdf_report = document.querySelector('.pdf_report');
const m_pdf_report = document.querySelector('.m_pdf_report');


navbar.style.display = "none";
model.style.display = "none";
model_close_bg.style.display = "none";

connect.addEventListener('click', function () {
    model.style.display = "flex";
    model_close_bg.style.display = "block";
    body.style.overflow = "hidden";
})

hero_connect.addEventListener('click', function () {
    model.style.display = "flex";
    model_close_bg.style.display = "block";
    body.style.overflow = "hidden";
})

model_close.addEventListener('click', function () {
    console.log("closed model");
    model.style.display = "none";
    model_close_bg.style.display = "none";
    body.style.overflow = "auto";
})

model_close_bg.addEventListener('click', function () {
    console.log("bg close");
    model.style.display = "none";
    model_close_bg.style.display = "none";
    body.style.overflow = "auto";
})


menu.addEventListener('click', function () {
    navbar.style.display = 'flex ';
    close.style.display = "block";
    pdf_report.style.display = "none";
    body.style.overflow = "hidden";
})


close.addEventListener('click', function () {
    navbar.style.display = 'none ';
    close.style.display = "none";
    pdf_report.style.display = "flex";
    body.style.overflow = "auto";
})
