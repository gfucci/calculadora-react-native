import Button from "@/components/Button";
import { useState } from "react";
import { Dimensions, StyleSheet, Switch, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index() {
  const [theme, setTheme] = useState('light');

  return (
    <SafeAreaView style={estilos.container}>
      <Switch
        value={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <View style={estilos.calculatorContainer}>
        <View style={estilos.containerOperations}>
          <Button>C</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button>/</Button>
        </View>
        <View style={estilos.containerOperations}>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>x</Button>
        </View>
        <View style={estilos.containerOperations}>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </View>
        <View style={estilos.containerOperations}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </View>
        <View style={estilos.containerOperations}>
          <Button>,</Button>
          <Button>0</Button>
          <Button>@</Button>
          <Button>=</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#F1F2F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerOperations: {
    flexDirection: "row",
    paddingVertical: 8
  },
  calculatorContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    padding: 18,
  }
})