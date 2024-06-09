import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';

function App() {
  const person = { name: "Joshuel", age: "22" } 
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
