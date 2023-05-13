import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Form from './components/form/Form';


function App() {
  return (
    <>
     <ToastContainer autoClose={2000}/>
    <Form/>
    </>
  );
}

export default App;
