import MoviesCountView from '../view/movies-count-view.js';
import {render} from '../render.js';

export default class FooterPresenter {
  moviesCountComponent = new MoviesCountView();

  constructor({footerContainer}) {
    this.footerContainer = footerContainer;
  }

  init() {
    render(this.moviesCountComponent, this.footerContainer);
  }
}
