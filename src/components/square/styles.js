import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 220px;
  height: 220px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  ${props => 
    props.squarePosition === 0 &&
    css`
      border-bottom: 2px solid #000;
      border-right: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 1 &&
    css`
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      border-right: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 2 &&
    css`
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 3 &&
    css`
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      border-bottom: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 4 &&
    css`
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 5 &&
    css`
      border-top: 2px solid #000;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 6 &&
    css`
      border-top: 2px solid #000;
      border-right: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 7 &&
    css`
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      border-left: 2px solid #000;
    `
  }

  ${props => 
    props.squarePosition === 8 &&
    css`
      border-top: 2px solid #000;
      border-left: 2px solid #000;
    `
  }
`