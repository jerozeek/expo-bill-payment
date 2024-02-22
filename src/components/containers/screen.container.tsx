import { ScrollView, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {FC} from "react";
import {
    TRestProps,
    TScreenContainerProps,
    TScreenProps
} from "../../utils/interfaces";
import theme from "../../utils/theme";
import ScreenHeader from "./screen.header";
import AppText from "../app.text";
import SmallText from "../small.text";


const Screen: FC <TScreenProps> = ({isScrollable, style, children}) => {
    return isScrollable ?
        (
            <ScrollView
                style={style}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps={'handled'}
                scrollEventThrottle={16}
            >
                {children}
            </ScrollView>
        ) :
        (
            <View style={style}>
                {children}
            </View>
        );
};

const ScreenContainer: FC <TScreenContainerProps & TRestProps> = ({styles, backNavigation, headerText, subText, children,  ...rest}) => {
    return (
        <Screen {...rest} style={[theme.COMMON_STYLES.screenContainer, theme.COMMON_STYLES.scrollViewContainer, styles]}>
            <StatusBar style="dark" animated backgroundColor={'#FFFFFF'} />
            { backNavigation && <ScreenHeader /> }
            { headerText && <AppText>{headerText}</AppText> }
            { headerText && <SmallText>{subText}</SmallText> }
            {children}
        </Screen>
    );
};

export default ScreenContainer;
