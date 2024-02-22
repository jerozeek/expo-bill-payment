import {RouteProp, useRoute} from "@react-navigation/native";
import {INotifyStatus, MainStacksParamList} from "../../../utils/interfaces";
import SelectElectricityView from "./view";
import {useState} from "react";
import TransactionSummary from "../../../components/shared/transaction.summary";
import Notify from "../../../utils/notify";

const SelectElectricityScreen = () => {

    const { params: { biller, billerType } } = useRoute<RouteProp<MainStacksParamList>>();

    const [showSummary, setShowSummary] = useState<boolean>(false);

    const [amount, setAmount] = useState<string>("");
    const [meter, setMeter] = useState<string>("");

    const _onSubmit = () => {
        if (amount === "") return Notify(INotifyStatus.ERROR, 'Amount is required');
        if (meter === "") return Notify(INotifyStatus.ERROR, 'Meter no is required');
        setShowSummary(true);
    }

    return (

        <>
            <SelectElectricityView
                biller={biller}
                billerType={billerType}
                amount={amount}
                setAmount={setAmount}
                meter={meter}
                setMeter={setMeter}
                onSubmit={_onSubmit}
            />

            <TransactionSummary
                setShowSummary={setShowSummary}
                showSummary={showSummary}
                amount={amount}
                type={'electricity'}
                payload={{
                    biller,
                    billType: billerType,
                    meterNo: meter
                }}
            />
        </>
    )
}

export default SelectElectricityScreen
