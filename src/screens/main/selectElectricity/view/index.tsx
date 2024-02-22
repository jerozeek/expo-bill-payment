import React, { FC } from "react";
import ScreenContainer from "../../../../components/containers/screen.container";
import {Spacer} from "../../../../components/spacer";
import {DefaultTextInput} from "../../../../components/inputs/input.field";
import {setNumberFormat} from "../../../../utils/helpers";
import theme from "../../../../utils/theme";
import {PrimaryButton} from "../../../../components/button";

type Props = {
    biller: string,
    billerType: string
    meter: string
    amount: string
    setAmount: (amount: string) => void
    setMeter: (meter: string) => void
    onSubmit: () => void
}

const SelectElectricityView:FC<Props> = ({
     biller,
     billerType,
     amount,
     setAmount,
     meter,
     setMeter,
     onSubmit
}) => {

    return (
        <ScreenContainer
            backNavigation
            headerText={'Electricity'}
            subText={'Select or search for the service provider'}
        >
            <Spacer />
            <DefaultTextInput
                editable={false}
                label={'Biller'}
                value={biller}
            />

            <Spacer />
            <DefaultTextInput
                editable={false}
                label={'Package Type'}
                value={biller+` (${billerType})`}
            />

            <Spacer />
            <DefaultTextInput
                value={amount}
                onChangeText={(amount) => setNumberFormat(amount, setAmount)}
                label={'Amount'}
                keyboardType={'number-pad'}
                placeholder={'Enter Airtime Amount'}
            />

            <Spacer />
            <DefaultTextInput
                label={'Meter Number'}
                placeholder={"Enter Meter Number"}
                value={meter}
                onChangeText={(meter) => setMeter(meter)}
            />

            <Spacer height={theme.SCREEN_SIZE.height * 0.05} />
            <PrimaryButton
                title={'Next'}
                onPress={onSubmit}
            />

        </ScreenContainer>
    )
}

export default SelectElectricityView;
