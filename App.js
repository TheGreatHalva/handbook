import * as React from 'react';
import { Button, View, Text, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', }}> 
      {/*margin: '1' */} 
      {/*<h2>Выберите категорию</h2>*/}
      <Button
        title="Основы информатики"
        color="#9086FF"
        onPress={() => navigation.navigate('ICTObjects')}
      />
      <Button
        color="#D794FF"
        title="Go to Licenses"
        onPress={() => {
          ToastAndroid.show(
            "ALL YOUR BASE ARE BELONG TO US",
            ToastAndroid.SHORT
          );
        }}
      />
    </View>
  );
}

function ICTObjects() {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
      <Text style={{
        fontSize:18
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis vel lacus viverra volutpat eget id lacus. In finibus tincidunt dolor, id commodo nunc efficitur accumsan. Proin efficitur lectus diam, quis cursus odio euismod id. Praesent sem nibh, pharetra vel pulvinar finibus, ultrices eget justo. Nulla lobortis suscipit felis, ac pharetra diam egestas nec. Proin vulputate vitae dolor vel accumsan. Pellentesque et lectus nec sem tempor semper eu ut mauris. Fusce eu volutpat velit, vitae fringilla quam. Nam tincidunt pulvinar interdum. Phasellus vitae volutpat urna. Cras sit amet consectetur augue. Nullam malesuada odio sem, eu ornare orci tristique nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </Text>
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
        <Stack.Screen 
        name="ICTObjects" 
        component={ICTObjects} 
        options = {{
            title:"Основы информатики"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;