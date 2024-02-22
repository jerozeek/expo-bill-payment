import {INotifyStatus} from "./interfaces";
import Toast from 'react-native-toast-message';

const Notify = (response: INotifyStatus, message: string) => {
    Toast.show({
        type: response === INotifyStatus.SUCCESS ? 'success' : 'error',
        text1: response === INotifyStatus.SUCCESS ? 'Success' : 'Error',
        text2: message
    })
}

export default Notify;
