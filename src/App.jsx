import {Header} from './components/Main/header';
import styled from 'styled-components';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from './pages/Main';
import Register from './pages/Register';
import RegisterInfo from './pages/RegisterInfo';
function App() {
  return (
    <Phone.Layout>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/registerinfo" element={<RegisterInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </Phone.Layout>
  );
}

export default App;

const Phone = {
  Layout: styled.div`
    width: 393px;
    height: 49rem;
    border: 1px solid black;
    border-radius: 1.5rem;
  `,
};
