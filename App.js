import { Text, View, TouchableOpacity, Image } from "react-native";
import Duolingo from './components/Duolingo';
import Onboarding_2 from "./components/Onboarding_2";
import Onboarding_3 from "./components/Onboarding_3";
import Onboarding_1 from "./components/Onboarding-1";
import Location from "./components/Location";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Getstarted from "./components/Getstarted";
import LocationPermit from "./components/LocationPermit";
const Stack = createNativeStackNavigator();
import Test from "./components/Test";
const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Duolingo" component={Duolingo} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding-1" component={Onboarding_1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding-2" component={Onboarding_2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding-3" component={Onboarding_3} options={{ headerShown: false }} />
        <Stack.Screen name="Getstarted" component={Getstarted} options={{ headerShown: false }} />
        <Stack.Screen name="LocationPermit" component={LocationPermit} options={{ headerShown: false }} />
        <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;

