import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 
const API = axios.create({
    baseURL: 'http://192.168.1.3:5000/api', // Replace with your Node.js server URL
    timeout: 10000, // Optional: Timeout for requests
});

// Add interceptors for token handling
API.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default API;
