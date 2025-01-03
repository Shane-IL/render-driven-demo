import { Menu } from 'lucide-react';

import { useAppStore } from '../../stores/appStore';

const Header = () => {
  const { toggleSidebar } = useAppStore();

  return (
    <header className="bg-surface0 border-b border-surface1 p-4 sticky top-0 z-10">
      <div className="flex items-center relative">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-surface1 rounded text-overlay2"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2 text-subtext0">
          A practical guide to render-driven architecture
        </div>
      </div>
    </header>
  );
};

export default Header;