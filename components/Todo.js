class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = {
      // provide sensible defaults in case fields are missing
      id: data.id,
      name: data.name,
      completed: Boolean(data.completed),
      date: data.date ?? null,
    };

    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _generateDueDate() {
    const dueDate = this._data.date ? new Date(this._data.date) : null;

    if (dueDate instanceof Date && !Number.isNaN(dueDate.getTime())) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    } else {
      this._todoDate.textContent = "";
    }
  }

  _setEventListeners() {
    //TODO set up delete button handler
    this._todoDeleteBtn.addEventListener("click", () => {
      const completed = this._data.completed;
      this._handleDelete(completed);
      this._todoElement.remove();
    });

    //checkbox handler
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = this._todoCheckboxEl.checked;
      this._handleCheck(this._data.completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    //assign completed status
    this._todoCheckboxEl.checked = this._data.completed;

    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    //TODO - implement dates
    this._generateDueDate();
    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
