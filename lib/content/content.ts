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
import linkifylogo from "@/public/images/asset/linkifylogo.png";

// Purpose: Toggle shown content on the website.
const Toggle = {
  socials: true,
  bio: true,
  links: true,
  products: true,
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
  title: "SaaS Builder",
  description:
    "J'apprends à vibe coder des SaaS !",
  avatar: Avatar,
  url: "https://discord.gg/3WBVDMBJkb",
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





export const MiniProjects = [
  {
    name: "DotsDaily",
    image: "https://i.pinimg.com/1200x/11/e9/67/11e967262ec1cc94ba1484a32081a9cf.jpg",
    url: "https://dotsdaily.app",
    
  },
  {
    name: "Linkify",
    image: "https://i.pinimg.com/736x/a5/08/71/a508711adc44790fdf91833c2530f2cc.jpg",
    url: "https://benji7225.netlify.app/",

  },
  {
    name: "Edukidi",
    image: "https://i.pinimg.com/736x/dc/e0/7d/dce07d59c3797a9f3d046807f3f71e06.jpg",
    url: "https://edukidi.com",
  },
   {
    name: "TheRichest",
    image: "https://i.pinimg.com/736x/9c/0f/d4/9c0fd40ef08c0082bf5a6d6f8e386381.jpg",
    url: "https://therichest.app",
      disabled: true, // 👈 fermé
  },
   {
    name: "My HelpR",
    image: "https://i.pinimg.com/736x/4c/fb/e9/4cfbe9c29eea591433e125ab833bed75.jpg",
    url: "https://example.com",
      disabled: true, // 👈 fermé
  },
  {
    name: "Krow",
    image: "https://i.pinimg.com/736x/f1/77/63/f17763f6ee03afbfdb855f9897ef4068.jpg",
    url: "https://thekrow.app",
      disabled: true, // 👈 fermé
  },
];





// Purpose: Contains the values for the square cards on the website. Use to show ur products.
// Customize: You can add more products by copying the object and changing the values.
const Products: ProductProps[] = [
  {
    name: "Ce template",
    price: 5,
    image: "https://i.pinimg.com/736x/a5/08/71/a508711adc44790fdf91833c2530f2cc.jpg",
    url: "https://discord.gg/3WBVDMBJkb",
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
