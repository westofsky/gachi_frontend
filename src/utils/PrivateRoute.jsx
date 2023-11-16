import {Navigate} from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({component: Component}) => {
  return localStorage.getItem('access') ? (
    Component
  ) : (
    <Navigate to="/" {...alert('로그인이 필요합니다.')}></Navigate>
  );
};
