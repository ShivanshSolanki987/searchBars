import logo from './logo.svg';
import './App.css';
import search from './VisualEditor_-_Icon_-_Search.svg.png';

function App() {
  return (
    <div className="App">
      <div className='one'>
        <input type='text' placeholder='Search...'/>
        <button><img src={search}/></button>
      </div>
      <div className='two'>
        <input type='text' placeholder='Search...'/>
        <button><img src={search}/></button>
      </div>
      <div className='three'>
        <input type='text' placeholder='Search...'/>
        <button><img src={search}/></button>
      </div>
      <div className='four'>
        <input type='text' placeholder='Search...'/>
        <button><img src={search}/></button>
      </div>
    </div>
  );
}

export default App;
