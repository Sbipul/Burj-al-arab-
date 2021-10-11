import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <PrivetRoute path="/book">
              <Book />
            </PrivetRoute>
            <Route path="/book/:bedType">
              <Book />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
