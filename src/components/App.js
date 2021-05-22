import React from 'react'
import '../styles/App.css';
import firebase from 'firebase/app';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './Navbar'
import Routes from './Routes'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUKCET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
