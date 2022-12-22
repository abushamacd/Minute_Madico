import Header from "../sections/Header";
import "../styles/globals.css";
import Footer from "../sections/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default MyApp;
