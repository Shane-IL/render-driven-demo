import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

export const TableHeader = ({ 
  field, 
  children, 
  sort, 
  onSort 
}) => {
  const isSorted = sort.field === field;
  
  return (
    <th 
      onClick={() => onSort(field)}
      className="p-3 text-left cursor-pointer hover:bg-surface1 select-none"
    >
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <div className="w-4">
          {isSorted ? (
            sort.direction === 'asc' ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )
          ) : (
            <ChevronsUpDown className="h-4 w-4 text-overlay0" />
          )}
        </div>
      </div>
    </th>
  );
};