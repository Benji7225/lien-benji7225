// Type: TypeScript typesafe file.
import {
  ProductProps,
  LinkProps,
  SocialProps,
  ToolProps,
  BlogProps,
  BioProps,
} from "../types/content";

// Social Icons
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandVscode,
} from "react-icons/tb";

// Tool brand icons
import {
  SiClaude,
  SiGithub,
  SiSupabase,
  SiVercel,
  SiNotion,
  SiCanva,
} from "react-icons/si";

// Link Icons
import { BiDollar } from "react-icons/bi";

// Import your avatar here
import Avatar from "@/public/images/asset/favicon benji.png";

// Purpose: Toggle shown content on the website.
const Toggle = {
  socials: true,
  bio: true,
  links: true,
  tools: true,
  products: false,
  blogs: false,
};

// MAKE ALL FALSE ON PRODUCTION
const devMode = {
  template: false,
};

// Purpose: Contains your bio information.
const Bio: BioProps = {
  name: "benji",
  title: "Indie maker · 20 ans",
  description: "Je crée des apps mobiles et web.",
  avatar: Avatar,
  url: "https://www.snapchat.com/add/benji7225",
};

// Purpose: Contains your social media links.
const Socials: SocialProps[] = [
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

// Purpose: Big buttons (links I want to highlight).
const Links: LinkProps[] = [
  {
    name: "Aktionnaire",
    url: "https://sparklp.co/5849b324/",
    subtext: "La newsletter que je lis tous les jours",
    icon: BiDollar,
  },
];

// Purpose: The tools I actually use day to day.
const Tools: ToolProps[] = [
  {
    name: "Claude",
    url: "https://claude.com/claude-code",
    icon: SiClaude,
  },
  {
    name: "VS Code",
    url: "https://code.visualstudio.com",
    icon: TbBrandVscode,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: SiGithub,
  },
  {
    name: "Supabase",
    url: "https://supabase.com",
    icon: SiSupabase,
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    icon: SiVercel,
  },
  {
    name: "Notion",
    url: "https://notion.so",
    icon: SiNotion,
  },
  {
    name: "Canva",
    url: "https://canva.com",
    icon: SiCanva,
  },
];

// Purpose: The project grid (square mini cards).
// - actif (couleur, cliquable) : pas de flag
// - dimmed : grisé MAIS cliquable
// - disabled : grisé, pas cliquable (fermé / jamais shippé)
// - comingSoon : badge "Bientôt", pas cliquable
export const MiniProjects = [
  {
    name: "Appolyn",
    image: "/images/asset/appolyn.png",
    url: "https://appolyn.io",
  },
  {
    name: "Vision",
    image: "/images/asset/vision.png",
    url: "https://apps.apple.com/app/id6780281756",
  },
  {
    name: "DotsDaily",
    image: "/images/asset/dotsdaily.png",
    url: "https://dotsdaily.app",
    dimmed: true, // grisé mais cliquable
  },
  {
    name: "3MN",
    image: "/images/asset/mindgate.png",
    url: "",
    disabled: true,
  },
  {
    name: "Creator AI",
    image: "/images/asset/creatoraitools.png",
    url: "",
    disabled: true,
  },
  {
    name: "Edukidi",
    image:
      "https://i.pinimg.com/736x/10/39/e9/1039e9bc2218835d2a8b9d8642867ee2.jpg",
    url: "https://edukidi.com",
    disabled: true,
  },
  {
    name: "TheRichest",
    image:
      "https://i.pinimg.com/736x/9c/0f/d4/9c0fd40ef08c0082bf5a6d6f8e386381.jpg",
    url: "https://therichest.app",
    disabled: true,
  },
  {
    name: "My HelpR",
    image:
      "https://i.pinimg.com/736x/4c/fb/e9/4cfbe9c29eea591433e125ab833bed75.jpg",
    url: "https://example.com",
    disabled: true,
  },
  {
    name: "Krow",
    image:
      "https://i.pinimg.com/736x/f1/77/63/f17763f6ee03afbfdb855f9897ef4068.jpg",
    url: "https://thekrow.app",
    disabled: true,
  },
];

// Kept for the template (not shown).
const Products: ProductProps[] = [];
const Blogs: BlogProps[] = [];

export { Links, Tools, Products, Socials, Blogs, Toggle, devMode, Bio };
