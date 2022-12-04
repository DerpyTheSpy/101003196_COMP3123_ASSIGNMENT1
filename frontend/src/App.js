
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import Login from './components/login'

function App() {
  return (
    <Router>
   <div classname="heading">FORMS
   <div>
      <Route exact path='/create' component ={Create} />
   </div>
   <div style={{marginTop:20}} >
      <Route exact path='/read' component ={Read} />
   </div>
   <div style={{marginTop:20}} >
      <Route exact path='/update' component ={Update} />
   </div>
   <div style= {{marginTop:20}} >
      <Route  exact path='/' component ={Login} />
   </div>
   </div>
   </Router>
  );
}

export default App;
