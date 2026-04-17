import axios from "axios";

export async function login(username, password) {
    try {
        // 1. Added the trailing slash at the end of the URL
        const res = await axios.post("http://localhost:8000/api/auth/login/", { 
            username: username, 
            password: password 
        });
        const data = res.data
        localStorage.setItem('access_token',data['access'])
        localStorage.setItem('refresh_token',data['refresh'])
    } catch (error) {
        console.error("Login failed:", error.response ? error.response.data : error.message);
    }
}

 const isAuthenticated = () => {
    return !!localStorage.getItem('access_token')
}
export default isAuthenticated