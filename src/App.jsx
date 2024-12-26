import { useAppStore } from './stores/appStore';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

const App = () => {
  return (
    <div className="flex h-screen bg-base text-text">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <div className="flex-1 overflow-auto">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;