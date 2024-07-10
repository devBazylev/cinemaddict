import UserRankView from '../view/user-rank-view.js';
import {render} from '../render.js';

export default class HeaderPresenter {
  userRankComponent = new UserRankView();

  constructor({headerContainer}) {
    this.headerContainer = headerContainer;
  }

  init() {
    render(this.userRankComponent, this.headerContainer);
  }
}
