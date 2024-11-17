import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';
import Home from './pages/Home'; // Import Home page to show on the default route
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar will be present on all routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/items/add" element={<AddItem />} /> {/* Add Item Page */}
        <Route path="/items/edit/:id" element={<EditItem />} /> {/* Edit Item Page */}
      </Routes>
    </div>
  );
}

export default App;
