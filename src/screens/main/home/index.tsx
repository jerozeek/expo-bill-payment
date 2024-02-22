import HomeScreenView from "./view";
import {useNavigation} from "@react-navigation/native";
import {IAppNavigationProps} from "../../../utils/interfaces";
import {useDispatch} from "react-redux";
import {authAction} from "../../../redux/slices/authSlices";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const _onLogout = () => {
        dispatch(authAction.setLogout());
    }

    return <HomeScreenView onLogout={_onLogout} />
}

export default HomeScreen;
