import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Cars from './components/cars';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cars' element={<Cars />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
