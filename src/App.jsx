import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import MainContent from './components/Dashboard/Dashboard.jsx'; 
import Sidebar from './components/Sidebar/Siderbar.jsx';
import { get_models_and_versions } from './services/sidebar-api';
import AuthContext from './hooks/AuthContext'; 

function App() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);
    const handleThemeToggle = () => setDarkTheme(!darkTheme);
    const [hasFetchedData, setHasFetchedData] = useState(false); // Track if data has been fetched
    const { token } = useContext(AuthContext);
    const [data, setData] = useState(null); 

    useEffect(() => {
        // Fetch models and versions data when the component mounts
        if (!hasFetchedData) {
            get_models_and_versions(token)
                .then(data => {
                    // Update the state with the received data
                    // setModels(data.models); // You can set the models in App.jsx if needed
                    setHasFetchedData(true); // Mark data as fetched
                    setData(data); 
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [hasFetchedData, token]);
    return (
        <div className="app">
            <Sidebar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} hasFetchedData={hasFetchedData} data={data} darkTheme={darkTheme}/>
            <MainContent isCollapsed={isCollapsed} darkTheme={darkTheme}/>
        </div>
    );
}   

export default App;
