/* eslint-disable */
import './css/style.css';
import enter from './assets/enter.png';
import dots from './assets/three.png';
import recycle from './assets/recycle.png';
import updateItemsStatus from './js/updateItems';
import { getListItemdata } from './js/localStorageFunctions';

let listData = [
  {
    description: 'go to the gym',
    completed: false,
    index: 0,
  },
  {
    description: 'finish my tasks for today',
    completed: false,
    index: 1,
  },
  {
    description: 'read my book',
    completed: false,
    index: 2,
  },
  {
    description: 'going for a walk',
    completed: false,
    index: 3,
  },

];
const ulContainer = document.querySelector('.todo-container');
const addInput = document.createElement('input');
const clearAllCompletedBtn = document.createElement('button');
const clearIcon = document.createElement('img');
const inputBtn = document.createElement('img');

const createTodoListElement = () => {
  const title = document.createElement('h2');
  const titleAndIconDiv = document.createElement('div');
  const inputAndEnterDiv = document.createElement('div');

  title.textContent = 'Today\'s To Do';
  ulContainer.append(titleAndIconDiv, inputAndEnterDiv);
  titleAndIconDiv.append(title, clearIcon);
  inputAndEnterDiv.append(addInput, inputBtn);
  clearIcon.src = recycle;
  inputBtn.src = enter;
  clearIcon.classList.add('recycle');
  inputBtn.classList.add('enter');
  addInput.classList.add('add-input');
  addInput.type = 'text';
  addInput.placeholder = 'Add to your list...';
};

const createItemsElements = (item) => {
  const threeDotIcon = document.createElement('img');
  const listElement = document.createElement('li');
  const checkbox = document.createElement('input');
  const labelItem = document.createElement('label');
  const itemDiv = document.createElement('div');

  ulContainer.append(listElement);
  listElement.append(itemDiv, threeDotIcon);
  itemDiv.append(checkbox, labelItem);
  itemDiv.classList.add('item-div');
  threeDotIcon.src = dots;
  threeDotIcon.classList.add('dots');
  checkbox.type = 'checkbox';
  if (item.completed === true) checkbox.checked = true;
  checkbox.id = item.index;
  checkbox.name = item.index;
  checkbox.classList.add('checkbox');
  labelItem.setAttribute('for', item.index);
  labelItem.textContent = item.description;
  updateItemsStatus(checkbox, item);
};

const displayItems = () => {
  const newData = getListItemdata();
  if (newData !== null) listData = newData;
  createTodoListElement();
  listData.forEach((item) => {
    createItemsElements(item);
  });
  ulContainer.append(clearAllCompletedBtn);
  clearAllCompletedBtn.classList.add('clear-btn');
  clearAllCompletedBtn.textContent = 'Clear all completed';
};

displayItems();

export default listData;
