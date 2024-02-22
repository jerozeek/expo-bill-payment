import { FC } from "react";
import {FONT_FAMILY, IElectricityProvider} from "../../utils/interfaces";
import AppText from "../app.text";
import {currency} from "../../utils/helpers";
import {Spacer} from "../spacer";
import ItemList from "./item.list";
import {Image, StyleSheet, View} from "react-native";
import theme from "../../utils/theme";
import SmallText from "../small.text";
import {PrimaryButton} from "../button";
import {BottomModal} from "../modals/bottom.modal";
import {ICON} from "../../utils/icon";
import WalletBalance from "./wallet.balance";


type Props = {
    amount: string,
    provider: IElectricityProvider,
    showSummary: boolean,
    loading: boolean,
    setShowSummary: (showSummary: boolean) => void,
    onPurchased: () => void
}

const ElectricitySummary:FC<Props> = ({amount, setShowSummary, showSummary, loading, provider, onPurchased}) => {


    return (
        <BottomModal visible={showSummary} setVisible={setShowSummary}>
            <AppText style={styles.headerText}>{currency+amount}</AppText>
            <Spacer />
            <ItemList
                label={'Provider'}
                value={
                    <View style={{ flexDirection: "row", alignItems:'center' }}>
                        <Image
                            source={ICON.electricity}
                            style={{
                                width: theme.SCREEN_SIZE.width * 0.06,
                                height: theme.SCREEN_SIZE.height * 0.02
                            }}
                            resizeMode={'contain'}
                        />
                        <SmallText>{provider.biller}</SmallText>
                    </View>
                }
            />

            <Spacer />
            <ItemList
                label={'Biller Type'}
                value={ <SmallText>{provider.billType}</SmallText>}
            />

            <Spacer />
            <ItemList
                label={'Amount'}
                value={ <SmallText>{currency+amount}</SmallText>}
            />

            <Spacer />
            <ItemList
                label={'Bonus to Earn'}
                value={ <SmallText style={{ color: theme.COLORS.primary }}>+{currency+400}</SmallText>}
            />

            <Spacer />
            <WalletBalance />

            <Spacer height={theme.SCREEN_SIZE.height * 0.05} />
            <PrimaryButton
                loading={loading}
                title={'Pay'}
                onPress={onPurchased}
            />

        </BottomModal>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: FONT_FAMILY.Medium,
        textAlign: "center",
    }
})

export default ElectricitySummary;
