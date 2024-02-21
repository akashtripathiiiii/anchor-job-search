import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import InternshipList from './components/internships/InternshipList';
import Logout from './components/auth/Logout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Student App</h1>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <PrivateRoute path="/profile/edit" element={<EditProfile />} />
          <PrivateRoute path="/internships" element={<InternshipList />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
