const logbox =document.querySelector('.logreg-box');
const loglink =document.querySelector('.login-link');
const reglink = document.querySelector('.register-link');
reglink.addEventListener('click' ,() =>{logbox.classList.add('active');});
loglink.addEventListener('click',() => {logbox.classList.remove('active');});