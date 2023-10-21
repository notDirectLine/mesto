import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._formElement = this._popup.querySelector('.popup__form')
    this._inputElement = this._formElement.querySelectorAll('.popup__input')
    this._getInputValues = this._getInputValues.bind(this);
  }
  _getInputValues() {
    const formInputs = {}
    this._inputElement.forEach((input) => {
      formInputs[input.name] = input.value
    })
    return formInputs
  }
  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
      console.log('вызвал');
      this._handleFormSubmit(this._getInputValues())
      console.log('отправил');
    })
  }
  close() {
    super.close()
    this._formElement.reset();
  }
}

//Array.from(this._popup.querySelectorAll('.popup__input'))