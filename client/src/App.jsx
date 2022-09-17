import { Global } from '@emotion/react';
import reset from './styles/reset.jsx';
import Navbar from './components/nav/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
