export default class Card {
  constructor({name, link}, templateSelector, handleCardClick) { 
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__picture');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
  _handleDeleteButton() {
    this._element.remove();
  }
  _handleLikeButton() {
    this._elementLikeButton.classList.toggle('element__button_active');
  }
  _setEventListeners() {
    this._buttonTrash = this._element.querySelector('.element__trash')
    this._buttonTrash.addEventListener('click', () => {
      this._handleDeleteButton()
    });

    this._elementLikeButton = this._element.querySelector('.element__button')
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeButton()
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
  }
}