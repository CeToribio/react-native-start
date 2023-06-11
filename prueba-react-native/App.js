import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';


export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
      <Text>Hola Funciono!</Text>
      <StatusBar style="auto" />
      <LoginForm></LoginForm>
      <Saludar name="Ana"></Saludar>
    </View> */}
    {/* <NavigationStack></NavigationStack> */}
    {/* <NavigationTab></NavigationTab> */}
    <NavigationDrawer></NavigationDrawer>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
