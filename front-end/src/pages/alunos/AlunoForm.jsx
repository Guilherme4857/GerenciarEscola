import { useState, useEffect } from "react"

export default function AlunoForm(
  { addAluno, salvar, cancelarAluno, alunoSelecionado, alunoInicial, cursos }) {
	const [alunoAtual, setAlunoAtual] =
		useState({...alunoInicial})

	useEffect(() => 
		{
			setAlunoAtual({
				...alunoSelecionado
			})
		}, [alunoSelecionado]
	)

	const inputTextHandler = (e) => {
		const {name, value} = e.target
		setAlunoAtual(
			{...alunoAtual, [name]: value}
		)
	}

  const inputCheckHandler = (e) => {
    const {value, name, checked } = e.target

    if(checked)
    {
      if(alunoAtual.cursos.filter(_ => _.id == value).length == 0)
      {
        const curso = {...cursos.filter(_ => _.id == value)[0]}
        setAlunoAtual(
          {...alunoAtual, [name]: [...alunoAtual.cursos, {...curso}]}
        )
      }
    }
    else
    {
      setAlunoAtual(
        {...alunoAtual, [name]: [...alunoAtual.cursos.filter(_ => _.id != value)]}
      )
    }     
  }

	const handleSubmit = (e) => {
		e.preventDefault()
		if(alunoAtual.id === 0)
			addAluno(alunoAtual)
		else{
			salvar(alunoAtual)
		}
	}

	const handleCancelar = () => {
		cancelarAluno()
		setAlunoAtual({...alunoInicial})
	}

	return (
		<>
	
      <form 
        className="row g-3" 
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label 
            className="form-label" htmlFor="titulo"
          >
            Nome:
          </label>
          <input 
            name="nome"
            onChange={inputTextHandler}
            value={alunoAtual.nome}
            id= "nome" 
            className="form-control" 
            type="text" placeholder="nome"
          />
        </div>
        <label 
            htmlFor="cursos" className="form-label"
        >
            Cursos:
        </label>          
        
        <div className="container-fluid border bg-light mb-3 add-scroll">
        {
          cursos.map(curso => {
            return(
              alunoAtual.cursos.filter(_ => _.id == curso.id).length == 0 ?
                <div key={curso.id} className="form-check">
                  <input 
                    name='cursos'
                    className="form-check-input" 
                    onChange={inputCheckHandler}
                    type="checkbox" 
                    value={curso.id} 
                    id={curso.id}
                    />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {curso.nome}
                  </label>
                </div>
              :
              <div key={curso.id} className="form-check">
                <input 
                  name='cursos'
                  className="form-check-input" 
                  onClick={inputCheckHandler}
                  type="checkbox" 
                  value={curso.id} 
                  id={curso.id}
                  defaultChecked

                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {curso.nome}
                </label>
              </div>
            )            
          })
        }
        </div>

        <div className="col-12 mt-0">
        {
          alunoAtual.id === 0 ? (
            <button 
              className=
                "btn btn-outline-success"
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
