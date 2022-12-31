import ItemCurso from "./ItemCurso"

export default function ListaCursos(
    { cursos, getCurso, handleDeleteButton }
) 
{
  return (
    <div className="mt-3">
      {cursos.map(curso => (
        <ItemCurso
          key= {curso.id} 
          curso= {curso}
          getCurso= {getCurso}
          handleDeleteButton= {handleDeleteButton}
        /> 
      ))}
    </div>
  )
}
