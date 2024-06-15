import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  // const person = { name: "Joshuel", age: "22" } 
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
// add comment just for commit 
export default App;
