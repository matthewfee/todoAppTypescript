import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'
import { addToStorage } from '../tests/mocks/storageAPIhelper'
// import 'bootstrap/dist/css/bootstrap.min.css'

export interface IState {
  toDoItems: {
    name: string
    description: string
    checked: boolean
  }[]
  setToDoItems: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        description: string
        checked: boolean
      }[]
    >
  >
}

export const storageKey = 'todo-items'

function App() {
  const [toDoItems, setToDoItems] = useState<IState['toDoItems']>([])

  useEffect(() => {
    const items = localStorage.getItem(storageKey)

    if (typeof items === 'string') {
      const parsed = JSON.parse(items)
      setToDoItems(parsed)
    }
  }, [])

  useEffect(() => {
    if (toDoItems.length > 0) {
      addToStorage(toDoItems)
      // localStorage.setItem(storageKey, JSON.stringify(toDoItems))
    }
  }, [toDoItems])

  // checks if there are items to do

  const workToDo = toDoItems.length > 0 ? true : false

  return (
    <Container className={'d-flex flex-column justify-content-center mt-5'}>
      <Row className={'d-flex justify-content-center'}>
        <Col className='col-12 col-sm-12 col-md-8 col-lg-6 text-center'>
          <AddToDo toDoItems={toDoItems} setToDoItems={setToDoItems}></AddToDo>
        </Col>
      </Row>
      <Row className={'d-flex justify-content-center'}>
        <Col className='col-12 col-sm-12 col-md-12 col-lg-6'>
          {workToDo && (
            <ToDoList
              toDoItems={toDoItems}
              setToDoItems={setToDoItems}
            ></ToDoList>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default App
