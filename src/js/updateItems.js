/* eslint-disable */
import listData from '../index';
import  storeListItemData  from './localStorageFunctions';

const updateItemsStatus = (checkbox, item) => {
  checkbox.addEventListener('change', () => {
    !item.completed
      ? item.completed = true
      : item.completed = false;
      storeListItemData(listData);
    });


};

export default updateItemsStatus;