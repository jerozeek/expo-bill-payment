import React, {FC, ReactNode} from "react";
import {StyleSheet} from "react-native";
import AppText from "./app.text";
import theme from "../utils/theme";

type Props = {
    style?: any
    children: ReactNode
}

const SmallText: FC<Props> = ({style, children}) => {
    return (
        <AppText style={[styles.text, style]}>
            {children}
        </AppText>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.SCREEN_SIZE.width * 0.035,
        color:'#5c5c5c'
    }
})

export default SmallText
