import { createElement } from '../render.js';

function createTemplate() {
  return (
    '<p>130 291 movies inside</p>'
  );
}

export default class MoviesCountView {
  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
