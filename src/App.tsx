import { TestComponent } from './components/test-component.tsx'
import { Navbar } from './components/Navbar.tsx';

const App = () => {
  return (
    <div className="bg-mainbg w-full h-full md:desktop-body">
      <Navbar />
      <TestComponent hello="personal portfolio 😎" />
      
    </div>
  );
};

export default App