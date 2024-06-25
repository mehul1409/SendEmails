import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sendemail from './components/Sendemail';
import Addvolunteer from './components/Addvolunteer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sendemail/>} />
          <Route path='/addvolunteer' element={<Addvolunteer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


