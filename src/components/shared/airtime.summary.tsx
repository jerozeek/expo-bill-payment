import {Spacer} from "../spacer";
import ItemList from "./item.list";
import {Image, StyleSheet, View} from "react-native";
import theme from "../../utils/theme";
import SmallText from "../small.text";
import {currency} from "../../utils/helpers";
import {FONT_FAMILY, INetworkServiceProvider} from "../../utils/interfaces";
import { FC } from "react";
import AppText from "../app.text";
import {PrimaryButton} from "../button";
import {BottomModal} from "../modals/bottom.modal";
import ItemsCard from "./items.card";
import WalletBalance from "./wallet.balance";

type Props = {
    amount: any,
    provider: INetworkServiceProvider,
    showSummary: boolean,
    loading: boolean,
    setShowSummary: (showSummary: boolean) => void,
    onPurchased: () => void,
    plan?: string
}

const AirtimeSummary:FC<Props> = ({
  amount,
  provider,
  showSummary,
  loading,
  setShowSummary,
  onPurchased,
  plan
}) => {

    return (
            <BottomModal visible={showSummary} setVisible={setShowSummary}>
                <AppText style={styles.headerText}>{currency+amount}</AppText>
                <Spacer />
                <ItemList
                    label={'Provider'}
                    value={
                        <View style={{ flexDirection: "row", alignItems:'center' }}>
                            <Image
                                source={provider.icon}
                                style={{
                                    width: theme.SCREEN_SIZE.width * 0.06,
                                    height: theme.SCREEN_SIZE.height * 0.02
                                }}
                                resizeMode={'contain'}
                            />
                            <SmallText>{provider.name}</SmallText>
                        </View>
                    }
                />

                {
                    plan && (
                        <>
                            <Spacer />
                            <ItemList
                                label={'Plan'}
                                value={ <SmallText>{plan}</SmallText>}
                            />
                        </>
                    )
                }


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

export default AirtimeSummary;
