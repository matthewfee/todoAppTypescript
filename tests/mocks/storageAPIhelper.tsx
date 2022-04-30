import { storageKey } from '../../src/App'

export function addToStorage(array: object[]) {
  const jsonArray = JSON.stringify(array)
  window.localStorage.setItem(storageKey, jsonArray)
}
