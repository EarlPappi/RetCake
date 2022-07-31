import Home from './Components/Directory/Home/Home';
import { ContextProvider } from './Context/AuthContext';
import { Routes, Route } from "react-router-dom";
import HeaderNav from './Components/Header/HeaderNav/HeaderNav';
import Signup from './Components/Directory/Auth/Signup';
import Login from './Components/Directory/Auth/Login';
import ForgetPassword from './Components/Directory/Auth/ForgetPassword';
import CakeDetail from './Components/Directory/Home/HomeSections/CatalogSection/CakeDetail';

function App() {
  return (
    <ContextProvider>
    <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={ <Signup/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="reset-password" element={ <ForgetPassword/> } />
          <Route path="cakes/:id" element={ <CakeDetail/> }/>

        </Routes>
    </ContextProvider>

  );
}

export default App;
