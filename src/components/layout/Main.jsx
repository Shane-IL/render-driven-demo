import { useAppStore } from '../../stores/appStore';
import { SECTIONS } from '../../constants/navigation';
import {
  Intro,
  CoreConcepts,
  Examples,
  BestPractices
} from '../sections';

const Main = () => {
  const { currentSection } = useAppStore();
  
  const renderSection = () => {
    switch(currentSection) {
      case 'intro':
        return <Intro />;
      case 'core-concepts':
        return <CoreConcepts />;
      case 'examples':
        return <Examples />;
      case 'best-practices':
        return <BestPractices />;
      default:
        return <Intro />;
    }
  };

  const currentSectionData = SECTIONS.find(section => section.id === currentSection);

  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentSectionData?.title}
          </h1>
          <p className="text-slate-400">
            {currentSectionData?.description}
          </p>
        </div>
        {renderSection()}
      </div>
    </main>
  );
};

export default Main;