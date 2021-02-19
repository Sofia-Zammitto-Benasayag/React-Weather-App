import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Hello From React
        </h1>
        <Weather city="Italy" />
      </header>
    </div>
  );
}

export default App;
