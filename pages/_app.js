import Header from "../sections/Header";
import "../styles/globals.css";
import Footer from "../sections/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
