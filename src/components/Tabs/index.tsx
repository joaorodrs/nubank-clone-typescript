import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Animated } from 'react-native'

import {
  Container,
  TabsContainer,
  TabItem,
  TabText
} from './styles'

interface Props {
  translateY: Animated.Value
}

const Tabs: React.FC<Props> = ({ translateY }) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
      })
    }}>
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