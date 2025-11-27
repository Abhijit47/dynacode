import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import { ModalVideoProvider } from './Components/Video/ModalVideoContext';
import AppRouters from './Router';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ModalVideoProvider>
        <AppRouters />
      </ModalVideoProvider>
      <Footer />
    </Router>
  );
};

export default App;
