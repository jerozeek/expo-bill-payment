import { ReactNode } from "react";
import {ImageSourcePropType, ViewStyle} from "react-native";
import {TLoginSchemaType} from "./rules";
import {NavigationProp} from "@react-navigation/native";


export type AuthStacksParamList = {
    LoginScreen: undefined
}

export type MainStacksParamList = {
    HomeScreen: undefined
    TransactionSuccessScreen: { amount: number }
    AirtimeScreen: undefined
    InternetScreen: undefined
    ElectricityScreen: undefined
    SelectElectricityScreen: { biller: string, billerType: string }
}

export type IAppNavigationProps    = NavigationProp<MainStacksParamList>


export interface TRestProps {
    isScrollable?: boolean
    style?: ViewStyle
}

export type TScreenProps = {
    isScrollable?: boolean;
    style?: ViewStyle | ViewStyle[] | any;
    children?: ReactNode;
}

export type TScreenContainerProps = {
    styles?: ViewStyle;
    children?: ReactNode;
    backNavigation?: boolean;
    headerText?: string,
    subText?: string
}

export type TLoginView = {
    onLogin: (data: TLoginSchemaType) => void;
    loading: boolean;
}

export interface IUser {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export enum INotifyStatus {
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface IBillPaymentList  {
    id: number,
    label: string,
    screen: keyof MainStacksParamList,
    icon: ImageSourcePropType
}

export interface INetworkServiceProvider {
    id: number,
    name: string,
    icon: ImageSourcePropType
}

export interface IElectricityProvider {
    biller: string,
    billType: string,
    meterNo: string,
}

export enum FONT_FAMILY {
    Bold= 'Quicksand_700Bold',
    Semi_Bold= 'Quicksand_600SemiBold',
    Medium= 'Quicksand_500Medium',
    Regular= 'Quicksand_400Regular',
    Light= 'Quicksand_300Light',
}

export interface IAirtimeAmounts {
    id: number,
    amount: number
}

export interface IBillers {
    id:number,
    name: string,
    icon: ImageSourcePropType
}

export interface ISelectItem {
    id: number,
    name: string,
}

