import {FC} from "react";
import ScreenContainer from "../../../../components/containers/screen.container";
import {View, StyleSheet, Image} from "react-native";
import theme from "../../../../utils/theme";
import {PrimaryButton} from "../../../../components/button";
import {ICON} from "../../../../utils/icon";
import SmallText from "../../../../components/small.text";
import {Spacer} from "../../../../components/spacer";
import AppText from "../../../../components/app.text";


type Props = {
    onClose: () => void
}

const TransactionSuccessView:FC<Props> = ({onClose}) => {

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Image
                    source={ICON.success}
                    resizeMode={'contain'}
                    style={styles.success}
                />
                <Spacer />
                <AppText>Purchase Successful</AppText>
                <SmallText style={{textAlign: 'center'}}>Your transaction was successful, you will receive an email shortly with details</SmallText>
            </View>
            <PrimaryButton
                title={'Done'}
                onPress={onClose}
                style={{
                    marginBottom: theme.SCREEN_SIZE.height * 0.01
                }}
            />
        </ScreenContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    success: {
        width: theme.SCREEN_SIZE.width * 0.4,
        height: theme.SCREEN_SIZE.height * 0.15,
    }
})

export default TransactionSuccessView;
