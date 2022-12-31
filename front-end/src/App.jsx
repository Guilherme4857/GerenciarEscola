import './App.css';
import image from './images/escola.jpg'
import Home from './pages/home/Home'
import Alunos  from './pages/alunos/Alunos'
import Cursos from './pages/cursos/Cursos'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home image={image}/>}/>
        <Route path='/alunos' element={<Alunos/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
      </Routes>
    </>
  );
}
