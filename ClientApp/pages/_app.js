import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { NavMenu } from '../components/NavMenu/index';
import Container from 'react-bootstrap/Container';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavMenu />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
