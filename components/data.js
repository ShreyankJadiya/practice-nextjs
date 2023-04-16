import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/432.png";
import benefitTwoImg from "../public/img/103.png";

const benefitOne = {
  title: "Your Business Employees",
  desc: "We are not a digital agency. We are the team of website experts who work as your employees for your business, to make your goals achievable.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Best Value",
      desc: "We carefully review and research each of the projects to make sure we deliver the best value to our clients.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Our Secret Recepie",
      desc: "We work on projects in an organized manner so that every project can be delivered on time. We dont believe in false promises.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Communication",
      desc: "We strongly believe in professionalism and we thoroughly communicate throughout the project journey to keep you informed on your project status.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What We Offer ?",
  desc: "We offer Web Development Services, Web Design Services, Ecommerce Development Services, Shopify Development, Custom Shopify Development, Wordpress Services and Anything you can imagine on web.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Shopify Experts",
      desc: "A Nimble team of designers and developers who breathe shopify all the time.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Custom Shopify Development",
      desc: "We do Custom solutions including B2B and headless storefronts",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Website Design / Development",
      desc: "Static Site ? No Worries, We got you !",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
