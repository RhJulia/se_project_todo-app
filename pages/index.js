import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import formValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(wasCompleted) {
  todoCounter.updateTotal(false);
}

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    //TODO - move code form existing submission handler here.
    const name = inputValues.name.trim();
    const dateInput = inputValues.date;

    if (!name) {
      return;
    }

    let date = null;
    if (dateInput) {
      date = new Date(dateInput);
      // normalize to local date by neutralizing timezone offset
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }

    const id = uuidv4();
    const values = { name, date, id, completed: false };

    const todoEl = generateTodo(values);
    section.addItem(todoEl);
    todoCounter.updateTotal(true);

    newTodoValidator.resetValidation();
    addTodoPopup.close();
  },
});

addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos, //pass initial todos
  renderer: (item) => {
    const todoEl = generateTodo(item); //generate todo item
    return todoEl;
  },
  containerSelector: ".todos__list",
});

//Call section instance's renderItems Method
section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const newTodoValidator = new formValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
