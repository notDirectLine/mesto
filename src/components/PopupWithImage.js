import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._photoPopupImg = this._popup.querySelector('.popup__image')
    this._photoPopupTitle = this._popup.querySelector('.popup__photo-title')
  }
  open(name, link) {
    super.open()
    this._photoPopupImg.src = link
    this._photoPopupTitle.textContent = name
    this._photoPopupTitle.alt = name
  }
}