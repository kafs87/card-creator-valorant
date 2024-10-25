import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Ranks from './componentes/Ranks';
import Rodape from './componentes/Rodape';

const App = (props) => {

  const ranks = [
    {
        elos: 'Sem rank',
        corPrimaria: '#5c4e4e',
        corSecundaria: '#e4d6d6'
    },
    {
        elos: 'Ferro',
        corPrimaria: '#7f7f7f',
        corSecundaria: '#d3d3d4'
    },
    {
        elos: 'Bronze',
        corPrimaria: '#8b5a28',
        corSecundaria: '#e1c7a4'
    },
    {
        elos: 'Prata',
        corPrimaria: '#b0b0b1',
        corSecundaria: '#f5f5f5'
    },
    {
        elos: 'Ouro',
        corPrimaria: '#b78b33',
        corSecundaria: '#f9ebc7'
    },
    {
        elos: 'Platina',
        corPrimaria: '#008c8c',
        corSecundaria: '#d5e9eb'
    },
    {
        elos: 'Diamante',
        corPrimaria: '#a371e4',
        corSecundaria: '#e6c8ea'
    },
    {
        elos: 'Ascendente',
        corPrimaria: '#42795d',
        corSecundaria: '#c2ece0'
    },
    {
        elos: 'Imortal',
        corPrimaria: '#c54d66',
        corSecundaria: '#f1c7d2'
    },
    {
        elos: 'Radiante',
        corPrimaria: '#a78f52',
        corSecundaria: '#f4ead7'
    }
];
  const [players, setPlayers] = useState([])

  const aoNovoPlayerAdicionado = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className="App">
        <div className='conteudo'>
        <Banner />
        <Formulario 
        ranks={ranks.map(rank => rank.elos)} 
        aoPlayerCadastrado={player => aoNovoPlayerAdicionado(player)}
        />
        {ranks.map(rank => (
        <Ranks 
        key={rank.elos} 
        elos={rank.elos} 
        corPrimaria={rank.corPrimaria} 
        corSecundaria={rank.corSecundaria}
        players={players.filter(player => player.rank === rank.elos)}
        />
        ))}
      </div>
      <Rodape />
    </div>
  );
}

export default App;
