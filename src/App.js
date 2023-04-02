
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/user/:id" element={<Profile />} />
         <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
