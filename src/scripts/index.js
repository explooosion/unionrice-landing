import '@/styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const gopTop = document.getElementById('gotop');

gopTop.addEventListener('click', () => {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.nav-item').forEach((nav) => {
  nav.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((n) => {
      if (n === nav) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });
    document
      .getElementById(nav.getAttribute('data-target'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

window.onscroll = () => {
  const opacity = document.documentElement.scrollTop * 0.0005;
  gopTop.style.opacity = opacity < 0.3 ? opacity : 0.3;
};

document.querySelectorAll('img').forEach(img => img.addEventListener('contextmenu', e => e.preventDefault()));

const slide3 = tns({
  container: '.section3-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
});

document.getElementById('section3prevBtn').addEventListener('click', () => slide3.goTo('prev'));
document.getElementById('section3nextBtn').addEventListener('click', () => slide3.goTo('next'));

const slide4 = tns({
  container: '.section4-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
});

document.getElementById('section4prevBtn').addEventListener('click', () => slide4.goTo('prev'));
document.getElementById('section4nextBtn').addEventListener('click', () => slide4.goTo('next'));