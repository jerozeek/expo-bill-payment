import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, Pressable, Image} from "react-native";
import {ICON} from "../../utils/icon";
import theme from "../../utils/theme";

const ScreenHeader = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image
                    source={ICON.back}
                    style={theme.COMMON_STYLES.icon}
                    resizeMode={'contain'}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: theme.SCREEN_SIZE.width * 0.04,
        height: theme.SCREEN_SIZE.width * 0.08,
    }
})


export default ScreenHeader
