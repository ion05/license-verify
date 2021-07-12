//image Slider

//image btn preview
const [img_1, img_2, img_3] = [document.querySelector('#img-1'), document.querySelector('#img-2'), document.querySelector('#img-3')];
const [btn_1, btn_2, btn_3] = [document.querySelector('#btn-1'), document.querySelector('#btn-2'), document.querySelector('#btn-3')];

btn_1.addEventListener('click',()=>{
    img_1.style.display = 'block';
    img_2.style.display = 'none';
    img_3.style.display = 'none';

})
btn_2.addEventListener('click',()=>{
    img_1.style.display = 'none';
    img_2.style.display = 'block';
    img_3.style.display = 'none';
})
btn_3.addEventListener('click',()=>{
    img_1.style.display = 'none';
    img_2.style.display = 'none';
    img_3.style.display = 'block';
    
})
//video popup
const modal = document.querySelector('.video-modal');
const close = document.querySelector('.fa-times');
const modal_btn = document.querySelector('.header-btn');

modal_btn.addEventListener('click', ()=>{
    modal.style.display = 'block';
})
close.addEventListener('click',()=>{
    modal.style.display='none';
})
//solution tabs
const [para1, para2, para3] =[ document.querySelector('#para1'), document.querySelector('#para2'), document.querySelector('#para3')];
const [sol1 , sol2 , sol3 ] = [ document.querySelector('#sol1'), document.querySelector('#sol2'), document.querySelector('#sol3')];

sol1.addEventListener('click', ()=>{
    para1.classList.add('active-para');
    para2.classList.remove('active-para');
    para3.classList.remove('active-para');
})
sol2.addEventListener('click',()=>{
    para1.classList.remove('active-para');
    para2.classList.add('active-para');
    para3.classList.remove('active-para');
})
sol3.addEventListener('click', ()=>{
    para1.classList.remove('active-para');
    para2.classList.remove('active-para');
    para3.classList.add('active-para');
})
