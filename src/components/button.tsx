import React, { FC } from "react";
import {
    ActivityIndicator,
    Pressable,
    TextStyle,
    ViewStyle,
    StyleSheet,
    PressableProps
} from "react-native";
import theme from "../utils/theme";
import SmallText from "./small.text";

export interface TButton extends PressableProps {
    title: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: any;
    loading?: boolean;
}

export const PrimaryButton:FC<TButton> = ({...props}) => {
    return (
        <Pressable
            {...props}
            style={[styles.primaryBtn, props.style, props.loading && {opacity: 0.5}]}
            disabled={props.loading}
        >
            { props.loading ?
                <ActivityIndicator color={theme.COLORS.mainWhite} /> :
                <SmallText style={[styles.primaryBtnText, props.textStyle]}>
                    {props.title}
                </SmallText>}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
        backgroundColor: theme.COLORS.primary,
        borderRadius: theme.SCREEN_SIZE.height * 0.01,
        padding: theme.SCREEN_SIZE.height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    primaryBtnText: {
        color: theme.COLORS.white,
    },
    secondaryBtn: {
        backgroundColor: theme.COLORS.grey,
        borderRadius: theme.SCREEN_SIZE.height * 0.05,
        padding: theme.SCREEN_SIZE.height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    secondaryBtnText: {
        color: theme.COLORS.primary,
    },
    iconBtnStyle: {
        backgroundColor: theme.COLORS.primary,
        borderRadius: theme.SCREEN_SIZE.height * 0.05,
        padding: theme.SCREEN_SIZE.height * 0.015,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconBtnText: {
        color: theme.COLORS.white,
        marginLeft: theme.SCREEN_SIZE.width * 0.02,
        fontSize: theme.SCREEN_SIZE.width * 0.04
    }
})
