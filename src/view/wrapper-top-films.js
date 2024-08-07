import { createElement } from '../render.js';

function createTemplate() {
  return (
    '<div class="films-list__container"></div>'
  );
}

export default class WrapperTopView {
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
