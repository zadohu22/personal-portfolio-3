import { TestComponent } from './components/test-component.tsx'
import { Navbar } from './components/navbar.tsx';

const App = () => {
  return (
    <div className="bg-mainbg w-full h-full flex justify-center items-center">
      <Navbar />
      <TestComponent hello="does the template work? blah" />
      
    </div>
  );
};

export default App