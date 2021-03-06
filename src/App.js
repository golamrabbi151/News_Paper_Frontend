import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomeIndex from './pages/home/index'
import SingleIndex from './pages/single/index'
import Login from './pages/auth/Login';

import FourOFour from './pages/fourofour/fourOfour'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={HomeIndex} />
         <Route exact path="/post/:id" component={SingleIndex} />
         <Route  exact path="/login" component={Login} />
         <Route path="*" component={FourOFour} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
