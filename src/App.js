import './App.css';
import Home from '../src/pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
      />
    </>
  );
}

export default App;
