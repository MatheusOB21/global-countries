import styled from 'styled-components'

export const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) ${({boxShadow}) => 
    (boxShadow === '1' && '1px 1px 1px 1px') ||
    (boxShadow === '2' && '3px 3px 3px 3px') || 
    (boxShadow === '3' && '5px 5px 5px 5px') || 
    (boxShadow === '4' && '8px 8px 8px 8px') || 
    '1px 1px 1px 1px'
  };
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  width: 100%;
  heigth: 100%;
`