import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';
import Web3ModalProvider from './Web3ModalProvider';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Web3ModalProvider>
      <Home />
      </Web3ModalProvider>
    </Default>
  );
};

export default HomePage;
