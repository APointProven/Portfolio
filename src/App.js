import './index.css';
import Nav from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  return (
    <div>
      <Nav />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;