import listData from './js/data';
import './css/style.css';
import enter from './assets/enter.png';
import dots from './assets/three.png';
import recycle from './assets/recycle.png';

const displayItems = () => {
  const ulContainer = document.querySelector('.todo-container');
  const addInput = document.createElement('input');
  const clearBtn = document.createElement('button');
  const title = document.createElement('h2');
  const clearIcon = document.createElement('img');
  const inputBtn = document.createElement('img');
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

  listData.forEach((item) => {
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
    checkbox.id = item.index;
    checkbox.name = item.index;
    checkbox.classList.add('checkbox');
    labelItem.setAttribute('for', item.index);
    labelItem.textContent = item.description;
  });

  ulContainer.append(clearBtn);
  clearBtn.classList.add('clear-btn');
  clearBtn.textContent = 'Clear all completed';
};

displayItems();
