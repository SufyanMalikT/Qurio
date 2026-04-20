import axios from "axios"

const api = axios.create({
    'baseURL':import.meta.env.VITE_API_URL
})
export default api;


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh');
            // Call Django to get a new access token
            const res = await axios.post('/api/token/refresh/', { refresh: refreshToken });
            localStorage.setItem('access', res.data.access);
            return api(originalRequest); // Retry original request
        }
        return Promise.reject(error);
    }
);