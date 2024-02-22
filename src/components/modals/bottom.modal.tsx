import { FC, ReactNode } from "react"
import {Modal, SafeAreaView, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import theme from "../../utils/theme";
import {ICON} from "../../utils/icon";

type TBottomModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    children: ReactNode
}

export const BottomModal: FC<TBottomModalProps> = ({ visible, setVisible, children}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <SafeAreaView style={styles.bottomModalContainer}>
                <View style={{flex:1}} />
                <View style={styles.bottomModal}>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.bottomCloseIcon}>
                        <Image
                            source={ICON.close}
                            style={styles.bottomCloseIcon}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                    {children}
                </View>
            </SafeAreaView>
        </Modal>
    )
}


const styles = StyleSheet.create({
    bottomCloseIcon: {
        width: theme.SCREEN_SIZE.width * 0.06,
        height: theme.SCREEN_SIZE.width * 0.06,
    },
    bottomModalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    bottomModal: {
        padding: theme.SCREEN_SIZE.width * 0.05,
        backgroundColor: theme.COLORS.white,
        borderTopLeftRadius: theme.SCREEN_SIZE.height * 0.05,
        borderTopRightRadius: theme.SCREEN_SIZE.height * 0.05,
    }
})
