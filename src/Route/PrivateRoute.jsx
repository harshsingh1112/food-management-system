import PropTypes from 'prop-types';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location =useLocation()

    const {user,loading} = useAuth()
    if (loading) {
        return <div className='flex items-center justify-center'> <progress className="progress w-56"></progress></div>
    }

    if (user) {
        return children
    }

    return <Navigate
    state={location.pathname} to='/login' ></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
  };
export default PrivateRoute;