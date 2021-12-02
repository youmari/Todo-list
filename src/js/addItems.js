import storeListItemData from './localStorageFunctions';

const addItems = (addInput, inputBtn, listData, renderList, clearAllElement, clearElement) => {
  function itemObject(description) {
    return { index: listData.length, description, completed: false };
  }
  inputBtn.addEventListener('click', () => {
    if (addInput.value === '') return;
    const newItem = itemObject(addInput.value);
    listData.push(newItem);
    clearElement();
    storeListItemData(listData);
    renderList();
    clearAllElement();
    addInput.value = '';
  });
};

export default addItems;