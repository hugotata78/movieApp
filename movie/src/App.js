//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import 'bulma/css/bulma.css'
import { Routes } from './Routes';
//import { Title } from './components/Title'
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {


  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
}

export default App;
