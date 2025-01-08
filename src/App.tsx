import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoCompleted, TodoHandleConfirm, TodoId, TodoTitle, } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  { id: "1", title: 'Learn React', completed: true },
  { id: "2", title: 'Learn Redux', completed: false },
  { id: "3", title: 'Build something awesome', completed: false },
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: TodoHandleConfirm): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // return { ...todo, completed: !completed }
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterSelected = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return true
  }
  )

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const clearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const onAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }


  return (
    <div className="todoapp">
      <Header onAddTodo={onAddTodo} />
      <Todos todos={filteredTodos} handleRemove={handleRemove} handleComplete={handleComplete} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => clearCompleted()}
        handleFilterSelected={handleFilterSelected}
      />
    </div>
  )
}

export default App
