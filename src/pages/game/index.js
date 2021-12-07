import React, { useCallback, useState, useEffect } from 'react'

import { Board, Container, ModalVictory, VictoryText } from './styles'

import Square from '../../components/square'

const winSequences = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Game = () => {
  const [boardArray, setBoardArray] = useState(new Array(9).fill(null))
  const [turn, setTurn] = useState('x') // 'x' or 'circle'
  const [squaresLeft, setSquaresLeft] = useState(9)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [champion, setChampion] = useState(null)

  const handleChangeTurn = useCallback(() => {
    setTurn(currentTurn => currentTurn === 'x' ? 'circle' : 'x')
  }, [])

  const handleOnClickSquare = useCallback((index) => {
    const boardArrayCopy = [...boardArray.slice(0, index), turn, ...boardArray.slice(index + 1, boardArray.length)]
    setBoardArray(boardArrayCopy)
    setSquaresLeft(squaresLeft - 1)

    for (let x = 0, stop = false ; x < winSequences.length && !stop ; x++) {
      if (boardArrayCopy[winSequences[x][0]] && boardArrayCopy[winSequences[x][0]] === boardArrayCopy[winSequences[x][1]] && boardArrayCopy[winSequences[x][1]] === boardArrayCopy[winSequences[x][2]]) {
        stop = true
        setIsGameFinished(true)
        setChampion(turn)
      }
    }
  }, [turn, squaresLeft, boardArray])

  useEffect(() => {
    if (squaresLeft === 0 && !isGameFinished) {
      setIsGameFinished(true)
    }
  }, [squaresLeft, isGameFinished])

  return (
    <Container>
      <Board>
        {boardArray.map((elem, index) => (
          <Square
            squarePosition={index}
            turn={turn}
            handleOnClickSquare={() => handleOnClickSquare(index)}
            handleChangeTurn={handleChangeTurn}
          />
        ))}
      </Board>

      {isGameFinished &&
        (champion
          ? <ModalVictory>
              <VictoryText>WINS</VictoryText>
              <VictoryText>{champion}</VictoryText>
            </ModalVictory>
          : <ModalVictory>
              <VictoryText>DRAW</VictoryText>
            </ModalVictory>
        )
      }
    </Container>
  )
}

export default Game