import './index.css'

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"; 
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import {
  config,
  initialCards,
  editForm,
  addForm,
  container,
  mesto,
  link,
  nameInput,
  jobInput,
  editButton,
  addButton,
} from "../scripts/utils.js"

//connect edit form validation
const validateEditForm = new FormValidator(config, editForm)
validateEditForm.enableValidation()
//connect add form validation
const validateAddForm = new FormValidator(config, addForm)
validateAddForm.enableValidation()

//create new Card class
function createCard(item) {
  const card = new Card(item, '.element__template', handleCardClick)
  const cardElement = card.createCard();

  return cardElement;
}

//create new Section class, render cards
const newCards = new Section(
  {
    data: initialCards, 
    renderer: data => newCards.addItem(createCard(data))
  }, 
  container
  );
newCards.renderItems()

//create new zoom image popup
const popupWithImage = new PopupWithImage('.popup_type_photo')
popupWithImage.setEventListeners()

function handleCardClick(link, name) {
  popupWithImage.open(name, link)
}

//create add new card popup
const popupAddCard = new PopupWithForm({ popupSelector: '.popup_type_add', handleFormSubmit: (item) => {
  const newCard = {
    name: item[mesto.name],
    link: item[link.name]
  };
  const addNewCard = createCard(newCard)
  newCards.addItem(addNewCard)
  popupAddCard.close()
  validateAddForm.resetValidation()
}}) 
popupAddCard.setEventListeners()

//get user class info
const userInfo = new UserInfo({profileUsername: '.profile__username', profileJob: '.profile__description'})

//set new user info
const popupEditProfile = new PopupWithForm({popupSelector: '.popup_type_edit', handleFormSubmit: (form) => {
  userInfo.setUserInfo(form.name, form.job)
  popupEditProfile.close()
}})
popupEditProfile.setEventListeners()

//functions to open the popups
function handleEditPopupOpen() {
  popupEditProfile.open()
  const {name, info} = userInfo.getUserInfo();
  nameInput.value = name
  jobInput.value = info
}

function handleAddPopupOpen() {
  popupAddCard.open()
}

//listeners that trigger open popups
editButton.addEventListener('click', handleEditPopupOpen)
addButton.addEventListener('click', handleAddPopupOpen)