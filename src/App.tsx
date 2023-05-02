import { TestComponent } from './components/test-component.tsx'

const App = () => {
  return (
    <div className="bg-gray-600 w-full h-full flex justify-center items-center">
      <TestComponent hello="does the template work?" />
      
    </div>
  );
};

export default App