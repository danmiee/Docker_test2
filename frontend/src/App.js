import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<HomePage />} />
      <Route path="/signIn" exact={true} element={<SignInPage />} />
      <Route path="/signUp" exact={true} element={<SignUpPage />} />
      <Route path="/chart" exact={true} element={<ChartPage />} />
    </Routes>
  );
}

export default App;
