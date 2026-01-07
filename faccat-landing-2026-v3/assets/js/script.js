// ====== Interações e Performance ======
(function(){
  const toggle = document.querySelector('.nav__toggle');
  const list = document.getElementById('primary-menu');
  if(toggle && list){
    toggle.addEventListener('click', ()=>{
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      list.style.display = !open ? 'flex' : 'none';
    });
  }

  // Reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // WhatsApp links
  document.querySelectorAll('.btn--whatsapp, .float-wpp').forEach(btn => {
    btn.setAttribute('href', 'https://wa.me/5514998128858');
  });
})();
