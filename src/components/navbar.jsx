import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import profileimage from '/assets/profile.jpg';
import { Link } from 'react-router-dom';

const initialNavigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'Projects', href: '/#projects', current: false },
  { name: 'Skills', href: '/#skills', current: false },
  { name: 'DSA/CP', href: '/#dsa', current: false },
  { name: 'Resume', href: '/resume', current: false },
  { name: 'Contact', href: '/#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleTabClick = (index) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item, idx) => ({
        ...item,
        current: idx === index,
      }))
    );
  };

  return (
    <Disclosure as="nav" className="fixed top-0 w-full bg-gray-800 z-50">
      {({ open }) => (
        <>
          <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {!open ? (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                <div
                  className={classNames(
                    "flex shrink-0 items-center sm:justify-start w-full sm:w-auto",
                    open ? "justify-center" : "justify-end",
                    "sm:justify-start"
                  )}
                >
                  <img
                    alt="Profile"
                    src={profileimage}
                    className="h-10 w-10 rounded-full"
                  />
                </div>

                <div className="hidden sm:ml-auto sm:flex sm:space-x-4">
                  {navigation.map((item, index) =>
                    item.href.startsWith('/projects') || item.href.startsWith('/resume') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => handleTabClick(index)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => handleTabClick(index)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, index) =>
                item.href.startsWith('/projects') || item.href.startsWith('/resume') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleTabClick(index)}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => handleTabClick(index)}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
