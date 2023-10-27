import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, role, component: Component, ...props }) {
  const isStudent = role === 'Student';
  const isCompany = role === 'Company';

  if (isStudent && (props.path === '/Jobs' || props.path === '/company' || props.path === '/learning')) {
    return isAuthenticated ? <Route {...props} /> : <Navigate to="/login" />;
  } else if (isCompany && props.path === '/Applications') {
    return isAuthenticated ? <Route {...props} /> : <Navigate to="/login" />;
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
}
export default ProtectedRoute