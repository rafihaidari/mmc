// import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import MainList from './List';
import AddNewConfig from './AddNewConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "bootstrap-icons/font/bootstrap-icons.css";
// require ('bootstrap-icons')

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="container mt-5">
        <AddNewConfig />
        <MainList />
      </div>
    </div>
  );
}

export default App;
