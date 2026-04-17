import {Navigate, Outlet} from 'react-router-dom'
import isAuthenticated from '../services/auth'
function ProtectedRoutes(){
    const auth = isAuthenticated();
    return auth ? <Outlet /> : <Navigate to='/login' replace />
}
export default ProtectedRoutes