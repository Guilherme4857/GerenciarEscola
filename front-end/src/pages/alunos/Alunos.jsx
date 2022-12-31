import { useState, useEffect } from "react"
import { Button, Modal } from "react-bootstrap"
import TitlePage from "../../components/TitlePage"
import AlunoForm from "./AlunoForm"
import ListaAlunos from "./ListaAlunos"
import api from '../../api/escola'

var alunoInicial = {
  "id": 0, 
  "nome": "", 
  "cursos": []
}

export default function Alunos() {
  const [alunos, setAlunos] = useState([])
  const cursos = [{'id': 1, 'nome': 'Eletrônica'}, {'id': 2, 'nome': 'Administração'}]
  const [alunoSelecionado, setAlunoSelecionado] = useState({...alunoInicial})
  const [showModalAtiv, setShow] = useState(false)
  const [ showModalConfim, setShowModalConfim ] = useState(false)

  const interruptorModalConfirm = () => setShowModalConfim(!showModalConfim)

  const interruptorModalAluno = () => {
    setShow(!showModalAtiv)
  }

  const pegarAlunos = async () => {
    const response = await api
        .get("alunos")
    return response.data.$values
  }

  // const persistirAtividade = async ativ => {
  //   const response = await api
  //       .post("atividade", ativ)
  //   return response.data
  // }

  useEffect(() => {
    const alunos = 
      async () =>{
          var todasAtivs = await   
              pegarAlunos()
          if(todasAtivs)
              setAlunos(todasAtivs)
      }
    alunos()
  }, [])

  const addAluno = async aluno => {
    interruptorModalAluno()
    if(aluno !== null)
        setAlunos(
            [...alunos,{...aluno, 'id': alunos.length + 1}]
        )
  }
  // const addAluno = async aluno => {
  //   interruptorModalAluno()
  //   aluno = await persistirAtividade(aluno)
  //   if(aluno !== null)
  //       setAlunos(
  //           [...alunos,{...aluno}]
  //       )
  // }

  // const handleDeleteButton = id => {
  //   interruptorModalConfirm()
  //   setAlunoSelecionado(
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
  //       setAlunos(response.data.$values)
  // }

  const getAluno = id => {
    interruptorModalAluno()
    setAlunoSelecionado(
      alunos.filter(
          aluno => 
          aluno.id == id
      )[0]
    )
  }
 
  const salvar = async alunoAtual => {
    interruptorModalAluno()
    if(alunoAtual !== null)
        setAlunos(alunos.map(
                _ =>_.id === alunoAtual.id ? alunoAtual : _
            )
        )
    setAlunoSelecionado({...alunoInicial})
  }
  // const salvar = async alunoAtual => {
  //   interruptorModalAluno()
  //   const response = await api.put("atividade", alunoAtual)
  //   if(response.data !== null)
  //       setAlunos(alunos.map(
  //               _ =>_.id === response.data.id ? response.data : _
  //           )
  //       )
  //   setAlunoSelecionado({...alunoInicial})
  // }

  const cancelarAluno = () => {
    interruptorModalAluno()
    setAlunoSelecionado({...alunoInicial})
  }            

  const handleNaoDeletar = () => {
    interruptorModalConfirm()
    setAlunoSelecionado(alunoInicial)
  }

  return (
  <>
    <TitlePage
      nomeDaPagina={'Alunos'}
      itemInicial = {alunoInicial}
      setItemSelecionado = {setAlunoSelecionado}
      interruptorModalItem = {interruptorModalAluno}
    />
    <Modal show={showModalAtiv} onHide={interruptorModalAluno}>
      <Modal.Header>
        <Modal.Title>
          <h1>
            {
              alunoSelecionado.id !== 0 ?
              `Aluno ${alunoSelecionado.nome}`
              : "Cadastrar Aluno"
            }
          </h1>                    
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AlunoForm 
          addAluno= { addAluno }
          salvar= { salvar }
          cancelarAluno= {cancelarAluno}
          alunoSelecionado= {alunoSelecionado}
          alunoInicial= {alunoInicial}
          cursos= {cursos}
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
                onClick={() => handleDelete(alunoSelecionado.id)}
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
    <ListaAlunos
        alunos= {alunos}
        getAluno= { getAluno }
        handleDeleteButton= {'handleDeleteButton'}
    />
  </>  
  );
}
