import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Homeguest from './pages/Homeguest';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Profile from './pages/Profile';


function App() {
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to='/homeguest' />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route 
            index 
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>} />
            <Route path="homeguest" element={<Homeguest />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
