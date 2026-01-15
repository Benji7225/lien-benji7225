console.log("MA PAGE RENDU");

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Components
import DotPattern from "@/components/magicui/dot-pattern";
import { Button, DarkMode } from "@/components/ui/button";
import { RectangleCard, MiniCard } from "@/components/ui/card";

// Datas
import {
  Blogs,
  Links,
  Socials,
  Toggle,
  Bio,
  MiniProjects,
} from "@/lib/content/content";

export default function Home() {
  return (
    <main className="flex h-full grow flex-col items-center justify-between animate sm:py-24">
      <section
        id="home"
        className="flex flex-col items-center justify-center w-full sm:max-w-sm h-full grow px-6 py-6 gap-y-3 relative bg-background animate"
      >
        {/* Magic UI */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] animate"
          )}
        />

        {/* Dark mode toggle */}
        <DarkMode />

        {/* Header */}
        <div className="flex w-full items-center justify-center gap-x-3 mb-4 z-10">
          <div className="w-16 aspect-square relative rounded-full overflow-hidden p-1 border bg-[#009688]">
            <Image
              src={Bio.avatar}
              alt={`${Bio.name}'s avatar`}
              className="object-cover"
              fill
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-clamp font-medium text-foreground">
              {Bio.name}
            </h1>
            <p className="text-clamp-sm text-muted-foreground">
              {Bio.title}
            </p>
          </div>
        </div>

        {/* Socials */}
        {Toggle.socials && (
          <div className="flex w-full justify-center gap-x-3 mb-4 flex-wrap z-10">
            {Socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                aria-label={`Go to ${social.url}`}
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </Link>
            ))}
          </div>
        )}

        {/* Bio */}
        {Toggle.bio && (
          <div className="flex flex-col gap-y-2 w-full p-2 rounded-xl border bg-popover backdrop-blur-sm z-10">
            <p className="text-clamp-sm text-popover-foreground">
              {Bio.description}
            </p>

            <Link
              href={Bio.url}
              className="bg-[#009688] text-white border border-[#009688] w-full py-2 rounded-lg hover:bg-[#00796B] text-center font-medium text-clamp-sm"
            >
              Viens discuter
            </Link>
          </div>
        )}

        {/* Links */}
        {Toggle.links &&
          Links.map((link, index) => (
            <Button
              key={index}
              subtext={link.subtext}
              icon={<link.icon size={20} />}
              href={link.url}
            >
              {link.name}
            </Button>
          ))}

        {/* MINI PROJECTS */}
        <div className="grid grid-cols-4 w-full gap-2 z-10 mt-2">
          {MiniProjects.map((project, index) => (
            <MiniCard key={index} project={project} />
          ))}
        </div>

        {/* Blog */}
        {Toggle.blogs &&
          Blogs.map((blog, index) => (
            <RectangleCard key={index} blog={blog} />
          ))}
      </section>
    </main>
  );
}
