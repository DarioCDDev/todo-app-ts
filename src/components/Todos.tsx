import { ListOfTodos, TodoHandleConfirm, TodoId } from '../types';
import { Todo } from './Todo';

interface Props {
  todos: ListOfTodos;
  handleRemove: ({ id }: TodoId) => void;
  handleComplete: ({ id, completed }: TodoHandleConfirm) => void;
}
export const Todos: React.FC<Props> = ({ todos, handleRemove, handleComplete }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleRemove={handleRemove}
            handleComplete={handleComplete}
          />
        </li>
      ))}
    </ul>
  )
}