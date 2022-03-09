import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from '../src/Auth';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <AuthProvider>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp;
