// services/sidebar-api.js
const apiUrl = 'http://127.0.0.1:5000'; 
export async function get_models_and_versions(token) {
  console.log(token);
    try {
      const response = await fetch(`${apiUrl}/get_models_and_versions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  
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
  