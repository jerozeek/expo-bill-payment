import { useState } from "react";
import LoginView from "./loginView";
import {TLoginSchemaType} from "../../../utils/rules";
import {DB} from "../../../config/DB";
import { INotifyStatus } from "../../../utils/interfaces";
import Notify from "../../../utils/notify";
import {useDispatch} from "react-redux";
import {authAction} from "../../../redux/slices/authSlices";

const LoginScreen = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const _onLogin = async (data: TLoginSchemaType) => {
        setLoading(true);
        const user = DB.find((item) => item.email === data.email && item.password === data.password);
        setTimeout(() => {
            setLoading(false);
            if (!user) return Notify(INotifyStatus.ERROR, "Invalid email and password");
            dispatch(authAction.setLogin(user))
        },3000);
    }



    return (
        <LoginView
            loading={loading}
            onLogin={_onLogin}
        />
    )
}

export default LoginScreen
