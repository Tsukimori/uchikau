import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  EnvelopeIcon,
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  StarIcon,
  PlusIcon,
  XMarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import Cookie from "universal-cookie";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

export const CompanyNavgation = () => {
  const navigation = [
    {
      name: "ホーム",
      href: "/company/home",
      icon: HomeIcon,
      current: true,
    },
    {
      name: "メッセージ",
      href: "/company/message/list",
      icon: EnvelopeIcon,
      current: false,
    },

    {
      name: "物件登録",
      href: "/company/property/list",
      icon: PlusIcon,
      current: false,
    },
    // {
    //   name: "設定",
    //   href: "/company/myPage",
    //   icon: Cog6ToothIcon,
    //   current: false,
    // },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const cookie = new Cookie();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const logout = () => {
    cookie.remove("access_token", { path: "/" });
    router.push("/");
  };

  return (
    <div>
      <div className="flex h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://res.cloudinary.com/lariat/image/upload/c_scale,w_431/v1676525647/uchikau/uchikau_logo.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <ul className="space-y-1 px-2">
                        {navigation.map((item) => {
                          return (
                            <li
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-gray-500"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-4 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />

                              <Link href={item.href}>{item.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                    <div>
                      <button
                        className=" bg-sky-500 text-white text-xs py-2 px-4 rounded-3xl ml-8 mt-4"
                        onClick={logout}
                      >
                        ログアウト
                      </button>
                    </div>
                  </div>

                  <div className="flex  flex-shrink-0 border-t border-gray-200 p-4">
                    <Link href="/company/myPage/myPage">
                      <div className="flex items-center">
                        <div>
                          <Image
                            className=" inline-block rounded-full"
                            src="/mypage.png"
                            height={50}
                            width={50}
                            alt={"プロフィール画像"}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                            ウチカウホームズ　ご担当者 様
                          </p>
                          <Link
                            className=" bg-white border rounded-full text-xs font-medium py-1 px-4 "
                            href="/company/myPage/myPage"
                          >
                            編集
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-screen  flex-1 flex-col border-r border-gray-200 bg-gray-100 h-full">
              <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://res.cloudinary.com/lariat/image/upload/c_scale,w_431/v1676525647/uchikau/uchikau_logo.png"
                    alt="Your Company"
                  />
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <ul className="space-y-1 px-2">
                    {navigation.map((item) => {
                      return (
                        <li
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-xs font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 h-5 w-5"
                            )}
                            aria-hidden="true"
                          />
                          <Link href={item.href}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div>
                  <button
                    className=" bg-sky-500 text-white text-xs py-2 px-4 rounded-3xl ml-8 mt-4"
                    onClick={logout}
                  >
                    ログアウト
                  </button>
                </div>
              </div>

              <div className="flex flex-shrink-0 border-t border-gray-200 p-4 mt-8">
                <Link href="/company/myPage/myPage">
                  <div className="flex items-center">
                    <div>
                      <Image
                        className=" inline-block "
                        src="/devepro.jpg"
                        height={100}
                        width={100}
                        alt={"プロフィール画像"}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs font-medium text-gray-600 group-hover:text-gray-900">
                        ウチカウホームズ
                        <br /> ご担当者 様
                      </p>
                      <Link
                        className=" bg-white border rounded-full text-xs font-medium py-1 px-4 "
                        href="/company/myPage/myPage"
                      >
                        編集
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="md:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://res.cloudinary.com/lariat/image/upload/c_scale,w_1000/v1676525647/uchikau/uchikau_logo.png"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
