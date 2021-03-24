import { useState, useEffect } from "react";

export const usePersistedList = (listKey, initialList = []) => {
  const parsedInitialList =
    JSON.parse(window.localStorage.getItem(listKey)) || initialList;
  const [list, setList] = useState(parsedInitialList);

  useEffect(() => {
    window.localStorage.setItem(listKey, JSON.stringify(list));
  }, [list, listKey]);

  const validate = async listItem => {
    const finalValue = listItem?.value?.trim();

    // Local validation
    if (!finalValue) return false;

    // Server validation
    return new Promise(resolve => {
      setTimeout(() => {
        const regex = /^[a-zA-Z0-9!@#$%/&+=.:_-]{5,}$/g;
        const sameValueCheck =
          list.findIndex(
            item =>
              item.id !== listItem?.id &&
              item.value.toUpperCase() === finalValue.toUpperCase()
          ) >= 0;

        if (sameValueCheck || !regex.test(finalValue)) {
          return resolve(false);
        }

        return resolve(true);
      }, 2000);
    });
  };

  const addListItem = async listItem => {
    const isValid = await validate(listItem);
    if (isValid) {
      setList([...list, listItem]);
      return true;
    } else {
      return false;
    }
  };

  const editListItem = async listItem => {
    const isValid = await validate(listItem);
    if (isValid) {
      setList(list.map(item => (item.id === listItem.id ? listItem : item)));
      return true;
    } else {
      return false;
    }
  };

  const removeListItem = listItemId => {
    setList(list.filter(item => item.id !== listItemId));
  };

  return {
    list,
    addListItem,
    editListItem,
    removeListItem
  };
};
