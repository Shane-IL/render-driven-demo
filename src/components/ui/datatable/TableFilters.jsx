import { Search } from 'lucide-react';

export const TableFilters = ({ 
  filters,
  onFilterChange 
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex-1 min-w-[200px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-overlay0" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            placeholder="Search users..."
            className="w-full pl-9 p-2 rounded bg-surface0 border border-surface1 text-text placeholder:text-overlay0"
          />
        </div>
      </div>

      <select
        value={filters.role}
        onChange={(e) => onFilterChange('role', e.target.value)}
        className="p-2 rounded bg-surface0 border border-surface1 text-text"
      >
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => onFilterChange('status', e.target.value)}
        className="p-2 rounded bg-surface0 border border-surface1 text-text"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};