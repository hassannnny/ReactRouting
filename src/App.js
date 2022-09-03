import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Profile from './Components/Profile';
import Orders from './Components/Orders';
import Cart from './Components/Cart';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/profile' element = {<Profile />}></Route>
      <Route path='/cart' element = {<Cart />}></Route>
      <Route path='/orders' element = {<Orders />}></Route>

    </Routes>
  );
}

export default App;
