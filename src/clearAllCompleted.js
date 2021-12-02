/* eslint-disable no-restricted-globals */
import storeListItemData from './js/localStorageFunctions';

const clearAllCompletedtasks = (listData) => {
  const clearAllBtn = document.querySelector('.clear-btn');
  clearAllBtn.addEventListener('click', () => {
    listData = listData.filter((item) => !item.completed);
    storeListItemData(listData);
    location.reload();
  });
};

export default clearAllCompletedtasks;