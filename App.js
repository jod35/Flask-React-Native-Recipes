import 'react-native-gesture-handler'
import React from 'react'
import {Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import CreateRecipe from './screens/CreateRecipe'
import RecipeDetail from './screens/RecipeDetail'



const stack =createStackNavigator()


const Navigation=()=>{
  return(
    <NavigationContainer>
       <stack.Navigator>
          <stack.Screen name="HomeScreen" component={HomeScreen}/>
          <stack.Screen name="CreateRecipe" component={CreateRecipe}/>
          <stack.Screen name="RecipeDetail" component={RecipeDetail}/>
       </stack.Navigator>
    </NavigationContainer>
  )
}


const App=()=>{
  return (
    <Navigation/>
  )
}

export default App