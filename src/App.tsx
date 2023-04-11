import todosData from './data/todos'
import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './consts'
import { type Todo, type ListOfTodos, type TodoId, type FilterValue, type TodoTitle } from './types'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ListOfTodos>(todosData)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodo)
  }
  const handleRemove = (id: TodoId): void => {
    const idValue = Object.values(id)
    const newTodos = todos.filter(todo => todo.id !== idValue[0])
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handlerRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos
        onToggleCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handlerRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
