const heroSection = document.getElementsByClassName('hero-section__image-container')[0];

const DECORATIONS_QUANTITY = 10;

createDecorations(DECORATIONS_QUANTITY);
animateDecorations(DECORATIONS_QUANTITY);

function animateDecorations(quantity) {
  for (let i = 0; i < quantity; i++) {
    animate(i);
  }
}

function createDecorations(quantity) {
  for (let i = 0; i < quantity; i++) {
    const decoration = document.createElement('div');
    decoration.className = `decoration${i} decoration`;
    heroSection.appendChild(decoration);
    gsap.set('.decoration' + i, {
      top: 'random(0, 80)%',
      left: 'random(0, 80)%',
    });
  }
}

function animate(index) {
  gsap
    .to(`.decoration${index}`, {
      x: 'random(-300, 300)',
      y: 'random(-300, 300)',
      duration: 'random(5, 8)',
      ease: 'power2.out',
    })
    .then(() => animate(index));
}
