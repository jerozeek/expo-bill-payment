import React, {FC, useState} from "react";
import theme from "../../utils/theme";
import {
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    ViewStyle,
    TextInputProps
} from "react-native";
import SmallText from "../small.text";
import {ICON} from "../../utils/icon";


export interface InputProps extends TextInputProps {
    label: string,
    withEye?: boolean,
    isPassword?: boolean,
    style?: ViewStyle
}

export const DefaultTextInput:FC<InputProps> = ({...props}) => {

    const [isVisible, setIsVisible] = useState<boolean>(props.isPassword);

    const toggleVisibility = () => {
        if (props.withEye)
        {
            if (isVisible) setIsVisible(false);
            else setIsVisible(true);
        }
    }

    return (
        <View style={{ width: '100%', justifyContent:'center', marginTop: theme.SCREEN_SIZE.height * 0.01}}>
            <SmallText style={styles.label}>
                {props.label}
            </SmallText>
            <TextInput
                {...props}
                autoCapitalize={'none'}
                value={props.value}
                secureTextEntry={isVisible}
                style={[styles.defaultInput, props.style]}
            />
            {
                props.withEye &&
                <TouchableOpacity onPress={toggleVisibility} style={styles.cover}>
                    <Image
                        source={isVisible ? ICON.eyeClose : ICON.eyeOpen}
                        resizeMode={'contain'}
                        style={styles.eyes}
                    />
                </TouchableOpacity>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    defaultInput: {
        borderRadius: theme.SCREEN_SIZE.height * 0.01,
        height: theme.SCREEN_SIZE.height * 0.065,
        marginTop: theme.SCREEN_SIZE.height * 0.01,
        paddingLeft: theme.SCREEN_SIZE.width * 0.04,
        color: '#8F9BB3',
        backgroundColor: '#F3F3F5',
    },
    label: {
        color: '#8F9BB3',
    },
    eyes: {
        width: 20,
        height: 20,
    },
    cover: {
        position: 'absolute',
        top: theme.SCREEN_SIZE.height * 0.055,
        right: theme.SCREEN_SIZE.width * 0.023,
    }
});


