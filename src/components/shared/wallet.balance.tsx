import ItemsCard from "./items.card";
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import theme from "../../utils/theme";
import {currency, numberFormat} from "../../utils/helpers";

const WalletBalance = () => {

    return (
        <ItemsCard
            icon={<MaterialCommunityIcons name="wallet" size={24} color={theme.COLORS.success} />}
            label={`Balance (${currency+numberFormat(90000)})`}
            iconType={'icon'}
            rightIcon={<FontAwesome5 name="check" size={20} color={theme.COLORS.success} />}
            onPress={null}
        />
    )
}

export default WalletBalance;
