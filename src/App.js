import { Provider } from 'react-redux';
import './App.css';
import { Store } from './Redux/Store';
import Tabs from './Tabs/Tabs';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <Tabs />
      </Provider>
    </div>
  );
}

export default App;
