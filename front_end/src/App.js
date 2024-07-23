import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Home from './component/Home';
import ShareBoard from './component/ShareBoard';
import MyWordList from './component/MyWordList';
import Words from './component/Words';
import Devtest from './devtest';

function App() {
  const [cookie] = useCookies([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mywordlist" element={<MyWordList />} />
        <Route path="/shareboard" element={<ShareBoard />} />
        <Route path="/words" element={<Words />} />
        <Route path="/devtest" element={<Devtest />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
