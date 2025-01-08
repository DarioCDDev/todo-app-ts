import { TodoHandleConfirm, TodoId, Todo as TodoType } from "../types"

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void;
  handleComplete: ({ id, completed }: TodoHandleConfirm) => void;
}


export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleComplete }) => {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" onChange={(e) => handleComplete({id, completed : e.target.checked})} checked={completed} />
      <label>{title}</label>
      <button className="destroy" onClick={() => handleRemove({ id })} />
    </div>
  )
}