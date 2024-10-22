import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
const [nickname, setNickname] = useState('')
const [funcao, setFuncao] = useState('')
const [imagem, setImagem] = useState('')
const [rank, setRank] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoPlayerCadastrado({
        nickname,
        funcao,
        imagem,
        rank
    })
    setNickname('')
    setFuncao('')
    setImagem('')
    setRank('')
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu card.</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nickname e Tagline" 
                placeholder="Exemplo: copito#BR1"
                valor={nickname}
                aoAlterado={valor => setNickname(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Função" 
                placeholder="Sentinela, Duelista"
                valor={funcao}
                aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Imagem do Personagem" 
                placeholder="URL da imagem do seu Personagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                label="Rank" 
                itens={props.ranks}
                valor={rank}
                aoAlterado={valor => setRank(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario