import './App.css'
import One from './inc/One';
import Test from './inc/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={One} />
          <Route path='/test' Component={Test} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
