import { useState, useEffect } from "react"
import { Button, Modal } from "react-bootstrap"
import TitlePage from "../../components/TitlePage"
import CursoForm from "./CursoForm"
import ListaCursos from "./ListaCursos"

var cursoInicial = {
  "id": 0, 
  "nome": "", 
}

export default function Cursos() {
  const [cursos, setCursos] = useState([])
  const [cursoSelecionado, setCursoSelecionado] = useState({...cursoInicial})
  const [showModalAtiv, setShow] = useState(false)
  const [ showModalConfim, setShowModalConfim ] = useState(false)

  const interruptorModalConfirm = () => setShowModalConfim(!showModalConfim)

  const interruptorModalCurso = () => setShow(!showModalAtiv)

  // const pegarCursos = async () => {
  //   const response = await api
  //       .get("atividade")
  //   return response.data.$values
  // }

  // const persistirAtividade = async ativ => {
  //   const response = await api
  //       .post("atividade", ativ)
  //   return response.data
  // }

  // useEffect(() => {
  //   const pegarCursos = 
  //     async () =>{
  //       var todasAtivs = await   
  //           pegarCursos()
  //       if(todasAtivs)
  //           setCursos(todasAtivs)
  //     }
  //   pegarCursos()
  // }, [])

  const handleClose = () => {
    interruptorModalCurso()
  }

  const addCurso = async curso => {
    interruptorModalCurso()
    if(curso !== null)
        setCursos(
            [...cursos,{...curso, 'id': cursos.length + 1}]
        )
  }

  // const addCurso = async curso => {
  //   interruptorModalCurso()
  //   curso = await persistirAtividade(curso)
  //   if(curso !== null)
  //       setCursos(
  //           [...cursos,{...curso}]
  //       )
  // }

  // const handleDeleteButton = id => {
  //   interruptorModalConfirm()
  //   setCursoSelecionado(
  //       cursos.filter(
  //           atividade => 
  //           atividade.id === id
  //       )[0]
  //   )

  // }

  // const handleDelete = (id) => {
  //   delAtividade(id)
  //   interruptorModalConfirm()
  // }

  // const delAtividade = async id => {
  //   const response = await api.delete(
  //       `atividade/${id}`
  //   )
  //   if(response.data.$values !== null)
  //       setCursos(response.data.$values)
  // }

  const getCurso = id => {
    interruptorModalCurso()
    setCursoSelecionado(
      cursos.filter(
        curso => 
        curso.id === id
      )[0]
    )
  }

  const salvar = async cursoAtual => {
    interruptorModalCurso()
    if(cursoAtual !== null)
        setCursos(cursos.map(
                _ =>_.id === cursoAtual.id ? cursoAtual : _
            )
        )
    setCursoSelecionado({...cursoInicial})
  }
  // const salvar = async cursoAtual => {
  //   interruptorModalCurso()
  //   const response = await api.put("atividade", cursoAtual)
  //   if(response.data !== null)
  //       setCursos(cursos.map(
  //               _ =>_.id === response.data.id ? response.data : _
  //           )
  //       )
  //   setCursoSelecionado({...cursoInicial})
  // }

  const cancelarCurso = () => {
    interruptorModalCurso()
    setCursoSelecionado({...cursoInicial})
  }            

  const handleNaoDeletar = () => {
    interruptorModalConfirm()
    setCursoSelecionado(cursoInicial)
  }

  return (
    <>
      <TitlePage
        nomeDaPagina={'Cursos'}
        itemInicial = {cursoInicial}
        setItemSelecionado = {setCursoSelecionado}
        interruptorModalItem = {interruptorModalCurso}
      />
      <Modal show={showModalAtiv} onHide={interruptorModalCurso}>
        <Modal.Header>
          <Modal.Title>
            <h1>
              {
                cursoSelecionado.id !== 0 ?
                `Curso ${cursoSelecionado.nome}`
                : "Cadastrar Curso"
              }
            </h1>                    
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CursoForm 
            addCurso= {addCurso}
            salvar= { salvar }
            cancelarCurso= {cancelarCurso}
            handleClose= {handleClose}
            cursoSelecionado= {cursoSelecionado}
            cursoInicial= {cursoInicial}
          />
        </Modal.Body>
      </Modal>
      {/* <Modal show= {showModalConfim}>
          <Modal.Header>
              <Modal.Title>
                  <h1>Deseja deletar?</h1>
              </Modal.Title>
          </Modal.Header>
          <Modal.Footer className='d-flex justify-content-between'>
              <Button 
                  variant='success'
                  onClick={() => handleDelete(cursoSelecionado.id)}
              >
                  <i className="fas fa-check me-1"></i>
                  Sim
              </Button> 
              <Button 
                  variant='danger' 
                  onClick={handleNaoDeletar}
              >
                  <i className="fas fa-xmark me-1"></i>
                  Não
              </Button>
          </Modal.Footer>
      </Modal> */}
      <ListaCursos
          cursos= {cursos}
          getCurso= {getCurso}
          handleDeleteButton= {'handleDeleteButton'}
      />
    </>  
  );
}
