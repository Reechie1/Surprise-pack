const screens=[...document.querySelectorAll('.screen')];
let current=0;
const progress=document.getElementById('progressBar');
function show(i){screens[current].classList.remove('active');current=Math.max(0,Math.min(i,screens.length-1));screens[current].classList.add('active');progress.style.width=((current+1)/screens.length*100)+'%';window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>show(current+1)));
const modal=document.getElementById('modal'), modalImg=document.getElementById('modalImg');
document.querySelectorAll('[data-img]').forEach(btn=>btn.addEventListener('click',()=>{modalImg.src=btn.dataset.img;modal.classList.add('open')}));
document.getElementById('closeModal').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
const audio=document.getElementById('audio'), playBtn=document.getElementById('playBtn');
playBtn.addEventListener('click',async()=>{if(!audio.getAttribute('src') && !audio.querySelector('source')?.getAttribute('src')) return; try{if(audio.paused){await audio.play();playBtn.textContent='❚❚'}else{audio.pause();playBtn.textContent='▶'}}catch(e){playBtn.textContent='▶'}});
audio.addEventListener('play',()=>playBtn.textContent='❚❚');audio.addEventListener('pause',()=>playBtn.textContent='▶');
progress.style.width=((current+1)/screens.length*100)+'%';
