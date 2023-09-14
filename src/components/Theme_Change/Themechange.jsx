import React from 'react';
import './themechange.css';
import icon2 from '../../assets/icon_2.png';

function ThemeToggleButton({ onToggle }) {
    return (
        <button className="theme-toggle-button" onClick={onToggle}>
            <img src={icon2} alt="Toggle Theme"/>
        </button>
    );
}

export default ThemeToggleButton;
