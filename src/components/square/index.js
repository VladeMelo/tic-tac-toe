import React, { useCallback, useMemo, useState } from 'react'

import {
  Container
} from './styles'

import circle from '../../assets/circle.png'
import x from '../../assets/x.png'

const Square = (props) => {
  const [piece, setPiece] = useState(null)

  const turnMemo = useMemo(() => {
    return props.turn
  }, [props.turn])

  const handleOnClickSquareMemo = useMemo(() => {
    return props.handleOnClickSquare
  }, [props.handleOnClickSquare])

  const handleChangeTurnMemo = useMemo(() => {
    return props.handleChangeTurn
  }, [props.handleChangeTurn])

  const handleClickSquare = useCallback(() => {
    if (!piece) {
      setPiece(turnMemo)

      handleOnClickSquareMemo()

      handleChangeTurnMemo()
    }
  }, [handleChangeTurnMemo, handleOnClickSquareMemo, turnMemo, piece])

  return (
    <Container
      squarePosition={props.squarePosition}
      onClick={handleClickSquare}
    >
      {piece && <img src={piece === 'x' ? x : circle}/>}
    </Container>
  )
}

export default Square