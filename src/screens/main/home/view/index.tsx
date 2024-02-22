import {FC} from "react";
import ScreenContainer from "../../../../components/containers/screen.container";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import theme from "../../../../utils/theme";
import {BILL_PAYMENT_LIST} from "../../../../config/constant";
import ItemsCard from "../../../../components/shared/items.card";
import {ICON} from "../../../../utils/icon";
import SmallText from "../../../../components/small.text";
import { AntDesign } from '@expo/vector-icons';
import AppText from "../../../../components/app.text";
import {useNavigation} from "@react-navigation/native";
import {IAppNavigationProps} from "../../../../utils/interfaces";


type HomeScreenViewProps = {
    onLogout: () => void
}

const HomeScreenView:FC<HomeScreenViewProps> = ({onLogout}) => {

    const navigation = useNavigation<IAppNavigationProps>()

    return (
        <ScreenContainer>
            <View style={styles.content}>
                <AppText>Quick Action</AppText>
                <SmallText>Use any of the options below:</SmallText>
                {
                    BILL_PAYMENT_LIST.map((item, index) => (
                        <ItemsCard
                            iconType={'image'}
                            onPress={() => navigation.navigate(item.screen)}
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            rightIcon={ICON.arrow_right}
                        />
                    ))
                }
            </View>

            <View style={{
                position: "absolute",
                bottom: theme.SCREEN_SIZE.height * 0.04,
                width: theme.SCREEN_SIZE.width
            }}>
                <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
                    <AntDesign name="logout" size={16} color={theme.COLORS.primary } />
                    <SmallText style={{color: theme.COLORS.primary, marginLeft: theme.SCREEN_SIZE.height * 0.01}}>Logout</SmallText>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}


const styles = StyleSheet.create({
    content: {
        position: "absolute",
        top: theme.SCREEN_SIZE.height * 0.06,
        width: theme.SCREEN_SIZE.width
    },
    logoutBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
    }
})



export default HomeScreenView;
