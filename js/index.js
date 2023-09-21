const formElement = document.querySelector(".form-data");
const nameInputElement = formElement.querySelector("#name");
const birthdateInputElement = formElement.querySelector("#birthdate");
const pictureInputElement = formElement.querySelector("#picture");
const javascriptInputElement = formElement.querySelector("#javascript");
const sufferingInputElement = formElement.querySelector("#suffering");

formElement.addEventListener("change", (event) => {
  console.log(event.target.value);
  switch (event.target) {
    case nameInputElement:
      setName(event.target.value);
      break;
    case birthdateInputElement:
      setAge(event.target.value);
      break;
    case pictureInputElement:
      setPicture(event.target.value);
      break;
    case javascriptInputElement:
      setJavaScript();
      break;
    case sufferingInputElement:
      setSuffering(event.target.value);
      break;
  }
});

const setName = (name) => {
  const nameElement = document.querySelector(".greeting");
  nameElement.classList.remove("off");
  const userName = document.querySelector(".name");

  userName.textContent = name;

  const picture = document.querySelector("img");
  picture.alt = name;
};

const setAge = (age) => {
  const ageFather = document.querySelector(".age");
  ageFather.classList.remove("off");
  const ageElement = document.querySelector(".age-number");

  const actualDate = new Date();
  const actualYear = parseInt(actualDate.getFullYear());
  const actualMonth = parseInt(actualDate.getMonth() + 1);
  const actualDay = parseInt(actualDate.getDate());

  const splitedAge = age.split("-");

  console.log(splitedAge);

  let userAge = actualYear - splitedAge[0];
  if (actualMonth < splitedAge[1]) {
    userAge--;
  } else if (actualDay < splitedAge[2]) {
    userAge--;
  }

  ageElement.textContent = userAge;
};

const setPicture = (picture) => {
  const userPicture = document.querySelector("img");

  userPicture.classList.remove("off");
  userPicture.src = picture;
};

setJavaScript = () => {
  const javascriptFather = document.querySelector(".javascript");
  const javascriptYes = document.querySelector(".javascript-yes");
  const javascriptNo = document.querySelector(".javascript-no");

  const checkBox = document.querySelector("#javascript");

  javascriptFather.classList.remove("off");

  if (checkBox.checked) {
    javascriptYes.classList.remove("off");
    javascriptNo.classList.add("off");
  } else {
    javascriptNo.classList.remove("off");
    javascriptYes.classList.add("off");
  }
};

setSuffering = (sufferingNumber) => {
  const sufferingFather = document.querySelector(".suffering");
  sufferingFather.classList.remove("off");
  const sufferingElement = document.querySelector(".suffering-quantity");

  if (sufferingNumber < 5) {
    sufferingElement.textContent = "poco";
    sufferingElement.classList.remove("suffering-ok");
    sufferingElement.classList.remove("suffering-warning");
    sufferingElement.classList.add("suffering-danger");
  } else if (sufferingNumber >= 5 && sufferingNumber < 8) {
    sufferingElement.textContent = "normal";
    sufferingElement.classList.remove("suffering-danger");
    sufferingElement.classList.remove("suffering-ok");
    sufferingElement.classList.add("suffering-warning");
  } else if (sufferingNumber >= 8) {
    sufferingElement.textContent = "mucho";
    sufferingElement.classList.remove("suffering-danfer");
    sufferingElement.classList.remove("suffering-warning");
    sufferingElement.classList.add("suffering-ok");
  }
};
