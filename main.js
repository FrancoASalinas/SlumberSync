import Sparkles from './Sparkles.js';

const heroSection = document.getElementsByClassName(
  'hero-section__image-container'
)[0];

gsap.registerPlugin(ScrollTrigger);

new Sparkles(10, heroSection);

scrollAnimation();

function scrollAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-container',
      start: 'bottom bottom',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      snap: {
        snapTo: 'labelsDirectional',
        duration: { min: 0.2, max: 2 },
        delay: 0,
      },
    },
  });

  tl.add('start')
    .to(
      'body',
      {
        background: 'linear-gradient(#0a1529, #141924)',
      },
      'start'
    )
    .to('.scroll-container', { x: '-50%' }, 'start')
    .add('end');

  gsap.set('body', {
    background: 'linear-gradient(#0a1529, #1b3464)',
  });
}
