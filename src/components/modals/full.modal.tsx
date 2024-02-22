import {FC, ReactNode} from "react";
import {Modal, SafeAreaView, View, StyleSheet } from "react-native";
import theme from "../../utils/theme";

type TFullModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    children: ReactNode,
    animationType?: 'none' | 'slide' | 'fade'
}

const FullModal:FC<TFullModalProps> = ({visible, setVisible, children, animationType}) => {

    return (
        <Modal
            animationType={animationType}
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.fullModalInner}>
                        {children}
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    fullModalInner: {
        flex: 1,
        backgroundColor: theme.COLORS.mainWhite,
        padding: theme.SCREEN_SIZE.height * 0.025,
    }
})

export default FullModal;
