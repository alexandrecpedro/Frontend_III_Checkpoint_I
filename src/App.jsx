import { useState } from 'react'
import { Card } from '../src/Card'
import { players } from './database/players'

function App() {
  const [playerName, setPlayerName] = useState('')
  const [position, setPosition] = useState('')
  const [playerPhoto, setPlayerPhoto] = useState('')
  const [formsError, setFormsError] = useState(false)
  const [allPlayers, setAllPlayers] = useState(players)

  function registerPlayer(event) {
    event.preventDefault()

    let newId = allPlayers.length + 1;

    const newRegisteredPlayer = {
      id: newId,
      name: playerName,
      position: position,
      picture: playerPhoto
    }

    if (playerName.trim().length > 2 || position.trim().length > 4) {
      setFormsError(true)
    } else {
      setFormsError(false)

      setAllPlayers([...allPlayers, newRegisteredPlayer])

      setPlayerName('')
      position('')
      playerPhoto('')
    }
  }

  return (
    <main className="component">
      <div className="tittle-wrapper">
        <h1>Seleção Portuguesa Copa 2022</h1>
        <h2>Aqui é você quem manda! <br/>Convoque os jogadores</h2>
        <p>
          Selecione a foto no link{' '}
          <a href="https://lnkd.in/d-v-X-e7">https://lnkd.in/d-v-X-e7</a>
        </p>
      </div>

      <form
        className={formsError ? 'form-error' : ''}
        onSubmit={event => registerPlayer(event)}
      >
        <div>
          <label htmlFor="playerName">Nome: </label>
          <input
            id="playerName"
            type="text"
            value={playerName}
            onChange={event => setPlayerName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="position">Posição: </label>
          <input
            id="position"
            type="text"
            value={position}
            onChange={event => setPosition(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="playerPhoto">Link da Foto: </label>
          <input
            id="playerPhoto"
            type="text"
            value={playerPhoto}
            onChange={event => setPlayerPhoto(event.target.value)}
          />
        </div>

        <button type="submit">Convocar Jogador</button>
      </form>

      {formsError ? <span>O seu formulário contem erros</span> : null}

      <section className="players">
        {allPlayers.map(({ id, name, position, picture }) => {
          return <Card key={id} name={name} position={position} picture={picture} />
        })}
      </section>
    </main>
  )
}

export default App