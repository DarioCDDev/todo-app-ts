import { FILTERS_BUTTONS } from "../consts"
import { FilterValue } from "../types";

interface Props {
  filterSelected: FilterValue;
  onFilterSelected: (filter: FilterValue) => void;
}


export const Filters: React.FC<Props> = ({ filterSelected, onFilterSelected }) => {
  return (
    <ul className="filters">
     {
        Object.entries(FILTERS_BUTTONS).map(([key, {href,literal}]) =>{
          const isSeleted = filterSelected === key;
          const className = isSeleted ? 'selected' : '';
          return (
            <li key={key}>
              <a
                className={className}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  onFilterSelected(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
     }
    </ul>
  )
}