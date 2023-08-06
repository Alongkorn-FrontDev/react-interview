import React from 'react'
import CardCars from './components/card/CardCars'
import Container from '@mui/material/Container';

type Props = {}

export default function App({}: Props) {
  return (
   <>
    <Container maxWidth="xl">
      <CardCars/>
    </Container>
   </>
  )
}