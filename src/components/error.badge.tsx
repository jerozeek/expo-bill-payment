import SmallText from "./small.text";
import {StyleSheet, View} from "react-native";
import theme from "../utils/theme";
import {FC} from "react";

type Props = {
    message: string
}

export const ErrorBadge: FC<Props> = ({message}) => {
    return (
        <View style={styles.errorContainer}>
            <SmallText style={styles.text}>{message}</SmallText>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        flexDirection: 'row',
        marginBottom: theme.SCREEN_SIZE.height * 0.02,
    },
    text: {
        color: theme.COLORS.red,
    }
})
