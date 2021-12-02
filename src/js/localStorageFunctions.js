const storeListItemData = (listData) => {
  localStorage.setItem('items', JSON.stringify(listData));
};

export default storeListItemData;
