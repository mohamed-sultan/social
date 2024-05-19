import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Posts,PostDetails} from '@pages'

const HideSplash = () => {

}; 

const Stack = createStackNavigator();


const RenderHomeSTack = () => {
  return (
    <NavigationContainer onReady={HideSplash}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Posts}
          options={{
            headerShadowVisible: false,
            header: () => null,
          }}
        />
        <Stack.Screen
          name="details"
          component={PostDetails}
          options={{
            headerShadowVisible: false,
            header: () => null,
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function MainNavigation() {
  return <RenderHomeSTack />;
}