import Card from "./Card.js";
import FormValidator from "./FormValidator.js"; 
import { initialCards } from "./InitialCards.js";

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_state_invalid',
};

const container = document.querySelector('.elements__list')

const editPopup = document.querySelector('.popup_type_edit')
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_job');
const profileUsername = document.querySelector('.profile__username');
const profileJob = document.querySelector('.profile__description');
const editForm = document.forms['edit-form'];

const addCardPopup = document.querySelector('.popup_type_add');
const link = addCardPopup.querySelector('.popup__input_type_link');
const mesto = addCardPopup.querySelector('.popup__input_type_mesto');
const closeButtonAdd = addCardPopup.querySelector('.popup__close-button');
const addForm = document.forms['add-form'];

const photoPopup = document.querySelector('.popup_type_photo');
const closeButtonPhoto = photoPopup.querySelector('.popup__close-button')
const photoSrc = photoPopup.querySelector('.popup__image');
const photoTitle = photoPopup.querySelector('.popup__photo-title');

//connect edit form validation
const validateEditForm = new FormValidator(config, editForm)
validateEditForm.enableValidation()
//connect add form validation
const validateAddForm = new FormValidator(config, addForm)
validateAddForm.enableValidation()

//create new Card class
function createCard(item) {
  const card = new Card(item, '.element__template', openPhotoPopup)
  const cardElement = card.createCard();

  return cardElement;
}

//render cards
initialCards.forEach((item) => {
  container.append(createCard(item))
})

//open card photo popup 
function openPhotoPopup(link, name) {
  photoSrc.src = link;
  photoTitle.textContent = name;
  photoSrc.alt = name;
  openPopup(photoPopup);
}

//add new card
function handleAddSubmit (evt) {
  evt.preventDefault();
  const inputData = ({ name: mesto.value, link: link.value});
  container.prepend(createCard(inputData));
  closePopup(addCardPopup);
  addForm.reset()
  validateAddForm.resetValidation()
}

//edit-popup save
function handleEditSubmit (evt) {
  evt.preventDefault();
  profileUsername.textContent = nameInput.value;
  profileJob.textContent = jobInput.value; 
  closePopup(editPopup);
  validateEditForm.resetValidation()
}

//close popup with overlay click
function handlePopupOverlay(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
}

//escape key close popup
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') { 
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

//open and close forms popups function
function handleEditPopupOpen() {
  openPopup(editPopup)
  nameInput.value = profileUsername.textContent;
  jobInput.value = profileJob.textContent; 
  
}

function handleAddPopupOpen() {
  openPopup(addCardPopup)
}

//cloes edit, add and photo popup functions
function handleEditPopupClose() {
  closePopup(editPopup)
}

function handleAddPopupClose() {
  closePopup(addCardPopup)
}

function handlePhotoPopupClose() {
  closePopup(photoPopup)
}


//Open edit and add popup listeners
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
editButton.addEventListener('click', handleEditPopupOpen)
addButton.addEventListener('click', handleAddPopupOpen)

//universal open and close popup functions
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

//button close listeners
const closeButtonEdit = editPopup.querySelector('.popup__close-button');
closeButtonEdit.addEventListener('click', handleEditPopupClose)
closeButtonAdd.addEventListener('click', handleAddPopupClose)
closeButtonPhoto.addEventListener('click', handlePhotoPopupClose)

//overlay close listeners
editPopup.addEventListener('click', handlePopupOverlay)
addCardPopup.addEventListener('click', handlePopupOverlay)
photoPopup.addEventListener('click', handlePopupOverlay)

//submit button listeners
editForm.addEventListener('submit', handleEditSubmit);
addForm.addEventListener('submit', handleAddSubmit);