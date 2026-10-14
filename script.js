const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.flip-card').forEach(card=>{
  card.addEventListener('click',()=>card.classList.toggle('active'));
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.classList.toggle('active')}});
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.material,.step,.conclusion-grid>div,.product-box').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .6s ease, transform .6s ease';observer.observe(el)
});
