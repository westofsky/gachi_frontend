import {Header} from './components/Main/header';
import styled from 'styled-components';
function App() {
  return (
    <Phone.Layout>
      <Header />
    </Phone.Layout>
  );
}

export default App;

const Phone = {
  Layout: styled.div`
    width: 393px;
    height: 852px;
  `,
};
