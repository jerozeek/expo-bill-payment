import {INetworkServiceProvider} from "../../utils/interfaces";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {AIRTIME_SERVICE_PROVIDER} from "../../config/constant";
import {FC, useState } from "react";
import theme from "../../utils/theme";

type Props = {
    onChoose: (provider:INetworkServiceProvider) => void,
}

const NetworkListing:FC<Props> = ({onChoose}) => {

    const [activeIndex, setActiveIndex] = useState<number>(0); // Track active index

    const onChooseProvider = (provider: INetworkServiceProvider, index: number) => {
        setActiveIndex(index);
        return onChoose(provider);
    }

    return (
        <View style={styles.listing}>
            {
                AIRTIME_SERVICE_PROVIDER.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => onChooseProvider(item, index)}
                        key={index}
                        style={[styles.iconBtn, activeIndex === index && styles.isActive]}
                    >
                        <Image
                            source={item.icon}
                            style={styles.icon}
                            resizeMode={'cover'}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconBtn: {
        width: theme.SCREEN_SIZE.width * 0.2,
        height: theme.SCREEN_SIZE.width * 0.17,
        borderRadius: theme.SCREEN_SIZE.width * 0.02,
        marginHorizontal: theme.SCREEN_SIZE.width * 0.01,
    },
    isActive: {
        borderWidth: 1,
        borderColor: '#7B61FF',
    },
    icon: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: theme.SCREEN_SIZE.width * 0.02,
    },
})

export default NetworkListing
