(()=>{
const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
let observer=null,frame=0,active=false;
const moon=document.querySelector('.hero-art img');
const targets=[...document.querySelectorAll('main h2, main h3, main figure, main blockquote, .takeaway-quote, .quote, .consciousness-pause')].filter(el=>!el.closest('.hero')&&!el.parentElement.closest('.consciousness-pause'));
function renderMoon(){frame=0;if(!active||!moon)return;const box=moon.parentElement.getBoundingClientRect();const mobile=window.innerWidth<=700;const range=moon.parentElement.clientHeight*(mobile?.045:.085);const offset=Math.max(-range,Math.min(range,-box.top*(mobile?.10:.23)));moon.style.setProperty('--moon-offset',offset+'px')}
function scrollMoon(){if(!frame)frame=requestAnimationFrame(renderMoon)}
function stop(){active=false;if(observer)observer.disconnect();targets.forEach(el=>el.classList.remove('motion-ready'));if(moon)moon.style.removeProperty('--moon-offset');window.removeEventListener('scroll',scrollMoon);window.removeEventListener('resize',scrollMoon);if(frame)cancelAnimationFrame(frame);frame=0}
function start(){stop();if(preference.matches||!('IntersectionObserver' in window))return;active=true;observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-visible');observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -24px 0px'});targets.forEach(el=>{if(el.getBoundingClientRect().top>=window.innerHeight){el.classList.add('motion-ready');observer.observe(el)}});window.addEventListener('scroll',scrollMoon,{passive:true});window.addEventListener('resize',scrollMoon);renderMoon()}
start();preference.addEventListener('change',start);
})();
