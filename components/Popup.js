class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn - this._popupElement.querySlector(".popup_close");
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    //Remove the class from the popup element
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;
