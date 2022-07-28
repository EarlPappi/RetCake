import HeaderNav from './Components/Header/HeaderNav/HeaderNav';
import { ContextProvider } from './Context/AuthContext';

function App() {
  return (
    <ContextProvider>
      <HeaderNav/>
    </ContextProvider>
    
  );
}

export default App;
