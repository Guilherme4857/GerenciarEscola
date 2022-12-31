export default function ItemCurso(
    { curso, getCurso, handleDeleteButton }
) 
{
  return (
    <div 
      className={`card card-body border-success shadow-sm mb-2`} 
    >
      <div 
        className=
            "d-flex  justify-content-between"
      >
        <h5 className="card-title">
          <span className=
              "badge bg-secondary me-1"
          >
            {curso.id}
          </span>

          - {curso.nome}
        </h5>

      </div>

      <div className=
              "d-flex justify-content-end"
      >
        <button className=
                "btn btn-sm btn-outline-primary me-2"
            onClick={() => getCurso(curso.id)}
        >
            <i className="fa fa-pen" />

            Editar

        </button>

        <button 
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDeleteButton(curso.id)}
        >
            <i className="fa fa-trash"/>
            Deletar
        </button>
      </div>
    </div>
  )
}
