import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #415160;

  display : flex;
  align-items: center;
  justify-content: center;
`

export const Board = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
`

export const ModalVictory = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);

  display : flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const VictoryText = styled.h1`
  font-size: 72px;
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`