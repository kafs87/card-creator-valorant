import Player from '../Player'
import './Ranks.css'

const Ranks = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const border = { borderColor: props.corPrimaria }

    return (
       (props.players.length > 0) ? <section className='ranks' style={css}>
        <h3 style={border}>{props.elos}</h3>
        <div className='players'>
            {props.players.map( player => 
            <Player
            corDeFundo={props.corPrimaria}
            key={player.nickname} 
            nickname={player.nickname} 
            funcao={player.funcao} 
            imagem={player.imagem}
            />)}
        </div>
       </section> 
       : ''
    )
}

export default Ranks