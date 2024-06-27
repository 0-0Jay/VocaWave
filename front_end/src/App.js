import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
