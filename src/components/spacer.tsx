import {View} from "react-native";
import theme from "../utils/theme";
import React, {FC} from "react";

type Props = {
    height?: number;
}

export const Spacer:FC<Props> = ({
                                     height = theme.SCREEN_SIZE.height * 0.02
                                 }) => {
    return <View style={{height}} />
}

