import { StyleSheet } from "react-native";
import { myColors } from "./colors";

export const Styles = StyleSheet.create({
    botaoLight: {
        width: 80,
        height: 80,
        borderRadius: 28,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    },
    botaoDark: {
        width: 80,
        height: 80,
        borderRadius: 28,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    },
    botaoAzul: {
        width: 80,
        height: 80,
        borderRadius: 28,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    },
    botaoCinza: {
        width: 80,
        height: 80,
        borderRadius: 28,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    },
    botaoTextoLight: {
        fontSize: 21,
        color: myColors.white
    },
    botaoTextoDark: {
        fontSize: 21,
        color: myColors.black
    }
})