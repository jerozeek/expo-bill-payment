import {useState} from "react";
import InternetView from "./view";
import {INetworkServiceProvider, INotifyStatus} from "../../../utils/interfaces";
import {AIRTIME_SERVICE_PROVIDER, GET_SERVICE_PRICES} from "../../../config/constant";
import Notify from "../../../utils/notify";
import TransactionSummary from "../../../components/shared/transaction.summary";

const InternetScreen = () => {

    const [amount, setAmount] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [plan, setPlan] = useState<string>("");
    const [provider, setProvider] = useState<INetworkServiceProvider>(AIRTIME_SERVICE_PROVIDER[0]);


    const [openSummaryModal, setOpenSummaryModal] = useState<boolean>(false);

    const _onLoadSummary = () => {
        if (amount === "" || phone === "") return Notify(INotifyStatus.ERROR, 'Amount and phone number are required');
        if (plan === "") return Notify(INotifyStatus.ERROR, 'Plan is required');

        setOpenSummaryModal(true);
    }

    const _onChoosePlan = (plan: string) => {
        setPlan(plan);
        const getAmount = GET_SERVICE_PRICES.find((item) => item.name.toLowerCase() === plan.toLowerCase())
        if (getAmount) setAmount(getAmount.amount.toString());
        else setAmount('0');
    }

    return (
        <>
            <InternetView
                amount={amount}
                phone={phone}
                setPhone={setPhone}
                onChooseProvider={setProvider}
                onLoadSummary={_onLoadSummary}
                plan={plan}
                setPlan={_onChoosePlan}
            />

            <TransactionSummary
                setShowSummary={setOpenSummaryModal}
                showSummary={openSummaryModal}
                provider={provider}
                amount={amount}
                type={'data'}
                plan={plan}
            />
        </>
    )
}

export default InternetScreen;
