import { FC } from "react";
import {Image, Pressable, StyleSheet, View} from "react-native";
import theme from "../../utils/theme";
import SmallText from "../small.text";

type Props = {
    iconType: 'icon' | 'image',
    icon: any,
    label: string,
    rightIcon: any,
    // screen?: keyof MainStacksParamList
    onPress?: () => void
}

const ItemsCard:FC<Props> = (props) => {

    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <View style={styles.leftContent}>
                {
                    props.iconType === 'image' ? (
                        <Image
                            style={theme.COMMON_STYLES.bigIcon}
                            resizeMode={'contain'}
                            source={props.icon}
                        />
                    ):
                    <>{props.icon}</>
                }
                <SmallText style={styles.text}>{props.label}</SmallText>
            </View>
            {
                props.iconType === 'image' ? (
                    <Image
                        style={theme.COMMON_STYLES.icon}
                        resizeMode={'contain'}
                        source={props.rightIcon}
                    />
                ) :
                <>{props.rightIcon}</>
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.lightWhite,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingVertical: theme.SCREEN_SIZE.height * 0.02,
        paddingHorizontal: theme.SCREEN_SIZE.height * 0.02,
        marginBottom: theme.SCREEN_SIZE.width * 0.005,
        borderRadius: theme.SCREEN_SIZE.width * 0.02
    },
    leftContent: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
    },
    text: {
        marginLeft: theme.SCREEN_SIZE.height * 0.02
    },
    content: {
        position: "absolute",
        top: theme.SCREEN_SIZE.height * 0.05,
        width: theme.SCREEN_SIZE.width
    }
})

export default ItemsCard;
