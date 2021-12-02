/* eslint-disable no-restricted-globals */
import storeListItemData from './localStorageFunctions';

const editItem = (listData) => {
  const allItems = document.querySelectorAll('li');
  const input = document.querySelectorAll('.task-name-input');
  const allLabel = document.querySelectorAll('label');
  allLabel.forEach((item, index) => {
    item.addEventListener('click', () => {
      input[index].value = allLabel[index].textContent;
      allLabel[index].style.display = 'none';
      input[index].style.display = 'block';
      input[index].addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          allLabel[index].textContent = input[index].value;
          allLabel[index].style.display = '';
          input[index].style.display = 'none';
          if (input[index].value === '') {
            allItems[index].remove();
            listData = listData.filter((item) => item !== listData[index]);
            storeListItemData(listData);
            location.reload();
          }
          listData[index].description = input[index].value;
          storeListItemData(listData);
        }
      });
    });
  });
};

export default editItem;