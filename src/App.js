import './App.css';
import Compendium from './views/Compendium';

function App() {
  return (
    <section className="container">
      <div className="appHeader">
        <h1>Pokemon: Catch 'em All!</h1>
      </div>
      <div className="container">
        <Compendium />
      </div>
    </section>
  );
}

export default App;
