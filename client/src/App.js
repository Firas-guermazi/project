import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/home'
import NavBar from './components/Navbar'
import Footer from './components/footer'
import Contact from './components/clubs/contact'
import Courses from './components/courses/courses'
import Products from './components/products/products'
import Register from './components/register/Register'
import SignIn from './components/register/signin'
import Profile from './components/profile/profile'
import AddCourse from './components/courses/addCourse'


import Offers from './components/offers/offers'


function App() {
  return (
  <div className="App">
  <Router>
    <NavBar />
    <div>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Courses" component={Courses} />
    <Route path="/Offers" component={Offers} />
    <Route path="/Contact" component={Contact} />
    {/* <Route path="/Products" component={Products} /> */}
    <Route path="/Profile" component={Profile} />
    <Route path="/AddCourse" component={AddCourse} />
    <Route path='/register' component={Register}/>
    <Route path='/signin' component={SignIn}/>
    <Route path="/Error"  component={Error} />
    </Switch>
    </div>
  <Footer/>
  </Router>
  </div>
  );
  }
  
  export default App;
  
