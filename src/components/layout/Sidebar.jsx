import { useAppStore } from '../../stores/appStore';
import { SECTIONS } from '../../constants/navigation';

const Sidebar = () => {
  const { currentSection, setCurrentSection, sidebarExpanded } = useAppStore();
  
  return (
    <div className={`bg-mantle text-text h-screen ${
      sidebarExpanded ? 'w-64' : 'w-20'
    } transition-all duration-300 p-4`}>
      <div className="mb-8">
        <h1 className={`font-bold ${sidebarExpanded ? 'text-xl' : 'text-sm text-center'}`}>
          {sidebarExpanded ? 'Render-Driven React' : 'RDR'}
        </h1>
      </div>
      
      <nav className="space-y-2">
        {SECTIONS.map(({ id, title, icon: Icon, description }) => (
          <button
            key={id}
            onClick={() => setCurrentSection(id)}
            className={`max-w-full text-left p-2 rounded flex items-center ${
              currentSection === id 
                ? 'bg-blue text-mantle' 
                : 'hover:bg-surface0'
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {sidebarExpanded && (
              <div className="ml-2 overflow-hidden">
                <div className="font-medium">{title}</div>
                <div className="text-sm truncate">{description}</div>
              </div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;