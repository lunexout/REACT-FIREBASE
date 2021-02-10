import './App.css';
import LoginFrom from './components/loginFrom/loginFrom'
import LoginTeacher from './components/loginTeacher/loginTeacher'
import LoginStudent from './components/loginStudent/loginStudent'
import Teacher from './components/teacher/teacher'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="container text-center" style={{marginTop: "10%"}}>
      <Route exact path="/" component={LoginFrom}/>
      <Route path="/teacher/login" component={LoginTeacher}/>
      <Route path="/student/login" component={LoginStudent}/>
      <Route exact path="/teacher" component={Teacher}/>
      </div>      
    </div>
  );
}

export default App;
