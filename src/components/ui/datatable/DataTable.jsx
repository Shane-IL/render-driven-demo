import { useDataTableStore } from '../../../stores/dataTableStore';
import { TableFilters } from './TableFilters';
import { TableHeader } from './TableHeader';
import { TablePagination } from './TablePagination';
import { formatDistance } from 'date-fns';

export const DataTable = () => {
  const {
    filters,
    sort,
    pagination,
    selectedIds,
    setFilter,
    setSort,
    setPage,
    setPerPage,
    toggleSelection,
    toggleAllSelection,
    getPaginatedItems,
    getTotalPages
  } = useDataTableStore();

  const paginatedItems = getPaginatedItems();
  const totalPages = getTotalPages();

  const allSelected = paginatedItems.length > 0 && 
    paginatedItems.every(item => selectedIds.includes(item.id));

  return (
    <div>
      <TableFilters 
        filters={filters} 
        onFilterChange={setFilter} 
      />
      
      <div className="border border-surface1 rounded overflow-hidden">
        <table className="w-full">
          <thead className="bg-surface0 border-b border-surface1">
            <tr>
              <th className="p-3 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAllSelection}
                  className="rounded border-surface1"
                />
              </th>
              <TableHeader field="name" sort={sort} onSort={setSort}>Name</TableHeader>
              <TableHeader field="email" sort={sort} onSort={setSort}>Email</TableHeader>
              <TableHeader field="role" sort={sort} onSort={setSort}>Role</TableHeader>
              <TableHeader field="status" sort={sort} onSort={setSort}>Status</TableHeader>
              <TableHeader field="lastActive" sort={sort} onSort={setSort}>Last Active</TableHeader>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map(item => (
              <tr 
                key={item.id} 
                className="border-b border-surface1 last:border-0 hover:bg-surface0"
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => toggleSelection(item.id)}
                    className="rounded border-surface1"
                  />
                </td>
                <td className="p-3">{item.name}</td>
                <td className="p-3 text-subtext0">{item.email}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm ${
                    item.role === 'Admin' ? 'bg-red/20 text-red' :
                    item.role === 'Editor' ? 'bg-mauve/20 text-mauve' :
                    'bg-blue/20 text-blue'
                  }`}>
                    {item.role}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm ${
                    item.status === 'Active' ? 'bg-green/20 text-green' :
                    item.status === 'Inactive' ? 'bg-red/20 text-red' :
                    'bg-yellow/20 text-yellow'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3 text-subtext0">
                  {formatDistance(new Date(item.lastActive), new Date(), { addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination
        page={pagination.page}
        perPage={pagination.perPage}
        totalPages={totalPages}
        onPageChange={setPage}
        onPerPageChange={setPerPage}
      />
    </div>
  );
};