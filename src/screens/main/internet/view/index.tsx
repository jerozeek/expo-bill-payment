import ScreenContainer from "../../../../components/containers/screen.container";
import {Spacer} from "../../../../components/spacer";
import React, { FC } from "react";
import NetworkListing from "../../../../components/shared/network.listing";
import {INetworkServiceProvider} from "../../../../utils/interfaces";
import {DefaultTextInput} from "../../../../components/inputs/input.field";
import {PrimaryButton} from "../../../../components/button";
import theme from "../../../../utils/theme";
import SelectOptions from "../../../../components/shared/select.options";
import {SERVICES} from "../../../../config/constant";

type Props = {
    onChooseProvider: (provider: INetworkServiceProvider) => void,
    amount: string
    phone: string,
    setPhone: (phone: string) => void
    onLoadSummary: () => void
    plan: string,
    setPlan: (plan: string) => void
}

const InternetView:FC<Props> = ({
    onChooseProvider,
    amount,
    phone,
    setPhone,
    onLoadSummary,
    plan,
    setPlan
}) => {

    return (
        <ScreenContainer
            backNavigation
            headerText={'Data Purchase'}
            subText={'Select options and purchase data'}
        >

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
            <SelectOptions
                label={'Plan'}
                placeholder={'Choose a plan'}
                value={plan}
                setValue={setPlan}
                data={SERVICES}
            />

            <Spacer />
            <DefaultTextInput
                value={amount}
                label={'Amount'}
                keyboardType={'number-pad'}
                placeholder={'Enter Airtime Amount'}
                editable={false}
            />


            <Spacer height={theme.SCREEN_SIZE.height * 0.05} />
            <PrimaryButton
                title={'Next'}
                onPress={onLoadSummary}
            />

        </ScreenContainer>
    )
}

export default InternetView;
