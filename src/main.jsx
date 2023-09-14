import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './views/Login.jsx'; // Your login page component
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
            <div className="app">
                 <ErrorBoundary> 
                  <AuthProvider>
                    <Routes>
                      <Route path="/" element={<Login />} />  
                      <Route path="/dashboard" element={<App />} />
                    </Routes>
                  </AuthProvider>
                </ErrorBoundary>
            </div>
        </Router>
  </React.StrictMode>,
)
