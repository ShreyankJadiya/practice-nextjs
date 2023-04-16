import Head from "next/head";
import Announcement from "../components/announcement";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>The SJ Development</title>
        <meta
          name="description"
          content="Best Website Developers in Canada with expertise in Shopify, Ecommerce and the static websites."
        />
        <link rel="icon" href="/img/thesjlogo.svg" />
      </Head>
      <Announcement />
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="WE BREATHE SHOPIFY"
        title="One Stop Shopify Solutions">
        We are experts of shopify who have worked for numerous brands developing custom solutions 
        to setting up their store. We also maintain their websites and offer full support after development. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="HOW WE WORK"
        title="Our Design / Development Process">
        We carefully review each project and move according to the best industry standards. We take pride in each project and our goal is to deliver the best results
        that makes your goals true.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="OUR PROJECTS"
        title="Learn about our project case studies">
        Take a glance at some of our top notch projects and learn more to read our case studies for these projects to see how we work.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="QUESTIONS" title="Frequently Asked Questions">
        We Know that everyone has questions in mind and thats okay. Here is some of the answers to most common questions asked to us.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
