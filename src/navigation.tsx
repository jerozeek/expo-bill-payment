import {NavigationContainer} from '@react-navigation/native';
import React, { FC } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {  MainStacksParamList, AuthStacksParamList} from "./utils/interfaces";
import LoginScreen from "./screens/auth/login";
import HomeScreen from "./screens/main/home";
import {SCREEN_OPTIONS} from "./config/constant";
import AirtimeScreen from "./screens/main/airtime";
import TransactionSuccessScreen from "./screens/main/success";
import ElectricityScreen from "./screens/main/electricity";
import SelectElectricityScreen from "./screens/main/selectElectricity";
import InternetScreen from "./screens/main/internet";

const MainStacks = createNativeStackNavigator<MainStacksParamList>();
const AuthStacks = createNativeStackNavigator<AuthStacksParamList>();

export const AuthenticationNavigation: FC = () => {
    return (
        <NavigationContainer>
            <AuthStacks.Navigator
                initialRouteName={"LoginScreen"}
                screenOptions={SCREEN_OPTIONS}
            >
                <AuthStacks.Screen name="LoginScreen" component={LoginScreen} />
            </AuthStacks.Navigator>
        </NavigationContainer>
    );
};

export const AppNavigation: FC = () => {
    return (
        <NavigationContainer>
            <MainStacks.Navigator
                initialRouteName={"HomeScreen"}
                screenOptions={SCREEN_OPTIONS}
            >
                <MainStacks.Screen name="HomeScreen" component={HomeScreen} />
                <MainStacks.Screen name="InternetScreen" component={InternetScreen} />
                <MainStacks.Screen name="SelectElectricityScreen" component={SelectElectricityScreen} />
                <MainStacks.Screen name="TransactionSuccessScreen" component={TransactionSuccessScreen} />
                <MainStacks.Screen name="ElectricityScreen" component={ElectricityScreen} />
                <MainStacks.Screen name="AirtimeScreen" component={AirtimeScreen} />
            </MainStacks.Navigator>
        </NavigationContainer>
    );
};
