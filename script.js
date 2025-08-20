// highlight the active nav item based on current page
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const map = {
    'index.html': 'home',
    'about.html': 'about',
    'experience.html': 'experience',
    'projects.html': 'projects',
    'contact.html': 'contact'
  };
  const current = map[path] || 'home';
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if (href === `${current}.html` || (current==='home' && href==='index.html')) {
      a.classList.add('active');
    }
  });
})();

// Parallax float
window.addEventListener('scroll',()=>{
  const y=window.pageYOffset;
  document.querySelectorAll('.floating-decor').forEach((el,i)=>{
    const s=0.5+(i*0.1);
    el.style.transform=`translateY(${y*s}px)`;
  });
});

// Hover lift
document.querySelectorAll('.card,.project-card').forEach(card=>{
  card.addEventListener('mouseenter',()=>card.style.transform='translateY(-10px) scale(1.02)');
  card.addEventListener('mouseleave',()=>card.style.transform='translateY(0) scale(1)');
});
