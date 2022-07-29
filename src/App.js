import Home from './Components/Directory/Home/Home';
import { ContextProvider } from './Context/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from './Components/Header/HeaderNav/HeaderNav';

function App() {
  return (
    <ContextProvider>
    <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
