import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Error from './components/Error/Error'
import About  from './pages/About/about'
import Logement from './pages/Logement/logement'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 

// import  { Browserrouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/index'
// // import About from './pages/About'
// // import Logements from './pages/Logement'
// import Error from './components/Error/Error'
// import Header from './components/Header'
// import './App.scss'
// import logo from './assets/LOGO.png';


// <Router>
//   <Header />
//   <img src={logo} alt='Kasa' />
//   <Routes>
//     <Route path='/' element={<Home />} />
//     <Route path='*' element={<Error />} />
//   </Routes>
// </Router>
// import logo from './logo.svg';
// import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
