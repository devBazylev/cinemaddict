import { createElement } from '../render.js';

export default class NewTaskButtonView {
  getTemplate() {
    return '<button class="control__button">+ ADD NEW TASK</button>';
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
