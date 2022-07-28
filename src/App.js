import Home from './Components/Directory/Home/Home';
import { ContextProvider } from './Context/AuthContext';

function App() {
  return (
    <ContextProvider>
      <Home/>
    </ContextProvider>
    
  );
}

export default App;
