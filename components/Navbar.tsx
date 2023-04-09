import {
  faBars,
  faBicycle,
  faClock,
  faEnvelope,
  faHome,
  faMap,
  faParagraph,
  faSign,
  faWarehouse,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", path: "/", icon: <FontAwesomeIcon icon={faHome} /> },
  { name: "Angebote", path: "/angebote", icon: <FontAwesomeIcon icon={faSign} /> },
  { name: "Öffnungszeiten", path: "/oeffnungszeiten", icon: <FontAwesomeIcon icon={faClock} /> },
  { name: "Kontakt", path: "/kontakt", icon: <FontAwesomeIcon icon={faEnvelope} /> },
  { name: "Marken", path: "/marken", icon: <FontAwesomeIcon icon={faWarehouse} /> },
  {
    name: "JobRad",
    path: "/jobrad",
    icon: <Image width={16} height={16} className="inline-block" src="/jobrad-icon.png" alt="" />,
  },
  {
    name: "Bikeleasing",
    path: "/bikeleasing",
    icon: <Image width={16} height={16} className="inline-block" src="/bikeleasing-icon.png" alt="" />,
  },
  { name: "Anfahrt", path: "/anfahrt", icon: <FontAwesomeIcon icon={faMap} /> },
  { name: "Impressum", path: "/impressum", icon: <FontAwesomeIcon icon={faParagraph} /> },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faX} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="no-underline" href="/">
                  <div className="flex flex-shrink-0 items-center">
                    <FontAwesomeIcon icon={faBicycle} className="inline-block h-8 w-auto text-gray-300 lg:hidden" />
                    <FontAwesomeIcon icon={faBicycle} className="hidden h-8 w-auto text-gray-300 lg:inline-block" />
                    <span className="font-logo hidden h-8 w-auto px-3 text-2xl text-gray-300 lg:inline-block">
                      Fahrrad Strutt
                    </span>
                  </div>
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:block sm:pr-0">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={classNames(
                      item.path == router.asPath
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  className={classNames(
                    item.path == router.asPath
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium no-underline"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
