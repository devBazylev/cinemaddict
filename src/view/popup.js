import { createElement } from '../render.js';

function createTemplate() {
  return (
    '<section class="film-details"></section>'
  );
}

export default class PopupView {
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
