import axios from 'axios';
import API from './index';

// Sign-Up Function
export const signUp = async (name: string, email: string, password: string,role:string) => {
    try {
        // const response = await API.post('/auth/register', { name, email, password }, { headers: { 'Content-Type': 'application/json' } });
        const response = await axios.post(
            'http://192.168.1.3:5000/api/auth/register',
            { name, email, password ,role},
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error during sign-up:', error.message);
        } else {
            console.error('Error during sign-up:');
        }
        throw error;
    }
};

// Login Function
export const login = async (email: string, password: string) => {
    try {
        const response = await API.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Verify Token Function (Optional)
export const verifyToken = async () => {
    try {
        const response = await API.get('/auth/profile');
        return response.data;
    } catch (error) {
        console.error('Error during token verification:', error);
        throw error;
    }
};
