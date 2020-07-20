import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Main from './pages/Main'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Main" component={Main} />
    </AppStack.Navigator>
  )
}


export default Routes