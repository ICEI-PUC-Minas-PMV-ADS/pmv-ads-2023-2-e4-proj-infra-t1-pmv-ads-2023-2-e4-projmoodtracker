import React from 'react';
import Routering from './routes'
import { SignIn } from '../pages/SignIn';

function userAuth() {
  return localStorage.getItem("token") != undefined ? true : false
  // return typeof localStorage.getItem("token")
}

const ProtectedRoutes = ({ children }) => {
  const usuarioAutenticado = userAuth();
  console.log('usuarioAutenticado', usuarioAutenticado)
  return usuarioAutenticado ? children : <Routering  />
}

export default ProtectedRoutes;