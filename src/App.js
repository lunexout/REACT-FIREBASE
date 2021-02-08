import './App.css';
import Content from './components/Content.jsx'
import Navbar from './components/Navbar.jsx'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Route path="/home" component={Content}/>
    </div>
  );
}

export default App;
