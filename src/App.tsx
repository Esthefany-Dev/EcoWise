import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Services from './pages/Services';
import Comments from './pages/Comments';
import Results from './pages/Results';
import Noticies from './pages/Noticies'
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function App() {
  return (
   <div>
      <Home/>
      <Services/>
      <Comments/>
      <Results/>
      <Noticies/>
      <Contact/>
      <Footer/>
   </div>
  );  
}