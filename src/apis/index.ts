import { IParams } from '@/interfaces/recipe';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variables for the base URL
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(
    (config) => {
        // Add authorization token or other headers here
        console.log('configg', config)
        return config;
    },
    (error) => {
        // Handle request error here
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Handle responses globally

        return response;
    },
    (error) => {
        // Handle errors globally
        if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized errors (e.g., redirect to login)
            console.log('console', error.response)
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance

export const getRecipies = (params: any) => axiosInstance.get(`v2?${params}`)

export const getRecipeById = (id: string | string[], params: IParams) => axiosInstance.get(`v2/${id}`, {params})