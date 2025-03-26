import HeaderPresenter from './header-presenter.js';
import FooterPresenter from './footer-presenter.js';
import MainNavView from '../view/main-nav-view.js';
import SortView from '../view/sort-view.js';
import SectionMainView from '../view/section-main-view.js';
import SectionAllView from '../view/section-all-view.js';
import SectionTopView from '../view/section-top-view.js';
import SectionMostCommentedView from '../view/section-most-commented-view.js';
import WrapperAllView from '../view/wrapper-all-films.js';
import WrapperTopView from '../view/wrapper-top-films.js';
import WrapperMostCommentedView from '../view/wrapper-most-commented-films.js';
import FilmCardView from '../view/film-card-view.js';
import ButtonMoreView from '../view/button-more-view.js';
import PopupView from '../view/popup.js';
import PopupFormView from '../view/popup-form.js';
import PopupTopContainerView from '../view/popup-top-container.js';
import PopupBottomContainerView from '../view/popup-bottom-container.js';
import { render } from '../render.js';

const headerElement = document.querySelector('.header');
const headerPresenter = new HeaderPresenter({headerContainer: headerElement});
const footerElement = document.querySelector('.footer__statistics');
const footerPresenter = new FooterPresenter({footerContainer: footerElement});

headerPresenter.init();
footerPresenter.init();

export default class BodyPresenter {
  sectionMainComponent = new SectionMainView();
  sectionAllComponent = new SectionAllView();
  sectionTopComponent = new SectionTopView();
  sectionMostCommentedComponent = new SectionMostCommentedView();
  wrapperAllComponent = new WrapperAllView();
  popupComponent = new PopupView();
  popupFormComponent = new PopupFormView();

  filmDanceComponent = new FilmCardView('The Dance of Life', '8.3', '1929', '1h 55m', 'Musical', './images/posters/the-dance-of-life.jpg', 'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…', '5 comments');
  filmSagebrushComponent = new FilmCardView('Sagebrush Trail', '3.2', '1933', '54m', 'Western', './images/posters/sagebrush-trail.jpg', 'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant\'s narrow escap…', '89 comments');
  filmGoldenComponent = new FilmCardView('The Man with the Golden Arm', '9.0', '1955', '1h 59m', 'Drama', './images/posters/the-man-with-the-golden-arm.jpg', 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…', '18 comments');
  filmSantaComponent = new FilmCardView('Santa Claus Conquers the Martians', '2.3', '1964', '1h 21m', 'Comedy', './images/posters/santa-claus-conquers-the-martians.jpg', 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…', '465 comments');
  filmPopeyeComponent = new FilmCardView('Popeye the Sailor Meets Sindbad the Sailor', '6.3', '1936', '16m', 'Cartoon', './images/posters/popeye-meets-sinbad.png', 'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…', '0 comments');
  filmFlamarionComponent = new FilmCardView('The Great Flamarion', '8.9', '1945', '1h 18m', 'Mystery', './images/posters/the-great-flamarion.jpg', 'The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…', '12 comments');
  filmEachComponent = new FilmCardView('Made for Each Other', '5.8', '1939', '1h 32m', 'Comedy', './images/posters/made-for-each-other.png', 'John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…', '56 comments');

  constructor({mainContainer}) {
    this.mainContainer = mainContainer;
  }

  init() {
    render(new MainNavView(), this.mainContainer);
    render(new SortView(), this.mainContainer);
    render(this.sectionMainComponent, this.mainContainer);
    render(this.sectionAllComponent, this.sectionMainComponent.getElement());
    render(this.sectionTopComponent, this.sectionMainComponent.getElement());
    render(this.sectionMostCommentedComponent, this.sectionMainComponent.getElement());
    render(this.wrapperAllComponent, this.sectionAllComponent.getElement());
    render(new WrapperTopView(), this.sectionTopComponent.getElement());
    render(new WrapperMostCommentedView(), this.sectionMostCommentedComponent.getElement());
    render(this.filmDanceComponent, this.wrapperAllComponent.getElement());
    render(this.filmSagebrushComponent, this.wrapperAllComponent.getElement());
    render(this.filmGoldenComponent, this.wrapperAllComponent.getElement());
    render(this.filmSantaComponent, this.wrapperAllComponent.getElement());
    render(this.filmPopeyeComponent, this.wrapperAllComponent.getElement());
    // render(this.filmFlamarionComponent, this.wrapperAllComponent.getElement());
    // render(this.filmEachComponent, this.wrapperAllComponent.getElement());
    render(new ButtonMoreView(), this.sectionAllComponent.getElement());

    // render(this.popupComponent, this.mainContainer);
    render(this.popupFormComponent, this.popupComponent.getElement());
    render(new PopupTopContainerView(), this.popupFormComponent.getElement());
    render(new PopupBottomContainerView(), this.popupFormComponent.getElement());
  }
}
