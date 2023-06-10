
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/contact'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Project1 from './Components/Project/project1/Project1';
import Project2 from './Components/Project/project2/Project2.js';
import Home from './Components/Home/Home';
import './App.css'
import Laanding from './landing/Laanding';
function App() {
  return (
    <BrowserRouter>
    <div className='.App'>
      <Header/>
      {/* <Laanding/> */}
      {/* <Nav/> */}
      <Routes>
      <Route path='/' element={ <Home/>}/>
        <Route path='Projects' element={ <Gallery/>}/>
        <Route path='Building1' element={<Project1/>}/>
        <Route path='Building2' element={<Project2/>}/>
      </Routes>
      <Contact/>
      
      <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
