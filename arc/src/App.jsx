import Header from './components/Header';
import Products from './components/Products';
import CartProviders from './context/CartProviders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./store";
function App() {

  return (
    <>
      <Provider store={store}>
        <ToastContainer position='bottom-right' newestOnTop={true} autoClose={600} hideProgressBar={true} />
        <Header />
        <Products />
      </Provider>
    </>
  );
}

export default App;;
