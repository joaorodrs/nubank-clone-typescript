import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Main from './pages/Main'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Main" component={Main} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}


export default Routes