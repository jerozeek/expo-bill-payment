import React, { FC } from "react"
import {View} from "react-native";
import theme from "../../utils/theme";
import SmallText from "../small.text";

type Props = {
    label: string,
    value: React.ReactNode
}

const ItemList:FC<Props> = ({label, value}) => {

    return (
        <View style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
        }}>
            <SmallText>{label}</SmallText>
            <View>{value}</View>
        </View>
    )
}

export default ItemList
