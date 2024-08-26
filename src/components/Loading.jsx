import React from 'react';
import { BatteryCharging  } from './animations/BatteryCharging'
import { Container } from './styles/Container'

export default function Loading({text}) {
  return (
    <Container $justifyContent='center'>
      <BatteryCharging $text={text}/>
    </Container>
  );
}

