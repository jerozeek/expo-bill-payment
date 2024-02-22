import React, {FC} from "react";
import theme from "../../utils/theme";
import {
    TextInput,
    StyleSheet,
    View,
    ViewStyle,
    TextInputProps
} from "react-native";
import { Feather } from '@expo/vector-icons';


export interface InputProps extends TextInputProps {
    style?: ViewStyle
}

export const SearchInput:FC<InputProps> = ({...props}) => {

    return (
        <View style={styles.container}>
            <Feather
                name="search"
                size={15}
                color="#8F9BB3"
                style={styles.icon}
            />
            <TextInput {...props} style={styles.input} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: theme.SCREEN_SIZE.height * 0.01,
        height: theme.SCREEN_SIZE.height * 0.065,
        paddingLeft: theme.SCREEN_SIZE.width * 0.04,
        color: '#8F9BB3',
        backgroundColor: '#F3F3F5',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
});


