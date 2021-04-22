import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    useFonts,
    PTSerif_400Regular
} from "@expo-google-fonts/pt-serif";
import * as Linking from "expo-linking";

const strings = require('./assets/strings/ru.json');

let styles = StyleSheet.create({
    homeView: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start' },
    article: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingHorizontal: 5
    },
    textDefault: {
        fontFamily: 'PTSerif_400Regular',
        fontSize: 14
    },
    formulae: {
        fontFamily: 'PTSerif_400Regular',
        fontSize: 16,
        fontStyle: 'italic'
    }
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeView}>
      {/*margin: '1' */}
      {/*<h2>Выберите категорию</h2>*/}
      <View>
          <Button
              title={strings.ICTObjects.title}
              color={strings.color}
              onPress={() => navigation.navigate('ICTObjects')}
          />
          <Button
              title={strings.CountingInf.title}
              color={strings.color}
              onPress={() => navigation.navigate('CountingInf')}
          />
      </View>
      <View>
          <Button
              title={strings.NumBases.title}
              color={strings.color}
              onPress={() => navigation.navigate('NumBases')}
          />
      </View>
      <View>
          <Button
              title={"Среда программирования PascalABC.NET"}
              color={strings.color}
          />
      </View>
      <View>
          <Button
              title={"Пакет офисных приложений OpenOffice.org"}
              color={strings.color}
          />
      </View>
      <View>
          <Button
              title={"Язык разметки HTML. Создание сайтов"}
              color={strings.color}
          />
      </View>
      <View>
        <Button
              title={strings.Licenses.title}
              color={strings.color}
              onPress={() => navigation.navigate('Licenses')}
        />
      </View>
      <View>
          <Button
              title={"Исходный код приложения"}
              color={"#2d333b"}
              onPress={() => Linking.openURL('https://github.com/thegreathalva/handbook')}
          />
      </View>
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
        <Text style={styles.textDefault}>
            Информатика - наука о методах и процессах сбора, хранения, обработки, передачи, анализа и оценки информации с применением компьютерных технологий, обеспечивающих возможность её использования для принятия решений.

            Объектами изучения в информатике являются информация, информационный процесс, алгоритм, исполнитель, компьютер, включая его аппаратное и программное обеспечение, и т. д.

            Информатика как наука существует долгое время (к её достижениям, например, можно отнести счетную машину Пьеза Паскаля). Однако же, строго изучение теории информации существует благодаря Клоду Шеннону и его научным работам, которые и задали принципы изучения информации.
        </Text>
      </View>
    </View>
  );
}

function Licenses() {
  return  (
  <View style={styles.article}>
    <Text style={styles.textDefault}>
        Это свободная программа: вы можете перераспространять ее и/или изменять ее на условиях Стандартной общественной лицензии GNU в том виде, в каком она была опубликована Фондом свободного программного обеспечения; либо версии 3 лицензии, либо (по вашему выбору) любой более поздней версии.
        Эта программа распространяется в надежде, что она будет полезной, но БЕЗО ВСЯКИХ ГАРАНТИЙ; даже без неявной гарантии ТОВАРНОГО ВИДА или ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ. Подробнее см. в Стандартной общественной лицензии GNU. Вы должны были получить копию Стандартной общественной лицензии GNU вместе с этой программой. Если это не так, см. https://www.gnu.org/licenses/
    </Text>
  </View>
  );
}

function CountingInf() {
  return  (
  <View style={styles.article}>
      <View>
          <Text style={styles.textDefault}>
          Существует 2 подхода к измерению информации: алфавитный и содержательный. Оба подхода использует одни и те же принципы измерения информации, но применяются в разных ситуациях.
          </Text>
      </View>

      <View>
          <Text style={styles.textDefault}>
          Количество информации в алфавитном подходе вычисляется по формуле Хартли:{'\n'}
          <Text style={styles.formulae}>
          I = log(2,N)
          </Text>
          {'\n'}При этом, в алфавитном подходе N - мощность алфавита в бит/символ, K - количество символов в тексте в символах, а I - информационный объем в битах (т.е. количество информации в тексте). Таким образом, алфавитный подход используется, когда требуется вычислить количество информации в тексте.
          </Text>
      </View>

      <View>
          <Text style={styles.textDefault}>
          В содержательном подходе, количество информации тоже вычисляется по формуле Хартли, но в другом виде:{'\n'}
          <Text style={styles.formulae}>
          i=log(2,N)
          </Text>
          {'\n'}При этом, N - количество равновероятных событий, а i - количество информации о происхождении данного события.
          </Text>
      </View>
  </View>
  );
}

function NumBases() {
  return  (
  <View style={styles.article}>
      <Text style={styles.textDefault}>
          <Text style={{
              fontStyle: 'italic'
          }}>Система счисления </Text> - символический метод записи чисел, представление чисел с помощью письменных знаков. {'\n'}
          Самыми частоиспользуемыми являются позиционные системы счисления. В них значение знака зависит от его положения в числе. Так, "1" в крайнем правом разряде = 1, а во втором разряде справа "1"=10. {'\n'}
          Из одной системы счисления можно легко перейти в другую. Так, например, из n-иричной в 10-чную можно перейти, используя схему Горнера. Так, {'\n'}<Text style={styles.formulae}>(111001)2 = (2^5+2^4+2^3+2)10 = (32+16+8+2)10 = (58)10</Text>
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
            title:strings.ICTObjects.title
        }}
        />
        <Stack.Screen
        name="Licenses"
        component={Licenses}
        options = {{
          title:strings.Licenses.title
        }}
        />
        <Stack.Screen
        name="CountingInf"
        component={CountingInf}
        options = {{
          title:strings.CountingInf.title
        }}
        />
        <Stack.Screen
        name="NumBases"
        component={NumBases}
        options = {{
          title:strings.NumBases.title
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;