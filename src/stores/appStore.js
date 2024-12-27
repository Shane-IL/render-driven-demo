import { create } from 'zustand';

export const useAppStore = create((set) => ({
  currentSection: 'intro',
  sidebarExpanded: true,
  
  setCurrentSection: (section) => set({ currentSection: section }),
  toggleSidebar: () => set((state) => ({ sidebarExpanded: !state.sidebarExpanded })),
}));