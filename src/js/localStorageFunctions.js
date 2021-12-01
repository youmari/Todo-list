export const storeListItemData = (listData) => {
  localStorage.setItem('items', JSON.stringify(listData));
};

export const getListItemdata = () => {
  const retrievedItemData = JSON.parse(localStorage.getItem('items'));
  return retrievedItemData;
};
