import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className='home-container'>
          <Home />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
