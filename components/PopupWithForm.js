import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this.popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup__Form.querySelectorAll(".popup_input");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      //Todo
      //add a key value pair to the values object for each input
      //the key is input.name
      //the value is input.value
      //need to use brackets notation not dot notation
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      //TODO - of getInputValues to submission handler
      this._handleFormSubmit(inputValues);
    });
  }
}
export default PopupWithForm;
