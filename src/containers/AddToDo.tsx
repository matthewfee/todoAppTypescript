import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { IState as Props } from '../App'

interface IProps {
  toDoItems: Props['toDoItems']
  setToDoItems: Props['setToDoItems']
}

function AddToDo({ toDoItems, setToDoItems }: IProps) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value)
  }

  const addItem = (): void => {
    // no empty todos

    if (name === '' && description === '') {
      return
    }

    let arr = [...toDoItems]
    arr.push({ name, description, checked: false })
    setToDoItems(arr)

    // reset values to empty
    setName('')
    setDescription('')
  }

  return (
    <Container className='container-fluid p-0 container-sm mt-5'>
      <h2>My To Dos...</h2>
      <div className='input-group mt-5'>
        <input
          type='text'
          className='form-control'
          value={name}
          onChange={handleName}
          placeholder={'Name'}
        ></input>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={handleDescription}
          placeholder={'Description'}
        ></input>

        <Button
          variant='outline-secondary'
          id='button-addon2'
          onClick={addItem}
        >
          Add Item
        </Button>
      </div>
    </Container>
  )
}

export default AddToDo
