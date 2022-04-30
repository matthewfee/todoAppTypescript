import { addTodo } from './addHelper'

describe('addTodo', () => {
  it('should add todo to the list', () => {
    const startTodos = [
      { name: 'one', description: 'description one', checked: false },
      { name: 'two', description: 'description two', checked: false }
    ]

    const newTodo = {
      name: 'three',
      description: 'description three',
      checked: false
    }

    const expected = [
      { name: 'one', description: 'description one', checked: false },
      { name: 'two', description: 'description two', checked: false },
      { name: 'three', description: 'description three', checked: false }
    ]

    const result = addTodo(startTodos, newTodo)
    expect(result).toEqual(expected)
  })
})
