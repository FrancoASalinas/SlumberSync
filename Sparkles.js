const heroSection = document.getElementsByClassName(
  'hero-section__image-container'
)[0];

export default class Sparkles {
  constructor(quantity) {
    this.quantity = quantity;
  }

  _setInitialPosition(elementClass) {
    gsap.set(elementClass, {
      top: 'random(0, 100)%',
      left: 'random(0, 100)%',
    });
  }

  createSparkles() {
    for (let i = 0; i < this.quantity; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = `sparkle${i} sparkle`;
      heroSection.appendChild(sparkle);

      this._setInitialPosition(`.sparkle${i}`);
    }
  }

  _startAnimationLoop(elementClass) {
    const animation = () =>
      gsap
        .to(elementClass, {
          top: 'random(0, 100)%',
          left: 'random(0, 100)%',
          duration: 'random(5, 8)',
          ease: 'power2.out',
        })
        .then(() => animation());

    animation();
  }

  animateSparkles() {
    for (let i = 0; i < this.quantity; i++) {
      this._startAnimationLoop(`.sparkle${i}`);
    }
  }
}
