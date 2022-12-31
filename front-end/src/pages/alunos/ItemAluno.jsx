
export default function ItemAluno(
    { aluno, getAluno, handleDeleteButton }
) {
  return (
    <div 
      className={`card card-body border-success shadow-sm mb-2`} 
    >
      <div 
        className=
            "d-flex  justify-content-between mb-2"
      >
        <h5 className="card-title">
          <span className=
              "badge bg-secondary me-1"
          >
            {aluno.id}
          </span>

          - {aluno.nome}
        </h5>
      </div>

      <div >
        <h6 className="mb-3">
          Cursos:
        </h6>
        {
          aluno.cursos.map(curso =>
            {
              return(
                <span key={curso.id} className= "me-1 text-success border p-1">
                  {curso.nome}
                </span>
              )
            }
          )
        }
      </div>

      <div className=
              "d-flex justify-content-end"
      >
        <button className=
                "btn btn-sm btn-outline-primary me-2"
            onClick={() => getAluno(aluno.id)}
        >
            <i className="fa fa-pen" />

            Editar

        </button>

        <button 
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDeleteButton(aluno.id)}
        >
            <i className="fa fa-trash"/>
            Deletar
        </button>
      </div>
    </div>
  )
}
