import Link from "next/link";
import { menuItems } from "./content";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

const Desktop = () => (
  <nav className="hidden lg:flex border-b py-8 px-16 border-base-100 border-[1.5px]  justify-between">
    <Logo />
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
