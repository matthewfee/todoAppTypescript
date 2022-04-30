import { storageKey } from '../../consts/consts'
import { addToStorage } from './storageAPIhelper'

//tests when new items are added to local storage

const localStorageMock = (function () {
  let store = new Map()
  return {
    getItem(key: string): string {
      return store.get(key)
    },

    setItem: function (key: string, value: string) {
      store.set(key, value)
    },

    clear: function () {
      store = new Map()
    },

    removeItem: function (key: string) {
      store.delete(key)
    }
  }
})()

describe('storage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    })
  })

  const fakeArray = [
    { name: 'ToDo Name', description: 'To Do Description', checked: false },
    { name: 'ToDo Name 2', description: 'To Do Description 2', checked: false }
  ]

  it('updates items to storage', () => {
    addToStorage(fakeArray)

    const fakeJSON = JSON.stringify(fakeArray)

    expect(window.localStorage.getItem(storageKey)).toEqual(fakeJSON)
  })
})
