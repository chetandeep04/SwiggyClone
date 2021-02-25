import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Header from "./containers/header";
import Restaurants from './components/Restaurants'
import Offers from "./components/offers";
function App() {
  return (
    <>
    <Header></Header>
    <Switch>
    <Route exact path='/' component={Home}></ Route>
    <Route exact path='/offers' component={Offers}></ Route>
    <Route exact path='/help'></ Route>
    <Route exact path='/restaurants/:id' component={Restaurants}></Route>
    </Switch>
    </>
  );
}

export default App;
