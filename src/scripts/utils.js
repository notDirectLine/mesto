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
//const profileUsername = document.querySelector('.profile__username');
//const profileJob = document.querySelector('.profile__description');
const editForm = document.forms['edit-form'];

const addCardPopup = document.querySelector('.popup_type_add');
const link = addCardPopup.querySelector('.popup__input_type_link');
const mesto = addCardPopup.querySelector('.popup__input_type_mesto');
const closeButtonAdd = addCardPopup.querySelector('.popup__close-button');
const addForm = document.forms['add-form'];

const photoPopup = document.querySelector('.popup_type_photo');
const closeButtonPhoto = photoPopup.querySelector('.popup__close-button')
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
//const photoSrc = photoPopup.querySelector('.popup__image');
//const photoTitle = photoPopup.querySelector('.popup__photo-title');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {
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
}