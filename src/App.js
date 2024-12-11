import './App.css';
import CreateList from './CreateList';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store} >
        <CreateList/>
        </Provider>      
        </header>
    </div>
  );
}

export default App;
