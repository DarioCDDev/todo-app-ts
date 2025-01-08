import { FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  filterSelected: FilterValue;
  handleFilterSelected: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, onClearCompleted, filterSelected, handleFilterSelected }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterSelected={handleFilterSelected}
      />
      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Limpiar completados
          </button>
        )
      }
    </footer>
  )
}