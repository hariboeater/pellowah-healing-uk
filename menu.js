const menuButton=document.querySelector('.mobile-menu-button');
const mobileNavigation=document.getElementById('mobile-navigation');
function closeMenu(){mobileNavigation.hidden=true;menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mobileNavigation.hidden=!open});
mobileNavigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNavigation.hidden){closeMenu();menuButton.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
window.matchMedia('(min-width: 701px)').addEventListener('change',e=>{if(e.matches)closeMenu()});

const backToTop=document.querySelector('.back-to-top');
let topScrollQueued=false;
function updateBackToTop(){backToTop.hidden=window.scrollY<600;topScrollQueued=false}
window.addEventListener('scroll',()=>{if(!topScrollQueued){topScrollQueued=true;requestAnimationFrame(updateBackToTop)}},{passive:true});
updateBackToTop();
backToTop.addEventListener('click',()=>{const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const destination=document.querySelector('header .brand');destination.focus({preventScroll:true});window.scrollTo({top:0,behavior:reduceMotion?'instant':'smooth'})});
