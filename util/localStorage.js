export function getLocalStorage(key, defaultValue) {
  const StorageItem = localStorage.getItem(key);

  if (!StorageItem) {
    return defaultValue;
  }

  const data = JSON.parse(StorageItem);
  console.log(data, data, data);
  return data;
}

export function setLocalStorage(key, value) {
  const StorageItem = JSON.stringify(value);
  localStorage.setItem(key, StorageItem);
}
