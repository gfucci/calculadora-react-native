import { ThemeContext } from '@/context/ThemeContext';
import { Styles } from '@/styles/global';
import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    title: string;
    isBlue?: boolean;
    isGray?: boolean
    onPress: () => void;
}

const Button = ({title, isBlue, isGray, onPress}: ButtonProps) => {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.botaoAzul
                : isGray
                ? Styles.botaoCinza
                : theme === 'light'
                ? Styles.botaoLight
                : Styles.botaoDark 
            }
            onPress={onPress}
        >
            <Text 
                style={
                    isBlue || isGray
                    ? Styles.botaoTextoLight
                    : theme === 'dark'
                    ? Styles.botaoTextoLight
                    : Styles.botaoTextoDark
                }
            >
                { title }
            </Text>
        </TouchableOpacity>
    )
}

export default Button