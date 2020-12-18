import * as React from 'react';
import { Button, View, Text, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from "expo-constants"

const Separator = () => {
  <View style = {styles.separator} />
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
      {/*<h2>Выберите категорию</h2>*/}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Separator />
      <Button
        title="Go to Licenses"
        onPress={() }
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options = {{
          title:"Выберите категорию"
        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;