import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Translator from './components/translator';
import About from './components/about';
import Home from './components/home';
import LTable from './components/ltable';

let App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="translator" element={<Translator />} />
      <Route path="about" element={<About />} />
      <Route path="table" element={<LTable />} />
    </Routes>
  </>
  )
}

export default App;
