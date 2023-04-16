import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    {name:"About", href: "/about"},
    {name: "Services", href:"/services"},
    {name: "Shopify", href:"/shopify"},
    {name:"Projects", href:"/projects"},
    {name:"Blog", href:"/blog"}
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-extrabold text-custom-blue dark:text-gray-100">
                    <span>
                      <img
                        src="/img/thesjlogo.svg"
                        alt="SJ Logo"
                        width="500"
                        height="500"
                        className="w-12"
                      />
                    </span>
                    <span>Development</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-custom-blue rounded-md lg:hidden hover:text-custom-medium-blue focus:text-custom-medium-blue focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <a className="w-full px-4 py-2 -ml-4 font-bold text-custom-blue rounded-md dark:text-gray-300 hover:text-custom-medium-blue focus:text-custom-medium-blue focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <Link href="/">
                      <a className="w-full px-6 py-2 mt-3 text-center text-custom-blue bg-custom-light-blue rounded-md lg:ml-5 font-bold">
                        Get Quote
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href}>
                  <a className="inline-block px-4 py-2 text-lg font-bold text-custom-blue no-underline rounded-md dark:text-gray-200 hover:text-custom-medium-blue focus:text-custom-medium-blue focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/">
            <a className="px-6 py-2 text-white bg-custom-blue rounded-md md:ml-5 font-bold">
              Get Quote
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
