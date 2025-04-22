import IconFB from "@/assets/icons/fb.svg";
import IconIG from "@/assets/icons/ig.svg";
import IconTT from "@/assets/icons/tt.svg";
import IconLIN from "@/assets/icons/lin.svg";

export const content = {
  navigation: [
    { label: "HELP CENTER", url: "help-center" },
    { label: "FAQ", url: "faq" },
    { label: "TERMS & PRIVACY", url: "terms-privacy" },
  ],
  social: [
    {
      url: "https://www.facebook.com/test",
      icon: <IconFB className="[&>path]:fill-icon" />,
    },
    {
      url: "https://www.instagram.com/test",
      icon: <IconIG className="[&>path]:fill-icon" />,
    },
    {
      url: "https://www.twitter.com/test",
      icon: <IconTT className="[&>path]:fill-icon" />,
    },
    {
      url: "https://www.linkedin.com/test",
      icon: <IconLIN className="[&>path]:fill-icon" />,
    },
  ],
};
