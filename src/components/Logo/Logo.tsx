import IconLogo from "@/assets/icons/estatery.svg";

const Logo = () => (
  <div className="flex gap-1 items-center h-10 lg:h-fit">
    <IconLogo width={32} height={32} />
    <p className="font-bold text-xl">Estatery</p>
  </div>
);

export { Logo };
