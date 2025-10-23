class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element); //Call the renderer, and pass it the item as an argument
    });
  }

  addItem(element) {
    this._container.append(element); //Add element to the container.
  }
}

export default Section;
