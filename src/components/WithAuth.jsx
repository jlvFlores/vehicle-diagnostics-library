import { Navigate } from 'react-router';

const WithAuth = (WrappedComponent) => {
  const token = sessionStorage.getItem('token');

  return token ? <WrappedComponent token={token} /> : <Navigate to="/login" replace />;
};

export default WithAuth;
