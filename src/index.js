/* eslint-disable */
import './css/style.css';
import enter from './assets/enter.png';
import dots from './assets/three.png';
import recycle from './assets/recycle.png';
import updateItemsStatus from './js/updateItems';
import addItems from './js/addItems';
import clearAllCompletedtasks from './clearAllCompleted';
import editItem from './js/editAndRemoveItem';
import trash from './assets/trash.png'

let listData = JSON.parse(localStorage.getItem('items')) || [];
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
  const trashImg = document.createElement('img');
  const listElement = document.createElement('li');
  const checkbox = document.createElement('input');
  const labelItem = document.createElement('label');
  const inputItem = document.createElement('input');
  const itemDiv = document.createElement('div');
  
  ulContainer.append(listElement);
  listElement.append(itemDiv, threeDotIcon,trashImg);
  itemDiv.append(checkbox, labelItem, inputItem);
  labelItem.classList.add('task-name');
  inputItem.classList.add('task-name-input');
  itemDiv.classList.add('item-div');
  threeDotIcon.src = dots;
  threeDotIcon.classList.add('dots');
  trashImg.src = trash;
  trashImg.classList.add('trash');
  checkbox.type = 'checkbox';
  if (item.completed === true) {
    checkbox.checked = true;
    labelItem.style.textDecoration = 'line-through'
  } 
  checkbox.id = item.index;
  checkbox.name = item.index;
  checkbox.classList.add('checkbox');
  labelItem.setAttribute('for', item.index);
  labelItem.textContent = item.description;
  updateItemsStatus(checkbox, item,labelItem);
  editItem(listData)
};
const renderList = () => {
  let number = 1;
  if (listData) listData.forEach((item) => {
    item.index = number++;
    createItemsElements(item);
  });
}


const clearElement = () => {
  const listElement = document.querySelectorAll('li');
  listElement.forEach((item) => { 
    item.remove()
  })
}

const clearAllElement = () => {
  ulContainer.append(clearAllCompletedBtn);
  clearAllCompletedBtn.classList.add('clear-btn');
  clearAllCompletedBtn.textContent = 'Clear all completed';
}

const displayItems = () => {
  createTodoListElement();
  addItems(addInput,inputBtn,listData,renderList,clearAllElement,clearElement);
  renderList()
  clearAllElement()
  clearAllCompletedtasks(listData);
}

displayItems();

document.addEventListener('change', (e) => {
  if (e.target.matches('.checkbox')) {
    if (e.target.checked) {
      e.target.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      e.target.nextElementSibling.style.textDecoration = 'none';
    }

  }

})


  
  
  export default listData;
  