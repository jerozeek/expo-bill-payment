import {View, StyleSheet, Image} from "react-native";
import { Entypo, AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import React, { FC } from "react";
import { BottomModal } from "../../../../components/modals/bottom.modal";
import AppText from "../../../../components/app.text";
import {Spacer} from "../../../../components/spacer";
import {FONT_FAMILY, IAppNavigationProps} from "../../../../utils/interfaces";
import SmallText from "../../../../components/small.text";
import {ICON} from "../../../../utils/icon";
import ItemsCard from "../../../../components/shared/items.card";

type Props = {
    open: boolean,
    setOpen: (showSummary: boolean) => void,
    biller: string
}

const METER_OPTIONS = [
    {
        id:1,
        name: "Prepaid",
        icon: ICON.electricity
    },
    {
        id:2,
        name: "Postpaid",
        icon: ICON.electricity
    },

]


const MeterType:FC<Props> = ({ setOpen, open, biller}) => {

    const navigation = useNavigation<IAppNavigationProps>();

    const onPressAction = (billerType: string) => {
        setOpen(false);
        return navigation.navigate('SelectElectricityScreen', {
            biller,
            billerType
        });
    }

    return (
        <BottomModal visible={open} setVisible={setOpen}>
            <AppText style={styles.headerText}>Choose a Package</AppText>
            <SmallText style={styles.subText}>Choose electricity type</SmallText>
            <Spacer />
            {
                METER_OPTIONS.map((item, index) => (
                    <ItemsCard
                        key={index}
                        iconType={'image'}
                        icon={item.icon}
                        label={biller.toUpperCase() + ` (${item.name})`}
                        rightIcon={ICON.arrow_right}
                        onPress={() => onPressAction(item.name)}
                    />
                ))
            }
        </BottomModal>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: FONT_FAMILY.Medium,
        textAlign: "center",
    },
    subText: {
        textAlign: "center",
    }
})

export default MeterType;
