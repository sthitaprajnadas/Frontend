// Your component file
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/login-api';
import React, { useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import AuthContext from '../hooks/AuthContext';

// import './signin.css';
import AILogo from '../assets/AILogo.png';
import AISlogan from '../assets/AISlogan.png';
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  // Initializing Cookies
  const cookies = new Cookies();
  // Initializing User State
  const [userState, setUserState] = useState(null);
  const defaultTheme = createTheme();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      const data = await loginUser(email, password);
      console.log(data);
      const jwt_token = data['access_token'];
        // Decode JWT Token
        const decoded = jwt(jwt_token);
        setUserState(decoded); //Set User State
        setToken(jwt_token); 

        // Set Cookie
        cookies.set("jwt_authorization", jwt_token, {
          expires: new Date(decoded.exp * 1000),    //Setting Expire time for Token
        });
        // set Auth Status
        localStorage.setItem('auth', true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      // Handle login failure, e.g., display an error message to the user.
    }
    useEffect(() => {
      let authStatus = localStorage.getItem('auth');
      if(!authStatus) {
          navigate('/');
      }
    },[]);

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={false} sm={4} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', textAlign: 'center' }}>
          <Box>
            <img src={AILogo} width={300} alt="Aiceberg Logo" loading="lazy" />
            <img src={AISlogan} width={300} alt="Slogan - Trust in Your AI" className="slogan" loading="lazy" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6} elevation={6} square sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Box sx={{ my: 4, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h5" className="loginHeading">
              Login to your account
            </Typography>
            <Typography component="p" variant="p" className="loginHeading">
              Welcome back!
            </Typography>
            <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <TextField margin="normal" required id="user" label="Email" name="email" type="email" autoComplete="email" autoFocus />
              <TextField margin="normal" required name="password" label="Password" type="password" id="password" autoComplete="current-password" />
              <Grid container alignItems="center">
                <Grid item xs>
                  <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" className="loginHeading" id="rememberMe" variant="body2" />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" id="forgotPwd">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button type="submit" className="loginButton" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container justifyContent="space-evenly">
                <Grid item>
                  <Link href="#" variant="body2" id="notRegisteredText">
                    Not Registered Yet?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" id="createAccount">
                    {"Create an Account"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
