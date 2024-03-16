import "../styles/globals.css";
import { Toaster } from "sonner";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster richColors />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
