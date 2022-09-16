import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Component/AddUser';
import AllUser from './Component/AllUsers';
import EditUser from './Component/EditUser';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all" element={<AllUser />} />
        <Route path="add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
