import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Home from './component/Home';
import ShareBoard from './component/ShareBoard';
import MyWordList from './component/MyWordList';
import Words from './component/Words';
import Devtest from './devtest';

function App() {
    return (
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mywordlist" element={<MyWordList />} />
          <Route path="/shareboard" element={<ShareBoard />} />
          <Route path="/Words" element={<Words />} />
          <Route path="/devtest" element={<Devtest />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
