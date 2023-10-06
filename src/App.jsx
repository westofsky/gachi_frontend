import {Header} from './components/Main/header';
import styled from 'styled-components';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from './pages/Main/Main';
import Register from './pages/Main/Register';
import RegisterInfo from './pages/Main/RegisterInfo';
import Home from './pages/Home/Home';
function App() {
  return (
    <Phone.Layout>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/registerinfo" element={<RegisterInfo />}></Route>
          <Route path="/home" element={<Home />}></Route>
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
