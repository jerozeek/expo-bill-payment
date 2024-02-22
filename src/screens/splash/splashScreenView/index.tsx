import ScreenContainer from "../../../components/containers/screen.container";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import AppText from "../../../components/app.text";
import theme from "../../../utils/theme";


const SplashScreenView = () => {

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <View style={styles.logo}>
                        <AppText style={{color: '#FFFFFF'}}>LOGO</AppText>
                    </View>
                </View>

                <View style={styles.loader}>
                    <ActivityIndicator size={'large'} color={theme.COLORS.primary} />
                </View>
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: theme.SCREEN_SIZE.width * 0.3,
        height: theme.SCREEN_SIZE.width * 0.3,
        backgroundColor: theme.COLORS.primary,
        borderRadius: theme.SCREEN_SIZE.width * 0.3,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default SplashScreenView
