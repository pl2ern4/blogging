import ApplicationTheme from '../context/application-theme';
import ApplicationContext from  '../context/application-context';
import SessionProvider from '../context/session-context';

function MyApp({ Component, pageProps }) {

  return (
    <SessionProvider pageProps={pageProps}>
      <ApplicationContext>
        <ApplicationTheme>
          <Component {...pageProps} />
        </ApplicationTheme>
      </ApplicationContext>
    </SessionProvider>
  );
}

export default MyApp
