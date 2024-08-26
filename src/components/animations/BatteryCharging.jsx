import styled from 'styled-components'

export const BatteryCharging = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background:linear-gradient(90deg,#000 50%,#0000 0) right/200% 100%;
  animation: l21 2s infinite linear;

  &:before {
    content : "${props => props.$text || 'Loading...'}";
    color: #0000;
    padding: 0 5px;
    background: inherit;
    background-image: linear-gradient(90deg,#fff 50%,#000 0);
    -webkit-background-clip:text;
            background-clip:text;
  }

  @keyframes l21{
    100%{background-position: left}
  }
`