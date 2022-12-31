
import ItemAluno from './ItemAluno';
export default function ListaAlunos(
    { alunos, getAluno, handleDeleteButton }
) {
  return (
    <div className="mt-3">
      {alunos.map(aluno => (
        <ItemAluno
          key= {aluno.id} 
          aluno= {aluno}
          getAluno= {getAluno}
          handleDeleteButton= {handleDeleteButton}
        /> 
      ))}
    </div>
  )
}
