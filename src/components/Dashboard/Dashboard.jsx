import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './Dashboard_style.css';
import ThemeToggleButton from '../../components/Theme_Change/Themechange.jsx';
import icon3 from '../../assets/icon_3.png'; 
import icon4 from '../../assets/icon_4.png'; 
import avatar from '../../assets/Avatar.png'; 
import bckimage from '../../assets/background_dashboard.png';


function MainContent({ isCollapsed, onThemeToggle, darkTheme }) {
    return (
        <div className={`main-content ${isCollapsed ? 'expanded' : ''} ${darkTheme ? 'dark-theme' : ''}`}>
            <Grid container spacing={3}>
                
                {/* Rounded Box 1 */}
                <Grid item xs={12}>
                <Paper elevation={0} className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ padding: '10px', borderRadius: '8px', lineHeight:'5px', display: 'flex', justifyContent: 'space-between', border: '1px solid #ddd' }}>
                <div className="user-info">
                    <p>
                        Welcome! <strong style={{color: '#293A75'}}>Mr. John Doe</strong> - <strong style={{color: '#1F92C0'}}>Super Admin</strong>
                    </p>
                    <p><strong>Last Login 06 NOV 22 12.30PM</strong></p>
                </div>
                <div className="icons-area">
                <ThemeToggleButton onToggle={onThemeToggle} />
                    <img src={icon3} alt="Icon 3" />
                    <img src={icon4} alt="Icon 4" />
                    <img src={avatar} alt="Avatar" />
                </div>
            </Paper>
                </Grid>

{/* Rounded Box 2 */}
<Grid item xs={12}>
    <Paper elevation={0} className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ 
        background: `url(${bckimage}) no-repeat center center`, 
        backgroundSize: 'cover', // Ensure the image covers the entire Paper.
        padding: '20px', 
        borderRadius: '8px', 
        border: '1px solid #ddd',
        position: 'relative' // To ensure that content is layered correctly
    }}>
        <div style={{ position: 'relative' }}> 
            {/* Inner Grid 1 */}
            <Grid item xs={12}>
                <Paper elevation={0}className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ 
                    padding: '20px', 
                    borderRadius: '8px', 
                    border: '1px solid #ddd',
                    marginBottom: '5px'
                }}>
                    Component Place holder
                </Paper>
            </Grid>

            {/* Inner Grid 2 */}
            <Grid item xs={12}>
                <Paper elevation={0}className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ 
                    padding: '20px', 
                    borderRadius: '8px', 
                    border: '1px solid #ddd'
                }}>
                  Component Place holder
                </Paper>
            </Grid>
        </div>
    </Paper>
</Grid>

                

                {/* Chart 1 */}
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ padding: '80px', borderRadius: '8px', border: '1px solid #ddd' }}>
                        <div className="chart">Chart 1</div>
                    </Paper>
                </Grid>

                {/* Chart 2 */}
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} className={`${darkTheme ? 'dark-theme-paper' : ''}`}style={{ padding: '80px', borderRadius: '8px', border: '1px solid #ddd' }}>
                        <div className="chart">Chart 2</div>
                    </Paper>
                </Grid>

                {/* Chart 3 */}
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ padding: '100px', borderRadius: '8px', border: '1px solid #ddd' }}>
                        <div className="chart">Chart 3</div>
                    </Paper>
                </Grid>

                {/* Chart 4 */}
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} className={`${darkTheme ? 'dark-theme-paper' : ''}`} style={{ padding: '100px', borderRadius: '8px', border: '1px solid #ddd' }}>
                        <div className="chart">Chart 4</div>
                    </Paper>
                </Grid>

            </Grid>
            <div className="footer">
            © 2023, Aiceberg, INC. All Rights Reserved
        </div>
        </div>
        
    );
}

export default MainContent;

