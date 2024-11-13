import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './Button'

function Keyboard() {
  return (
    <View style={estilos.calculatorContainer}>
        <View style={estilos.containerOperations}>
        <Button title="C" isGray />
        <Button title="+/-" isGray />
        <Button title="%" isGray />
        <Button title="÷" isBlue />
        </View>
        <View style={estilos.containerOperations}>
        <Button title="7" />
        <Button title="8" />
        <Button title="9" />
        <Button title="×" isBlue />
        </View>
        <View style={estilos.containerOperations}>
        <Button title="4" />
        <Button title="5" />
        <Button title="6" />
        <Button title="-" isBlue />
        </View>
        <View style={estilos.containerOperations}>
        <Button title="1" />
        <Button title="2" />
        <Button title="3" />
        <Button title="+" isBlue />
        </View>
        <View style={estilos.containerOperations}>
        <Button title="." />
        <Button title="0" />
        <Button title="⌫" />
        <Button title="=" isBlue />
        </View>
    </View>
  )
}

const estilos = StyleSheet.create({
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

export default Keyboard