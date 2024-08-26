import styled from 'styled-components'

const TableCell = styled.th`
  display: table-cell;
  text-align: ${props => props.$textAlign || "left"};
  padding: 8px;
  ${props => props.$sx};
`
export default TableCell