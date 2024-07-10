import { createElement } from '../render.js';

function createTemplate(title, rating, year, duration, genre, src, description, comments) {
  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src=${src} alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <span class="film-card__comments">${comments}</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
}

export default class FilmCardView {
  constructor(title, rating, year, duration, genre, src, description, comments) {
    this.title = title;
    this.rating = rating;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.src = src;
    this.description = description;
    this.comments = comments;
  }

  getTemplate() {
    return createTemplate(this.title, this.rating, this.year, this.duration, this.genre, this.src, this.description, this.comments);
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
