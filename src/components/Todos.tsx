import React from 'react'
import { type Todo as TodoType, type ListOfTodos, type TodoId } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ onToggleCompleted, onRemoveTodo, todos }) => {
  return (
    <ul className='todo-list'>
        {todos.map(todo => (
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  onRemoveTodo={onRemoveTodo}
                  onToggleCompleted={onToggleCompleted}
                />
            </li>
        ))}
    </ul>
  )
}
