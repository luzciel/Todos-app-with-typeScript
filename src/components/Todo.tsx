import React from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void

}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }
  return (
    <div>
      <input
      type='checkbox'
      className='toggle'
      checked={completed}
      onChange={handleChangeCheckbox}
      />
      <label htmlFor="">{title}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo({ id }) }}
      />
    </div>
  )
}
