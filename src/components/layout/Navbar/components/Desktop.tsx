import IconLogo from "@/assets/icons/estatery.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menuItems } from "./content";

const Desktop = () => (
  <nav className="hidden lg:flex border-b py-8 px-16 border-base-100 border-[1.5px]  justify-between">
    <div className="flex gap-1 items-center">
      <IconLogo width={32} height={32} />
      <p className="font-bold text-xl">Estatery</p>
    </div>
    <ul className="flex gap-14.5 items-center">
      {menuItems.map((item) => (
        <li key={`${item}-key`} className="font-medium">
          <Link href={item} className="smooth-underline">
            {item}
          </Link>
        </li>
      ))}
    </ul>
    <div className="flex gap-4.5">
      <Button variant="secondary">Login</Button>
      <Button>Sing up</Button>
    </div>
  </nav>
);

export default Desktop;
