import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = props => (
  <div>
    <Head>
      <title>Currency Prices</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
