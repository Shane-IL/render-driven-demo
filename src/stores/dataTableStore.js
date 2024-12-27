import { create } from 'zustand';

// Mock data
const mockUsers = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ['Admin', 'User', 'Editor'][Math.floor(Math.random() * 3)],
  status: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)],
  lastActive: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
}));

export const useDataTableStore = create((set, get) => ({
  // Data
  items: mockUsers,
  selectedIds: [],
  
  // Filtering
  filters: {
    role: '',
    status: '',
    search: '',
  },
  
  // Sorting
  sort: {
    field: 'name',
    direction: 'asc',
  },
  
  // Pagination
  pagination: {
    page: 1,
    perPage: 5,
  },

  // Actions
  setFilter: (key, value) => set(state => ({
    filters: { ...state.filters, [key]: value },
    pagination: { ...state.pagination, page: 1 }, // Reset to first page on filter
  })),

  setSort: (field) => set(state => ({
    sort: {
      field,
      direction: state.sort.field === field && state.sort.direction === 'asc' 
        ? 'desc' 
        : 'asc'
    }
  })),

  setPage: (page) => set(state => ({
    pagination: { ...state.pagination, page }
  })),

  setPerPage: (perPage) => set(state => ({
    pagination: { ...state.pagination, perPage, page: 1 }
  })),

  toggleSelection: (id) => set(state => ({
    selectedIds: state.selectedIds.includes(id)
      ? state.selectedIds.filter(i => i !== id)
      : [...state.selectedIds, id]
  })),

  toggleAllSelection: () => {
    const currentState = get();
    const currentPageItems = currentState.getPaginatedItems();
    const allSelected = currentPageItems.every(item => 
      currentState.selectedIds.includes(item.id)
    );

    set(state => ({
      selectedIds: allSelected
        ? state.selectedIds.filter(id => 
            !currentPageItems.some(item => item.id === id)
          )
        : [...new Set([...state.selectedIds, ...currentPageItems.map(item => item.id)])]
    }));
  },

  // Computed getters
  getFilteredItems: () => {
    const state = get();
    return state.items.filter(item => {
      const matchesRole = !state.filters.role || item.role === state.filters.role;
      const matchesStatus = !state.filters.status || item.status === state.filters.status;
      const matchesSearch = !state.filters.search || 
        item.name.toLowerCase().includes(state.filters.search.toLowerCase()) ||
        item.email.toLowerCase().includes(state.filters.search.toLowerCase());
      
      return matchesRole && matchesStatus && matchesSearch;
    });
  },

  getSortedItems: () => {
    const state = get();
    const filtered = state.getFilteredItems();
    
    return [...filtered].sort((a, b) => {
      const aVal = a[state.sort.field];
      const bVal = b[state.sort.field];
      
      const direction = state.sort.direction === 'asc' ? 1 : -1;
      
      if (aVal < bVal) return -1 * direction;
      if (aVal > bVal) return 1 * direction;
      return 0;
    });
  },

  getPaginatedItems: () => {
    const state = get();
    const sorted = state.getSortedItems();
    const start = (state.pagination.page - 1) * state.pagination.perPage;
    const end = start + state.pagination.perPage;
    return sorted.slice(start, end);
  },

  getTotalPages: () => {
    const state = get();
    const filtered = state.getFilteredItems();
    return Math.ceil(filtered.length / state.pagination.perPage);
  },
}));