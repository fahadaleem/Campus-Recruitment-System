import './App.css';
import Routes from "./layout/Routes";
import {GlobalProvider} from './context/GlobalContext';
function App() {
  return (
    <GlobalProvider>
    <Routes />
    </GlobalProvider>
  );
}

export default App;
