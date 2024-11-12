import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
    children: ReactNode;
}

const Button = ({children}: ButtonProps) => {
  return (
    <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.botaoTexto}>
            { children }
        </Text>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
    botao: {
        width: 80,
        height: 80,
        borderRadius: 28,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    },
    botaoTexto: {
        fontSize: 21,
        color: "#000000"
    }
});

export default Button