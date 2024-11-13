import Keyboard from "@/components/Keyboard";
import { ThemeContext } from "@/context/ThemeContext";
import { myColors } from "@/styles/colors";
import { useState } from "react";
import { Dimensions, StyleSheet, Switch, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? estilos.container : estilos.containerBlack} >
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <View style={estilos.calculatorContainer}>
          <Keyboard />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerBlack: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: myColors.black,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  calculatorContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    padding: 18,
  }
})