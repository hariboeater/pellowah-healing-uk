const menuButton=document.querySelector('.mobile-menu-button');
const mobileNavigation=document.getElementById('mobile-navigation');
function closeMenu(){mobileNavigation.hidden=true;menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mobileNavigation.hidden=!open});
mobileNavigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNavigation.hidden){closeMenu();menuButton.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
window.matchMedia('(min-width: 701px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
