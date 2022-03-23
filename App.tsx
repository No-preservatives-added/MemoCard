import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { MenuScreen } from "./src/MenuScreen";
import { ComposeScreen } from "./src/ComposeScreen";
import { BrowsingScreen } from "./src/BrowsingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Compose" component={ComposeScreen} />
          <Stack.Screen name="Browsing" component={BrowsingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
