import React from 'react'
import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  onClearCompleted: () => void
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
    <footer className='footer'>
        <span className='todo-count'>
            <strong>{activeCount}</strong> Tareas pendientes
        </span>

        <Filters
            filterSelected={ filterSelected }
            onFilterChange={ handleFilterChange }
        />
        {
          completedCount > 0 && (
            <button
              className='clear-completed'
              onClick={onClearCompleted}>
              Borrar completado
            </button>
          )
        }
    </footer>

  )
}
