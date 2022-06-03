import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import MainContainer from './Main';
import ContentContainer from './Content';

function App() {
  return (
    <div className='App'>
      <Router>            
        <Routes>
        <Route path='/check-debt' element={<MainContainer/>}/>
        <Route path='/check-debt/content' element={<ContentContainer/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
