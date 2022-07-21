import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home';
import LandingPage from './Components/LandingPage'
import CreateActivity from './Components/CreateActivity';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route exact path='/CreateActivity'>
        <CreateActivity/>
      </Route>
      <Route exact path='/country/:id'>
          <Details/>
        </Route>
    </div>
  );
}

export default App;
