import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <h1 className='text-center text-success m-3'>Welcome to my Website</h1>
      <div className="container">
        <div className="row">
            <Card />
        </div>
      </div>
    </>
    
  );
}

export default App;
