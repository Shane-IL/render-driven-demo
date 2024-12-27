import { SECTIONS } from '../../constants/navigation';
import { useAppStore } from '../../stores/appStore';
import {
  Intro,
  About,
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
      case 'about':
        return <About />;
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-2">
            {currentSectionData?.title}
          </h1>
          <p className="text-subtext0">
            {currentSectionData?.description}
          </p>
        </div>
        {renderSection()}
      </div>
    </main>
  );
};

export default Main;