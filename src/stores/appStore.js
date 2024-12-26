import { create } from 'zustand';

export const useAppStore = create((set) => ({
  currentSection: 'intro',
  sidebarExpanded: true,
  theme: 'dark',  // Changed from darkMode boolean to theme string
  
  setCurrentSection: (section) => set({ currentSection: section }),
  toggleSidebar: () => set((state) => ({ sidebarExpanded: !state.sidebarExpanded })),
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'dark' ? 'light' : 'dark' 
  })),
}));