
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './components/pages/feed';
import Upload from './components/pages/upload';
import Navbar from './components/common/navbar';
import Error from './components/common/error';
function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/error' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
