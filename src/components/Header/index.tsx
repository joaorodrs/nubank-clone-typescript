import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  Top,
  Logo,
  Title
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={require('../../assets/Nubank_Logo.png')} />
        <Title>Roziney Alencar de Castro</Title>
      </Top>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="white" />
    </Container>
  )
}

export default Header