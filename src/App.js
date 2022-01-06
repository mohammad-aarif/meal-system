import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import UserDash from './Pages/Dashboard/UsersDashboard/Normal/UserDash';
import ManagerDash from './Pages/Dashboard/UsersDashboard/Manager/ManagerDash';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Test from './Pages/Test'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/manager/*" element={<PrivateRoute><ManagerDash /></PrivateRoute>}/>
        {/* <Route path="/manager/*" element={<ManagerRoute><ManagerDash /></ManagerRoute>}/> */}
        <Route path="/userdashboard/*" element={<PrivateRoute><UserDash /></PrivateRoute> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
