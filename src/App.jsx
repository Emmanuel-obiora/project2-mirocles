import React from 'react';
import Main from './Components/Main/Main';
import './styles.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Popular from './Components/Popular';
import FormMain from './Components/Form/FormMain';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/project2-mirocles' element={<Main />} />
          <Route path='/project2-mirocles/main' element={<Main />} />
          <Route path='/project2-mirocles/form' element={<FormMain />} />
          <Route path='/project2-mirocles/popular' element={<Popular />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App