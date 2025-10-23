class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup_close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      //TODO - call the close method
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    //ToDO - Remove the class from the popup element
    this._popupElement.classList.remove("popup_visible");
    //TODO - remove the escape listener
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    //this one listsener will handle close button and modal listsner
    this._popupElement.addEventListener("mousedown", (evt) => {
      //if the event target classList contains "popup__close or Popup"
      //then close the modal
      //youll need an if block that checks this condition.
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
