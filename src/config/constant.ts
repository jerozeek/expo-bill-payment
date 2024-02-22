import {ICON} from "../utils/icon";
import {IAirtimeAmounts, INetworkServiceProvider, IBillers, IBillPaymentList, ISelectItem} from "../utils/interfaces";

export const SCREEN_OPTIONS = {
    headerShown: false,
    presentation: 'card',
    animation: 'slide_from_right',
    gestureDirection: 'horizontal',
    headerBackTitleVisible:false
} as const


export const BILL_PAYMENT_LIST: IBillPaymentList[] = [
    {
        id: 1,
        label: 'Electricity',
        icon: ICON.electricity,
        screen: 'ElectricityScreen'
    },
    {
        id: 2,
        label: 'Airtime',
        icon: ICON.phone,
        screen: 'AirtimeScreen'
    },
    {
        id: 3,
        label: 'Internet',
        icon: ICON.internet,
        screen: 'InternetScreen'
    },
]

export const AIRTIME_SERVICE_PROVIDER: INetworkServiceProvider[] = [
    {
        id:1,
        name: 'mtn',
        icon: ICON.mtn
    },
    {
        id:2,
        name: 'airtel',
        icon: ICON.airtel
    },
    {
        id:3,
        name: '9mobile',
        icon: ICON.etisalat
    },
    {
        id:4,
        name: 'glo',
        icon: ICON.glo
    },
]


export const AIRTIME_AMOUNTS: IAirtimeAmounts[] = [
    {
        id: 1,
        amount: 100
    },
    {
        id: 2,
        amount: 500
    },
    {
        id: 3,
        amount: 1000
    },
    {
        id: 4,
        amount: 2000
    },
    {
        id: 5,
        amount: 3000
    },
]

export const BILLERS: IBillers[] = [
    {
        id:1,
        name: 'Ikeja Electric - IKEDC',
        icon: ICON.electricity
    },
    {
        id:2,
        name: 'Abuja Electricity - AEDC',
        icon: ICON.electricity
    },
    {
        id:3,
        name: 'KEDCO - Kano Electric',
        icon: ICON.electricity
    },
    {
        id:4,
        name: 'Eko Electric',
        icon: ICON.electricity
    },
    {
        id:5,
        name: 'PHED - Port Harcout',
        icon: ICON.electricity
    },
    {
        id:6,
        name: 'Jos Electric - JED',
        icon: ICON.electricity
    },
    {
        id:7,
        name: 'Kaduna Electric - KAEDCO',
        icon: ICON.electricity
    },
    {
        id:8,
        name: 'Enugu Electric - EEDC',
        icon: ICON.electricity
    },
    {
        id:9,
        name: 'Ibadan Electricity - IBEDC',
        icon: ICON.electricity
    },
    {
        id:10,
        name: 'Benin Electricity - BEDC',
        icon: ICON.electricity
    },

]


export const SERVICES: ISelectItem[] = [
    {
        id:1,
        name: "7GB FOR 7 DAYS",
    },
    {
        id: 2,
        name: "2.5GB FOR 2 DAYS"
    },
    {
        id: 3,
        name: "3GB + YOUTUBE DATA FOR 1 MONTH"
    },
    {
        id: 4,
        name: "5GB FOR 7 DAYS"
    }
]

export const GET_SERVICE_PRICES = [
    {
        id: 1,
        amount: 5000,
        name: "7GB FOR 7 DAYS"
    },
    {
        id: 2,
        amount: 1000,
        name: "2.5GB FOR 2 DAYS"
    },
    {
        id: 3,
        amount: 900,
        name: "3GB + YOUTUBE DATA FOR 1 MONTH"
    },
    {
        id: 4,
        name: "5GB FOR 7 DAYS",
        amount: 7000,
    }
]
