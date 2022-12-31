import { useState } from "react"
import { Button } from "react-bootstrap"

export default function TitlePage({itemInicial, setItemSelecionado, interruptorModalItem, nomeDaPagina}) {

    const novoCurso = () => {
        setItemSelecionado(itemInicial)
        interruptorModalItem()
    }

    return (
			<div 
					className="d-flex justify-content-between align-items-end 
					mt-2 pb-3 border-bottom"
			>
					<h1 className='m-0 p-0'>
							{nomeDaPagina}
					</h1>                    
					<Button 
							variant='outline-secondary'
							onClick={novoCurso}
					>
							<i className="fas fa-plus"></i>
					</Button>            
			</div>
    )
}
