import AirtimeScreenView from "./view";
import React from "react";
import {INetworkServiceProvider, INotifyStatus} from "../../../utils/interfaces";
import {AIRTIME_SERVICE_PROVIDER} from "../../../config/constant";
import Notify from "../../../utils/notify";
import {validateMobileNumber} from "../../../utils/helpers";
import TransactionSummary from "../../../components/shared/transaction.summary";


const AirtimeScreen = () => {

    const [amount, setAmount] = React.useState<string>('');
    const [phone, setPhone] = React.useState<string>('');

    const [provider, setProvider] = React.useState<INetworkServiceProvider>(AIRTIME_SERVICE_PROVIDER[0]);
    const [showSummary, setShowSummary] = React.useState<boolean>(false);

    const onChooseProvider = (item: INetworkServiceProvider) => {
        setProvider(item)
    }

    const onChooseAmount = (amount: string) => {
        setAmount(amount);
        return _onPurchase();
    }

    const _onPurchase = () => {
        if (!phone) return Notify(INotifyStatus.ERROR, 'Please enter mobile number');
        const isValidPhoneNumber  = validateMobileNumber(phone);
        if (!isValidPhoneNumber) return Notify(INotifyStatus.ERROR, 'Invalid mobile number format');
        setShowSummary(true);
    }

    return (
        <>
            <AirtimeScreenView
                amount={amount}
                setAmount={setAmount}
                onChooseProvider={onChooseProvider}
                phone={phone}
                setPhone={setPhone}
                onPurchase={_onPurchase}
                onChooseAmount={onChooseAmount}
            />

            <TransactionSummary
                setShowSummary={setShowSummary}
                showSummary={showSummary}
                provider={provider}
                amount={amount}
                type={'airtime'}
            />
        </>
    )
}

export default AirtimeScreen
