/* eslint-disable no-restricted-globals */
import storeListItemData from './localStorageFunctions';

const editItem = (listData) => {
  const allItems = document.querySelectorAll('li');
  const input = document.querySelectorAll('.task-name-input');
  const allLabel = document.querySelectorAll('label');
  const allDots = document.querySelectorAll('.dots');
  const allTrash = document.querySelectorAll('.trash');
  allLabel.forEach((item, index) => {
    item.addEventListener('click', () => {
      input[index].value = allLabel[index].textContent;
      allLabel[index].style.display = 'none';
      input[index].style.display = 'block';
      allDots[index].style.display = 'none';
      allTrash[index].style.display = 'block';
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

  allTrash.forEach((item, index) => {
    item.addEventListener('click', () => {
      listData = listData.filter((item) => item !== listData[index]);
      allItems[index].remove();
      storeListItemData(listData);
      location.reload();
    });
  });
};

export default editItem;