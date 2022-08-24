
import './App.css';
import { Home, Bookmarks } from './pages';
import { Routes, Route } from "react-router-dom";

function App() {
    
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
      
  )
}

export default App;
