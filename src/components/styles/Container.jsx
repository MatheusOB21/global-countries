import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 10px;
  justify-content: ${props => props.$justifyContent || "left"};
  gap: ${props => props.$gap || "0px"};
`