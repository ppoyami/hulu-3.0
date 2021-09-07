import Header from 'components/Header';
import GlobalStyles from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
