import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  TabsContainer,
  TabItem,
  TabText
} from './styles'

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <MaterialIcons name="person-add" size={24} color="white" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="chat-bubble-outline" size={24} color="white" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="arrow-downward" size={24} color="white" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="arrow-upward" size={24} color="white" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="lock" size={24} color="white" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}

export default Tabs