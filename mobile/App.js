import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from './screens/OnboardingScreen';
import Chatrooms from './screens/Chatrooms';
import Messages from './screens/Messages';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}>

        <Stack.Screen
          name="Chatrooms"
          component={Chatrooms}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
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
