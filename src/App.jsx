import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import { ModalVideoProvider } from './Components/Video/ModalVideoContext';
import ComingSoon from './Page/coming-soon';
import AppRouters from './Router';

const isDev = import.meta.env.DEV;

const App = () => {
  return (
    <Router>
      {isDev ? <Navbar /> : null}
      {isDev ? <Sidebar /> : null}

      {isDev ? (
        <ModalVideoProvider>
          <AppRouters />
        </ModalVideoProvider>
      ) : (
        <ComingSoon />
      )}

      {isDev ? <Footer /> : null}
    </Router>
  );
};

export default App;
