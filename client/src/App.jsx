import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sendemail from './components/Sendemail';
import Addvolunteer from './components/Addvolunteer';
import Allvolunteers from './components/Allvolunteers';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sendemail/>} />
          <Route path='/addvolunteer' element={<Addvolunteer/>} />
          <Route path='/allvolunteers' element={<Allvolunteers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


