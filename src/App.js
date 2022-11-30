import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {SubPage} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sub/:id' element={<SubPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App