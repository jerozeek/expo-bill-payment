import {FC, useState} from "react";
import {
    INetworkServiceProvider,
    IAppNavigationProps,
    IElectricityProvider
} from "../../utils/interfaces";
import {removeNumberFormat} from "../../utils/helpers";
import {useNavigation} from "@react-navigation/native";
import AirtimeSummary from "./airtime.summary";
import ElectricitySummary from "./electricity.summary";

type Props = {
    amount: string
    showSummary: boolean,
    setShowSummary: (showSummary: boolean) => void,
} & (AirtimeSummaryProps | ElectricitySummaryProps | DataSummaryProps);

type AirtimeSummaryProps = {
    type: 'airtime',
    provider: INetworkServiceProvider,
    plan?: string
}

type ElectricitySummaryProps = {
    type: 'electricity',
    payload: IElectricityProvider
}

type DataSummaryProps = {
    type: 'data',
    provider: INetworkServiceProvider,
    plan: string
}


const TransactionSummary:FC<Props> = (props) => {

    const navigation = useNavigation<IAppNavigationProps>();
    const [loading, setLoading] = useState<boolean>(false);

    const onPurchased = async () => {
        setLoading(true);
        setTimeout(() =>
            Promise.resolve().then(() => {
                return navigation.navigate("TransactionSuccessScreen", {
                    amount: removeNumberFormat(props.amount)
                });
            }).
            finally(() => {
                setLoading(false);
                props.setShowSummary(false);
            }),3000);
    }

    if (props.type === 'airtime'){
        return (
            <AirtimeSummary
                amount={props.amount}
                provider={props.provider}
                showSummary={props.showSummary}
                loading={loading}
                setShowSummary={props.setShowSummary}
                onPurchased={onPurchased}
            />
        )
    }
    else if (props.type === 'data') {
        return (
            <AirtimeSummary
                amount={props.amount}
                provider={props.provider}
                showSummary={props.showSummary}
                loading={loading}
                setShowSummary={props.setShowSummary}
                onPurchased={onPurchased}
                plan={props.plan}
            />
        )
    }
    else
    {
        return (
            <ElectricitySummary
                amount={props.amount}
                provider={props.payload}
                showSummary={props.showSummary}
                loading={loading}
                setShowSummary={props.setShowSummary}
                onPurchased={onPurchased}
            />
        )
    }
}



export default TransactionSummary;
