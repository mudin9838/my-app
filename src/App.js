import logo from './logo.svg';
import './App.css';

function App() {
  const myItem = "Muhdin"
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Reacts
    //     </a>
    //   </header>
    // </div>
    <ul>
      <li>item1</li>
      <li>item255 {myItem}</li>
      <li>{myItem.toUpperCase() }</li>
    </ul>
  );
}

export default App;
