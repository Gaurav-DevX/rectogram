import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import NavBar from './components/NavBar';
import PostOverview from './Pages/PostOverview';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className='app-bg'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/posts" element={<PostOverview />}></Route>
          <Route exact path="/my-profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
