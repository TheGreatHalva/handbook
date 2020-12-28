import * as React from 'react';
import { Button, View, Text, ToastAndroid, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const strings = require('./assets/strings/ru.json')

const styles = StyleSheet.create({
  article: {
    paddingHorizontal: 5
  },
})

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', }}> 
      {/*margin: '1' */} 
      {/*<h2>Выберите категорию</h2>*/}
      <Button
        title={strings.ICTObjects.title}
        color={strings.ICTObjects.color}
        onPress={() => navigation.navigate('ICTObjects')}
      />
      <Button
        title={strings.Licenses.title}
        color={strings.Licenses.color}
        onPress={() => {
          navigation.navigate('Licenses')
        }}
      />
    </View>
  );
}

function ICTObjects() {
  return (
    <View style={{ 
    flex: 1, 
    alignItems: 'stretch', 
    justifyContent: 'flex-start' 
    }}>
      <View style={styles.article}>
      <Text style={{fontSize: 18}}>
      {strings.ICTObjects.body}
      </Text>
      </View>
    </View>
  );
}

function Licenses() {
  return  (
  <View style={styles.article}>
    <Text>{strings.Licenses.body}</Text>
  </View>
  )
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
        <Stack.Screen 
        name="ICTObjects" 
        component={ICTObjects} 
        options = {{
            title:strings.ICTObjects.title
        }}
        />
        <Stack.Screen
        name="Licenses"
        component={Licenses}
        options = {{
          title:'Лицензии'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;