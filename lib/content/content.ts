console.log("test 1/2, test 1/2")
import BuildBlueLogo from "@/public/images/asset/buildblue.png";

// Type: TypeScript typesafe file.
import {
  ProductProps,
  LinkProps,
  SocialProps,
  BlogProps,
  BioProps,
} from "../types/content";

// Social Icons (Remove if not needed, this can improve performance.)
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandYoutube,
} from "react-icons/tb";

// Link Icons (Remove if not needed, this can improve performance.)
import {
  BiArrowToBottom,
  BiRightTopArrowCircle,
  BiDollar,
  BiLayout,
  BiExpandHorizontal,
} from "react-icons/bi";

// Import your avatar here
import Avatar from "@/public/images/asset/favicon benji.png";

// Purpose: Toggle shown content on the website.
const Toggle = {
  socials: true,
  bio: true,
  links: true,
  products: false,
  blogs: false,
};

// MAKE ALL FALSE ON PRODUCTION
const devMode = {
  template: false,
};

// Purpose: Contains your bio information.
// Customize: You can change the values to your own.
// Avatar: Import your avatar at the top of the file or use a URL.
const Bio: BioProps = {
  name: "benji",
  title: "Fondateur SaaS",
  description:
    "Je vibe code des SaaS avec passion",
  avatar: Avatar,
  url: "https://discord.com/channels/1436721375162269860/1436721375954866231",
};

// Purpose: Contains your social media links.
// Customize: You can add more social links by copying the object and changing the values.
// Icons: I use react-icons/tb (Tabler Icons) for the icons here.
// Explore more icons here (https://react-icons.github.io/react-icons/)
const Socials: SocialProps[] = [
  {
    url: "/",
    icon: TbBrandYoutube,
  },
  {
    url: "https://x.com/benji7225",
    icon: TbBrandTwitter,
  },
  {
    url: "https://www.linkedin.com/in/benji7225/",
    icon: TbBrandLinkedin,
  },
  {
    url: "https://www.instagram.com/benji.e__/",
    icon: TbBrandInstagram,
  },
];

// Purpose: Contains the links for the website.
// Customize: You can add more links by copying the object and changing the values.
// Icons: I used react-icons/bi (BoxIcons) for the icons here.
// Explore more icons here (https://react-icons.github.io/react-icons/)
const Links: LinkProps[] = [
  {
    name: "Bolt",
    url: "https://bolt.new/?rid=hh7zsy",
    subtext: "L'outil que j'utilise pour vibe coder mes SaaS",
    icon: BiExpandHorizontal,
  },
  {
    name: "Opal",
    url: "https://applink.opal.so/invite-friend?rc=PYXWY&rId=JlcZHdCps0Qsm6HsEUdOU35Cix82&rNme=benji7225",
    subtext: "Mon booster de productivité",
    icon: BiRightTopArrowCircle,
  },
  {
    name: "Aktionnaire",
    url: "https://sparklp.co/5849b324/",
    subtext: "La Newsletter gratuite que je suis",
    icon: BiDollar,
  },
 
];

// Purpose: Contains the values for the square cards on the website. Use to show ur products.
// Customize: You can add more products by copying the object and changing the values.
const Products: ProductProps[] = [
  {
    name: "Product 1",
    price: 36,
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
  },
  {
    name: "Product 2",
    price: 18,
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
  },
];

// Purpose: Contains the values for the rectangle cards on the website. Use to show ur blog posts.
// Customize: You can add more blogs by copying the object and changing the values.
const Blogs: BlogProps[] = [
  {
    title: "Blog 1",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
    tags: ["Personal"],
  },
  {
    title: "Blog 2",
    description: "Lorem ipsum dolor sit amet.",
    image: "https://ui.shadcn.com/placeholder.svg",
    url: "/",
    tags: ["UI", "UX"],
  },
];

export { Links, Products, Socials, Blogs, Toggle, devMode, Bio };
