import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  isOpen: boolean;
}

const Hamburger: FC<Props> = ({ isOpen }) => (
  <div className="relative size-8.5 z-50">
    <span
      className={cn(
        "hamburger-item top-[37%]",
        isOpen && "translate-y-1 rotate-45"
      )}
    />
    <span
      className={cn(
        "hamburger-item top-[62%]",
        isOpen && "-translate-y-1 -rotate-45"
      )}
    />
  </div>
);

export default Hamburger;
