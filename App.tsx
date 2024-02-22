import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand';
import Toast from 'react-native-toast-message';
import React from "react";
import {AppNavigation} from "./src/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from 'react-redux'
import {store} from "./src/redux/store";
import SplashScreen from "./src/screens/splash";

export default function App() {

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const client = new QueryClient();


  return  (
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <SplashScreen />
          <Toast />
        </QueryClientProvider>
      </Provider>
  )
}
