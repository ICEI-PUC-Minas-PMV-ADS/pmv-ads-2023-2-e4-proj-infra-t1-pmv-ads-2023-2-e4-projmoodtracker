import { Routes, Route } from 'react-router-dom';

import { CreateNote } from '../pages/CreateNote';
import { Home } from '../pages/Home';


export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CreateNote" element={<CreateNote />} /> 
      
    </Routes>
  )
}