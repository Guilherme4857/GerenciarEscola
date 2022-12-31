import { useState, useEffect } from "react"

export default function CursoForm(
    { addCurso, salvar, cancelarCurso, cursoSelecionado, handleClose,   cursoInicial }
  ) 
{
	const [cursoAtual, setCursoAtual] =
		useState({...cursoInicial})

	useEffect(() => 
		{
			setCursoAtual({
				...cursoSelecionado
			})
		}, [cursoSelecionado]
	)

	const inputTextHandler = (e) => {
		const {name, value} = e.target
		setCursoAtual(
			{...cursoAtual, [name]: value}
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(cursoAtual.id === 0)
			addCurso(cursoAtual)
		else{
			salvar(cursoAtual)
		}
	}

	const handleCancelar = () => {
		cancelarCurso()
		setCursoAtual({...cursoInicial})
	}
   
	return (
		<>
	
      <form 
        className="row g-3" 
        onSubmit={handleSubmit}
      >
        <div className="col-md-6 mb-3">
          <label 
            className="form-label" htmlFor="titulo"
          >
            Nome:
          </label>
          <input 
            name="nome"
            onChange={inputTextHandler}
            value={cursoAtual.titulo}
            id= "nome" 
            className="form-control" 
            type="text" placeholder="nome"
          />
        </div>
        <div className="col-12 mt-0">
        {
          cursoAtual.id === 0 ? (
            <button 
              className=
                "btn btn-outline-success"
                onClick={handleClose}
            >
              <i className="fa fa-plus me-1"></i>
              Salvar
            </button>
          )
          :
          (				
          <>	
            <button className= "btn btn-outline-success me-2">
              <i className="fas fa-check me-1"></i>
              Salvar
            </button>
            <button 
              className=
                "btn btn-outline-danger"
              type="button"
              onClick={handleCancelar}
            >
              <i className="fas fa-xmark me-1"></i>
              Cancelar
            </button>
          </>
          )
        }
        </div>
      </form>
		</>
  )
}
