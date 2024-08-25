import styled from 'styled-components'

const TableCell = styled.th`
  display: table-cell;
  text-align: ${props => props.$textAlign || "left"};
  padding: 8px;
  border-bottom: 1px solid rgb(81, 81, 81);
  ${props => props.$sx};
`
export default TableCell