import gsap from 'gsap';

class Sparkle {
  constructor(parentElement) {
    this._element = this._createElement(parentElement);
    this._tween = undefined;
    this._setInitialPosition();
    this._from();
    this._animate();
  }

  _createElement(parentElement) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    parentElement.appendChild(sparkle);

    return sparkle;
  }

  _setInitialPosition() {
    setTimeout(() => {
      gsap.set(this._element, {
        top: 'random(0, 100)%',
        left: 'random(0, 100)%',
      });
    }, 0);
  }

  _from() {
    gsap.from(this._element, {
      opacity: 0,
      delay: 'random(0,5)',
      duration: 'random(0,2)',
    });
  }

  _animate() {
    this._tween = gsap.to(this._element, {
      top: 'random(0, 100)%',
      left: 'random(0, 100)%',
      duration: 'random(5, 8)',
      ease: 'power2.out',
      onComplete: () => this._animate(),
    });
  }

  pause() {
    this._tween.pause();
  }

  get isPaused() {
    return this._tween && this._tween.paused;
  }

  resume() {
    this._tween.resume();
  }
}

export default class Sparkles {
  constructor(quantity, parentElement) {
    this._parentElement = parentElement;
    this._quantity = quantity;
    this._sparklesList = this._createSparkles();

    this._pauseWhenNotInView();
  }

  _createSparkles() {
    const array = new Array(this._quantity).fill();
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        array[i] = new Sparkle(this._parentElement);
      }, 0);
    }

    return array;
  }

  _pauseWhenNotInView() {
    window.addEventListener('scroll', () => {
      if (!this._isInViewport(this._parentElement)) {
        this._pause();
      } else {
        this._resume();
      }
    });
  }

  _isInViewport(element) {
    return element.getBoundingClientRect().bottom >= 0;
  }

  _pause() {
    this._sparklesList.map(sparkle => sparkle.pause());
  }

  _resume() {
    this._sparklesList.map(sparkle => sparkle.isPaused && sparkle.resume());
  }
}
