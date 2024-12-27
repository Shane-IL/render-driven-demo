import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TablePagination = ({
  page,
  totalPages,
  perPage,
  onPageChange,
  onPerPageChange
}) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        <span className="text-subtext0">Rows per page:</span>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          className="p-1 rounded bg-surface0 border border-surface1 text-text"
        >
          {[5, 10, 20, 50].map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-subtext0">
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="p-1 rounded enabled:hover:bg-surface1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className="p-1 rounded enabled:hover:bg-surface1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};