import './index.css';
import Topbar from './Components/Topbar'
import Home from './Components/Home'
import Navigation from './Components/Navigation';
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  return (
    <div>
      <Topbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;