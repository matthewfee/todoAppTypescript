import React from 'react'
import ToDoItem from '../components/ToDoItem'
import { Table } from 'react-bootstrap'
import { IState as Props } from '../App'

interface IProps {
  toDoItems: Props['toDoItems']
  setToDoItems: Props['setToDoItems']
}

const ToDoList = (props: IProps) => {
  const { toDoItems, setToDoItems } = props

  const deleteItem = (e: React.FormEvent<HTMLInputElement>): void => {
    const index: number = parseInt(e.currentTarget.value)
    let arr = [...toDoItems]
    arr.splice(index, 1)
    setToDoItems(arr)
  }

  const handleCheck = (e: React.FormEvent<HTMLInputElement>): void => {
    const index: number = parseInt(e.currentTarget.value)
    let arr = [...toDoItems]
    let item = arr[index]
    item.checked = !item.checked
    setToDoItems(arr)
  }

  return (
    <Table striped bordered hover className={`mt-5 border-3 table-responsive`}>
      <thead className='border-0'>
        <tr className='text-center bg-white text-black border-0 fst-italic'>
          <th className='border-0 fw-normal'>Name</th>
          <th className='border-0 fw-normal '>Description</th>
          <th className='border-0 fw-normal '>Status</th>
          <th className='border-0 fw-normal '>Delete</th>
        </tr>
      </thead>
      <tbody className='align-middle'>
        {toDoItems.map((item, index) => {
          return (
            <ToDoItem
              name={item.name}
              key={index}
              value={index}
              description={item.description}
              checked={item.checked}
              deleteItem={deleteItem}
              handleCheck={handleCheck}
            ></ToDoItem>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ToDoList
