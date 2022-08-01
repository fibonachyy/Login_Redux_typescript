export function getKey(key: string) {
  const myKey = localStorage.getItem(key.toLowerCase());
  return myKey;
}

export function setKey(key: string, value: string) {
  localStorage.setItem(key.toLowerCase(), value);
  return true;
}
