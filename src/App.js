import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import Adminlogin from './components/Adminlogin';
import Userdashboard from './components/Userdashboard';
import Donarlist from './components/Donarlist';
import Requestform from './components/Requestform';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Donarlist' element={<Donarlist />}></Route>
        <Route path='/Requestform' element={<Requestform />}></Route>
       
       {/*} <Route path='/Adminlogin' element={<Adminlogin />}></Route>*/}
      </Routes>
  </BrowserRouter> 
      {/*<Userdashboard />*/}
    </div>
  );
}

export default App;
