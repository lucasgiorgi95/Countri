import './App.css';
import {Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import CreateActivity from './Components/CreateActivity';
import Details from './Components/Details';



function App() {
  return (
    <div className="App">
      
       <Route exact path='/'>
        <LandingPage></LandingPage>
      </Route>
      <Route exact path='/home'>
        <Home></Home>
      </Route>
      <Route exact path='/activity'>
      <CreateActivity></CreateActivity>
      </Route>
      <Route exact path='/country/:id'>
      <Details></Details>
      </Route>
     
      

    </div>
  );
}

export default App;
