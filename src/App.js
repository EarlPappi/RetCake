import Home from './Components/Directory/Home/Home';
import { ContextProvider } from './Context/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from './Components/Header/HeaderNav/HeaderNav';
import Signup from './Components/Directory/Auth/Signup';
import Login from './Components/Directory/Auth/Login';

function App() {
  return (
    <ContextProvider>
    <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={ <Signup/> } />
          <Route path="login" element={ <Login/> } />

        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
