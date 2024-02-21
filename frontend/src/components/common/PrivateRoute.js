import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useAuth();
    console.log('currentUser:', currentUser);

    return (
        <Route
            {...rest}
            element={currentUser ? element : <Navigate to="/login" replace />}
        />
    );
};

export default PrivateRoute;
