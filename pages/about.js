import Head from "next/head";
import Announcement from "../components/announcement";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";


export default function About() {
  return (
    <>
      <Head>
        <title>About Us - The SJ Development</title>
        <meta
          name="description"
          content="Best Website Developers in Canada with expertise in Shopify, Ecommerce and the static websites."
        />
        <link rel="icon" href="/img/thesjlogo.svg" />
      </Head>
      <Announcement />
      <Navbar />
     
      
      <Footer />
      <PopupWidget />
    </>
  );
}
