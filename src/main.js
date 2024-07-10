import BodyPresenter from './presenter/body-presenter.js';

const mainElement = document.querySelector('.main');
const bodyPresenter = new BodyPresenter({mainContainer: mainElement});

bodyPresenter.init();
