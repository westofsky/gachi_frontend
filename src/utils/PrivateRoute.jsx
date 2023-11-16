import {Navigate} from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({authenticated, component: Component}) => {
  return authenticated ? (
    Component
  ) : (
    <Navigate to="/" {...alert('로그인이 필요합니다.')}></Navigate>
  );
};
