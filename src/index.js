import listData from "./js/data.js";
import './css/style.css';


const displayItems = () => {
  const ulContainer = document.querySelector('.todo-container');
  const addInput = document.createElement('input');
  const clearBtn = document.createElement('button');

  ulContainer.textContent = `Today's To Do`;
  ulContainer.append(addInput);
  addInput.classList.add('add-input');
  addInput.type = 'text';
  addInput.placeholder = 'Add to your list...'

  listData.forEach((item) => {
    const listElement = document.createElement('li');
    const checkbox = document.createElement('input');
    const labelItem = document.createElement('label');

    ulContainer.append(listElement);
    listElement.append(checkbox,labelItem)

    checkbox.type = 'checkbox';
    checkbox.id = item.index;
    checkbox.name = item.index;
    checkbox.classList.add('checkbox')
    labelItem.setAttribute('for', item.index);
    labelItem.textContent = item.description;
  });

  ulContainer.append(clearBtn);
  clearBtn.classList.add('clear-btn');
  clearBtn.textContent = 'Clear all completed';
  

}
displayItems();

