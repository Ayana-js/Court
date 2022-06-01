import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Main from './Main';
import Content from './Content';

function App() {
  return (
    <div className='App'>
      <Router>            
        <Routes>
        <Route path='/check-debt' element={<Main/>}/>
        <Route path='/check-debt/content' element={<Content/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
