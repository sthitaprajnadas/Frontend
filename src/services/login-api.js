// services/login-api.js
const apiUrl = 'http://127.0.0.1:5000'; 
export async function loginUser(username, password) {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  