import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import MainContainer from '../Main/Main';
import ContentContainer from '../Content/Content';
import Modal from '../Preloader/Modal/Modal';

function App() {
  return (
    <div className='App'>
      <Router>            
        <Routes>
        <Route path='/debtp/content' element={<ContentContainer/>}/>
        <Route path='/debtp' element={<MainContainer/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
