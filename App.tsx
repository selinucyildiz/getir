import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import RootNavigator from "./src/navigators/RootNavigator";
import { LogBox } from "react-native";
import store from "../getirsin/src/redux/store";
import { Provider } from "react-redux";
import AuthStack from "./src/navigators/RootNavigator";
// import LoginScreen from "./src/screens/LoginScreen/login";
 
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop: '15%',
  },
});
