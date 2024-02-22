import ScreenContainer from "../../../../components/containers/screen.container";
import {FC, Fragment} from "react";
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View} from 'react-native';
import theme from "../../../../utils/theme";
import {Spacer} from "../../../../components/spacer";
import {AIRTIME_AMOUNTS} from "../../../../config/constant";
import {DefaultTextInput} from "../../../../components/inputs/input.field";
import SmallText from "../../../../components/small.text";
import {FONT_FAMILY, INetworkServiceProvider} from "../../../../utils/interfaces";
import {PrimaryButton} from "../../../../components/button";
import {currency, setNumberFormat} from "../../../../utils/helpers";
import NetworkListing from "../../../../components/shared/network.listing";

type AirtimeScreenViewProps = {
    onChooseProvider: (provider: INetworkServiceProvider) => void,
    amount: string,
    onChooseAmount: (amount: string) => void
    setAmount: (amount: string) => void
    phone: string,
    setPhone: (phone: string) => void
    onPurchase: () => void
}

const AirtimeScreenView:FC<AirtimeScreenViewProps> = ({
    onChooseProvider,
    amount,
    setAmount,
    phone,
    setPhone,
    onPurchase,
    onChooseAmount
}) => {

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <ScreenContainer
                backNavigation
                headerText={'Buy Airtime'}
                subText={'Select options and buy airtime'}
                isScrollable
            >
                <View style={styles.viewContainer}>
                    <View style={styles.topView}>
                        <Spacer />
                        <NetworkListing onChoose={onChooseProvider} />

                        <Spacer />
                        <DefaultTextInput
                            label={'Mobile Number'}
                            keyboardType={'number-pad'}
                            placeholder={'Enter Mobile Number'}
                            value={phone}
                            onChangeText={(phone) => setPhone(phone)}
                        />

                        <Spacer />
                        <AmountSelector onChooseAmount={onChooseAmount} />

                        <Spacer />
                        <DefaultTextInput
                            value={amount}
                            onChangeText={(amount) => setNumberFormat(amount, setAmount)}
                            label={'Amount'}
                            keyboardType={'number-pad'}
                            placeholder={'Enter Airtime Amount'}
                        />

                    </View>

                    <View style={styles.bottomView}>
                        <PrimaryButton
                            title={'Next'}
                            onPress={onPurchase}
                        />
                    </View>
                </View>
            </ScreenContainer>
        </KeyboardAvoidingView>
    )
}


type AmountSelector = {
    onChooseAmount: (amount: string) => void
}

const AmountSelector:FC<AmountSelector> = ({onChooseAmount}) => {

    const _onSetAmountValue = (value:number) => {
        setNumberFormat(value.toString(), onChooseAmount);
    }

    return (
        <Fragment>
            <SmallText style={styles.label}>Select Amount</SmallText>
            <View style={styles.listing}>
                {
                    AIRTIME_AMOUNTS.map((item, index) => (
                        <TouchableOpacity onPress={() => _onSetAmountValue(item.amount)} key={index} style={styles.amountList}>
                            <SmallText style={styles.amountText}>{currency+item.amount}</SmallText>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listing: {
        display: 'flex',
        flexDirection: 'row',
    },
    amountList: {
        backgroundColor: theme.COLORS.grey,
        width: theme.SCREEN_SIZE.width * 0.16,
        height: theme.SCREEN_SIZE.height * 0.05,
        borderRadius: theme.SCREEN_SIZE.width * 0.01,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginHorizontal: theme.SCREEN_SIZE.width * 0.01,
    },
    amountText: {
        color: '#0F0920',
        fontFamily: FONT_FAMILY.Bold,
    },
    label: {
        marginBottom: theme.SCREEN_SIZE.height * 0.01,
        color: '#8F9BB3',
    },
    viewContainer: {
        flex: 1,
    },
    topView: {
        flex: 1,
    },
    bottomView: {
        width: theme.SCREEN_SIZE.width * 0.9,
        bottom: theme.SCREEN_SIZE.height * 0.02,
    },
});

export default AirtimeScreenView;
