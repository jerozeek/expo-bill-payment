import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {IAppNavigationProps, MainStacksParamList} from "../../../utils/interfaces";
import TransactionSuccessView from "./view";


const TransactionSuccessScreen = () => {

    const { params: { amount } } = useRoute<RouteProp<MainStacksParamList>>();
    const navigation = useNavigation<IAppNavigationProps>();

    const _onClose = () => {
        return navigation.navigate('HomeScreen');
    }

    return (
        <TransactionSuccessView onClose={_onClose} />
    )
}
export default TransactionSuccessScreen;
