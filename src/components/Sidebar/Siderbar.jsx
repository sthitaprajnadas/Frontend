import React, { useState, useEffect, useContext } from 'react';
import './Sidebar_style.css';
import logo1 from '../../assets/logo_1.png';
import logoDark from '../../assets/Logo_dark.png'; // Importing dark logo
import handleImage from '../../assets/handle@2x.png';
import logo2 from '../../assets/logo_2.png';
import smallLogoDark from '../../assets/small_logo_dark.png'; // Importing small dark logo

function Sidebar({hasFetchedData, data, darkTheme}) {
    const [collapsed, setCollapsed] = useState(false);
    const [models, setModels] = useState([]); 
    useEffect(() => {
        // Set the models from the fetched data
        if (hasFetchedData && data) {
            setModels(data.models);
        }
    }, [hasFetchedData, data]);

    // Determine which logos to use based on theme and collapsed state
    const currentLogo = darkTheme ? logoDark : logo1;
    const currentSmallLogo = darkTheme ? smallLogoDark : logo2;

    return (
        <div className={`${collapsed ? "collapsed" : ""} ${darkTheme ? "dark-theme" : ""} sidebar`}>
            <img src={currentLogo} alt="Logo" className="logo1" />
            <button className="toggle-button" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <img src={currentSmallLogo} alt="Small Logo" className="small-logo"/> : <img src={handleImage} alt="Handle" className="handle-icon" />}
            </button>
            <ul>
                {models.map(model => (
                    <li key={model.id} className="active">{model.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;



