import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import MainPage from "./Components/MainPage";
import RecordPage from "./Components/RecordPage";
import DiscussPage from "./Components/DiscussPage";
import MyPage from "./Components/MyPage";
import BookDetail from "./Components/BookDetail";


function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="Main">BOOKLY</Link>
        </div>
        <nav className="navbar-menu">
          <Link to="/record">record</Link>
          <Link to="/discuss">discuss</Link>
          <Link to="/mypage">mypage</Link>
        </nav>
      </header>
      <Routes>
        <Route path="Main" element={<MainPage />} />
        <Route path="/book/:title" element={<BookDetail />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/discuss" element={<DiscussPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
