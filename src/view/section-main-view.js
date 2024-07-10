import { createElement } from '../render.js';

function createTemplate() {
  return (
    '<section class="films"></section>'
  );
}

export default class SectionMainView {
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
