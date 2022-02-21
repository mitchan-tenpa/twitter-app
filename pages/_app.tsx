import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp;
