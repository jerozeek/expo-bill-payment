import SplashScreenView from "./splashScreenView";
import {useEffect, useState} from "react";
import {AppNavigation, AuthenticationNavigation} from "../../navigation";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const SplashScreen = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const {  isLoggedIn} = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return loading ? <SplashScreenView /> : isLoggedIn ? <AppNavigation /> : <AuthenticationNavigation />
}



export default SplashScreen;
