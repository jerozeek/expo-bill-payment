import React, {FC, ReactNode} from "react";
import {Text} from "react-native";
import theme from '../utils/theme';

type AppTextProps = {
    style?: any,
    children: ReactNode
}

const AppText: FC<AppTextProps> = ({style, children}) => {
    return (
        <Text style={[theme.COMMON_STYLES.bigText, style]}>
            {children}
        </Text>
    )
}

export default AppText;
