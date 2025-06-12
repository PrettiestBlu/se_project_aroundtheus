const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
console.log(initialCards);

/*  PROFILE ELEMENTS */
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

/*  FORM ELEMENTS */
const modalOne = document.querySelector("#profile__edit-modal");
const profileEditForm = modalOne.querySelector(".modal__form");
const profileTitleInput = modalOne.querySelector("#profile-title-input");
const profileDescriptionInput = modalOne.querySelector("#profile-description-input");
const profileCloseButton = modalOne.querySelector(".modal__close-button");

const modalTwo = document.querySelector("#add__card-modal");
const profileAddButton = document.querySelector(".profile__add-button");
const modalTwoClose = modalTwo.querySelector(".modal__close-button");

/*  CARD RELATED ELEMENTS */
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =document.querySelector("#card-template")

/* CARD FUNCTIONS */
function getCardElement(cardData) {
  const cardElement = cardTemplate.content
  .querySelector(".card")
  .cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardListEl.append(cardElement); //append or prepend depending on order specified
});

/*MODAL ONE EVENT LISTENERS, FUNCTIONS & EVENT HANDLERS*/
profileEditButton.addEventListener("click", () => {
profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescription.textContent;
modalOne.classList.add("modal_is-opened")});
//^^??looking for the best way to submit close event when clicking the X 
profileCloseButton.addEventListener("click", () => {
  closeModal;
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileAddButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = URL.textContent;
  modalTwo.classList.add("modal_is-opened")});

  modalTwoClose.addEventListener("click", () => {
    closeModal;
  });
  modalTwoClose.addEventListener("submit", handleProfileEditSubmit); //does this line have to be here?

function closeModal(modalOne) {
  modalOne.classList.remove("modal_is-opened");
} //this function assists with closing modalOne

function handleProfileEditSubmit(e) { //can use "e" or "evt" in event expressions
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(modalOne)
};


//FOR MY "ADD CARD" MODAL


const modalTwoTemplate =document
.querySelector("#card-template")
.content.querySelector(".modal__two")

profileAddButton.addEventListener("click", () => {
  modalTwo(modalTwo);
})

function closePopup(modalTwo) {
  modalTwo.classList.remove("modal_is-opened")
};

//finishing up tomorrow: currently working on finding the const variables for
//the remaining components in regard to modalTwo
//copying code, filling in what's necessary to make it functional (X)
//find direct corresponding variables from CSS to HTML and see exactly how the
//previous code was written for modalOne (X)
//Make sure no component is missing and everything corresponds correctly
//punctuations should be exact DOUBLE CHECK