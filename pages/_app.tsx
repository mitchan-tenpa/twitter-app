import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {

  const persistor = persistStore(store); //この記述消すとRedux DevToolsのStateが消える
  
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>

    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <ThemeProvider attribute='class'>
    //       <Component {...pageProps} />
    //     </ThemeProvider>
    //   </PersistGate>
    // </Provider>
  )
}

export default MyApp;
