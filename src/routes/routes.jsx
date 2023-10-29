
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "../pages/Home";
import ProtectedRoutes from './ProtectedRoutes';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { CreateNote } from '../pages/CreateNote';
import { ChangePass } from '../pages/ChangePass';
import { EditNote } from '../pages/EditNote';



export default function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={!!localStorage.getItem("token") && localStorage.getItem("token") != undefined ? <Home /> : <SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/ChangePass" element={<ChangePass />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
        />
        <Route path="/CreateNote" element={
          <ProtectedRoutes>
            <CreateNote />
          </ProtectedRoutes>
        }
        />
        <Route path="/EditNote" element={
          <ProtectedRoutes>
            <EditNote />
          </ProtectedRoutes>
        }
        />
      </Routes>
    </Router>
  )
}