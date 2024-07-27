// _app.tsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WagmiProvider } from 'wagmi';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import config from './config'; // Ensure this path is correct

// Chakra UI theme configuration
const chakraConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config: chakraConfig });

// Main application component
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <WagmiProvider config={config}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </WagmiProvider>
      {/* Add more providers as needed */}
    </ChakraProvider>
  );
};

export default MyApp;
