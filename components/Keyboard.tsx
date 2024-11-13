import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import { myColors } from '@/styles/colors';

function Keyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    setFirstNumber(firstNumber + buttonValue);
  }
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }
  const firstNumberDisplay = () => {

  }
  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber))
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber))
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber))
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  }
  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  }

  return (
    <>
      <View style={estilos.calculationsContainer}>
        <View style={estilos.secondScreen}>
          <Text style={estilos.screenSecondNumber}>{ secondNumber }</Text>
          <Text style={estilos.screenOperator}>{ operation }</Text>
        </View>
        <View>
          <Text style={estilos.screenFirstNumber}>{ result !== null ? result.toString() : firstNumber}</Text>
        </View>
      </View>
      <View style={estilos.containerOperations}>
        <Button title="C" isGray onPress={clear}/>
        <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")}/>
        <Button title="%" isGray onPress={() => handleOperationPress("%")}/>
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")}/>
      </View>
      <View style={estilos.containerOperations}>
        <Button title="7" onPress={() => handleNumberPress("7")}/>
        <Button title="8" onPress={() => handleNumberPress("8")}/>
        <Button title="9" onPress={() => handleNumberPress("9")}/>
        <Button title="×" isBlue onPress={() => handleOperationPress("*")}/>
      </View>
      <View style={estilos.containerOperations}>
        <Button title="4" onPress={() => handleNumberPress("4")}/>
        <Button title="5" onPress={() => handleNumberPress("5")}/>
        <Button title="6" onPress={() => handleNumberPress("6")}/>
        <Button title="-" isBlue onPress={() => handleOperationPress("-")}/>
      </View>
      <View style={estilos.containerOperations}>
        <Button title="1" onPress={() => handleNumberPress("1")}/>
        <Button title="2" onPress={() => handleNumberPress("2")}/>
        <Button title="3" onPress={() => handleNumberPress("3")}/>
        <Button title="+" isBlue onPress={() => handleOperationPress("+")}/>
      </View>
      <View style={estilos.containerOperations}>
        <Button title="," onPress={() => handleNumberPress(",")}/>
        <Button title="0" onPress={() => handleNumberPress("0")}/>
        <Button title="⌫" onPress={clear}/>
        <Button title="=" isBlue onPress={getResult} />
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  containerOperations: {
    flexDirection: "row",
    paddingVertical: 8
  },
  secondScreen: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  calculationsContainer: {
    height: 100,
    width: "90%",
    justifyContent: "flex-end",
  },
  screenFirstNumber: {
    fontSize: 50,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 25,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenOperator: {
    color: "purple",
    fontSize: 20,
    fontWeight: "500"
  }
})

export default Keyboard