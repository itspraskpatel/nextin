// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }




import React from 'react';
import { LoginScreen } from '../src/screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VerifyOTPScreen } from '../src/screens/verifyOTP';
import { HomeScreen } from '../src/screens/HomeScreen';
import  LanguageSelection from '../src/screens/LanguageSelection'
const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Lang" component={LanguageSelection} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Verify" component={VerifyOTPScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
export default App;

