import React from 'react'
import { Button } from 'react-bootstrap'

interface ToDoItemProps {
  name: string
  description: string
  checked: boolean
  value: number
  deleteItem: (e: any) => void
  handleCheck: (e: any) => void
}

const ToDoItem = ({
  name,
  description,
  checked,
  value,
  deleteItem,
  handleCheck
}: ToDoItemProps) => {
  const checkStyling = checked ? 'table-success' : ''

  return (
    <tr className={`${checkStyling} text-center text-wrap bg-white`}>
      <td className={`${checkStyling} fw-bold text-capitalize`}>{name}</td>
      <td className={checkStyling}>{description}</td>
      <td className={`${checkStyling}`}>
        <input
          className={`form-check-input`}
          type='checkbox'
          value={value}
          id='flexCheckDefault'
          onChange={handleCheck}
          checked={checked}
        ></input>
      </td>
      <td className={`${checkStyling}`}>
        <Button
          className={'btn-close btn-block'}
          value={value}
          onClick={deleteItem}
          aria-label='Close'
        ></Button>
      </td>
    </tr>
  )
}

export default ToDoItem
