// App.js
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact-me' element={<ContactMe />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
