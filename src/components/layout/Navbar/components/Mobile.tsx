import Hamburger from "./Hamburger";
import { Fragment } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { RemoveScroll } from "react-remove-scroll";
import { menuItems } from "./content";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

const Mobile = () => (
  <nav className="py-4 px-8 flex items-center justify-between lg:hidden z-50">
    <Logo />
    <div className="absolute left-0 top-0 z-30 w-full lg:hidden">
      <Popover>
        {({ open }) => {
          return (
            <>
              <div className="flex h-[72px] w-full items-center justify-end px-6">
                <PopoverButton
                  name="Menu"
                  className="size-[30px] flex aspect-square items-center justify-center rounded-lg outline-none transition-colors"
                >
                  <Hamburger isOpen={open} />
                </PopoverButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition-all ease-in duration-300"
                enterFrom="h-0"
                enterTo="h-content-mobile"
                leave="transition-all ease-out duration-200"
                leaveFrom="h-content-mobile"
                leaveTo="h-0"
              >
                <PopoverPanel className="z-50 mb-auto w-full max-w-full overflow-hidden">
                  <RemoveScroll className="h-screen backdrop-blur-2xl">
                    <div className="px-8 pt-12 pb-8">
                      <ul className="flex w-full flex-col gap-8.5">
                        {menuItems.map((item, index) => (
                          <li
                            key={`li-menu-${index}-${item}`}
                            className="h6 list-none text-dark text-2.5xl font-medium"
                          >
                            {item && (
                              <Link href={item} className="block w-full">
                                {item}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-4.5 mx-auto pt-[86px]">
                        <Button variant="secondary">Login</Button>
                        <Button>Sing up</Button>
                      </div>
                    </div>
                  </RemoveScroll>
                </PopoverPanel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </div>
  </nav>
);

export default Mobile;
