import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left font-bold text-custom-blue rounded-lg bg-custom-light-gray hover:bg-custom-light-blue focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-custom-blue dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-custom-blue dark:text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Do you offer revisions to the projects?",
    answer: "Yes, we offer unlimited revisions on our work if you are not satisfied.",
  },
  {
    question: "Do you offer web design services?",
    answer: "Yes, we have team of designers who design the wireframes and UI for your websites",
  },
  {
    question: "What is your refund policy?",
    answer: "We dont offer refund for our services. However, If you're unhappy with your purchase for any reason, email us to dicuss what went wrong, we will go above and beyond to fix your projects.",
  },
  {
    question: "Do you offer website performance / site speed issues? ",
    answer:  "Yes, we offer website performance  / site speed issues. Please reachout to us to get a review of your site report and where we can help you to improve.",
  },
  {
    question: "Do you offer Hourly Services for web development ?",
    answer:  "Yes, we are your business employees, we offer hourly services, we assign one of our developer to your project and only charge you for the amount of work done. Please contact us to learn more.",
  },
];
