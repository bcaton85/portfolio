import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Route exact path="/" component={Main} />
      <Route exact path="/resume" component={Resume} />
    </Router>
  );
}

export default App;
