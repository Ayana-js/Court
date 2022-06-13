import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import MainContainer from './Main';
import ContentContainer from './Content';

function App() {
  return (
    <div className='App'>
      <Router>            
        <Routes>
        <Route path='/debtp' element={<MainContainer/>}/>
        <Route path='/debtp/content' element={<ContentContainer/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
