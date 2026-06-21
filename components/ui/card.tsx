import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { BlogProps, ProductProps } from "@/lib/types/content";

/* =====================================================
   SQUARE CARD — PRODUITS (AVEC PRIX)
===================================================== */
const SquareCard = ({
  product,
  className = "",
}: {
  product: ProductProps;
  className?: string;
}) => {
  return (
    <Link
      href={product.url}
      target="_blank"
      className={cn(
        "w-full h-fit border bg-popover backdrop-blur-sm rounded-xl p-2 gap-y-2 flex flex-col animate group cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-auto aspect-square rounded-lg bg-accent overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-transparent group-hover:bg-accent/60 z-10 transition" />
      </div>

      <div className="flex flex-col w-full">
        <h3 className="text-clamp text-popover-foreground font-medium">
          {product.name}
        </h3>
        <p className="text-clamp-sm text-muted-foreground">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

/* =====================================================
   RECTANGLE CARD — BLOG
===================================================== */
const RectangleCard = ({
  blog,
  className = "",
}: {
  blog: BlogProps;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 w-full gap-3 z-10 bg-popover rounded-xl p-3 border group animate cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-auto aspect-square rounded-lg bg-accent overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-transparent group-hover:bg-accent/60 z-10 transition" />
      </div>

      <div className="w-full h-auto aspect-square flex flex-col">
        <p className="text-clamp text-popover-foreground font-medium">
          {blog.title}
        </p>

        <div className="flex flex-col grow gap-y-2">
          <p className="text-muted-foreground text-clamp-sm line-clamp-3">
            {blog.description}
          </p>

          <div className="flex items-center gap-x-1 flex-wrap">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-muted-foreground text-clamp-sm leading-none"
              >
                {tag}
                {index < blog.tags.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>

          <Link
            href={blog.url}
            target="_blank"
            className="text-foreground font-medium underline text-clamp-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

/* =====================================================
   MINI CARD — PROJETS (SANS PRIX, PLUS PETIT)
===================================================== */
const MiniCard = ({
  project,
}: {
  project: {
    name: string;
    image: any;
    url: string;
    disabled?: boolean;
    comingSoon?: boolean;
    dimmed?: boolean;
  };
}) => {
  const isDisabled = project.disabled === true;
  const isComingSoon = project.comingSoon === true;
  const isDimmed = project.dimmed === true;
  const grayed = isDisabled || isDimmed;

  const CardContent = (
    <>
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={cn(
            "object-cover transition",
            isDisabled && "grayscale opacity-99"
          )}
        />
        {isComingSoon && (
          <span className="absolute top-1 right-1 rounded-full bg-[#009688] text-white text-[9px] leading-none px-1.5 py-0.5 font-medium">
            Bientôt
          </span>
        )}
      </div>

      <p
        className={cn(
          "mt-1 text-xs text-center",
          isDisabled ? "text-muted-foreground" : "text-foreground"
        )}
      >
        {project.name}
      </p>
    </>
  );

  // 🔒 CARTE DÉSACTIVÉE (fermée) ou ⏳ À VENIR → pas de lien
  if (isDisabled || isComingSoon) {
    return (
      <div
        className={cn(
          `flex flex-col items-center justify-center
          rounded-xl border bg-popover p-2 aspect-square`,
          isDisabled && "cursor-not-allowed opacity-60",
          isComingSoon && "cursor-default"
        )}
      >
        {CardContent}
      </div>
    );
  }

  // ✅ CARTE ACTIVE → cliquable
  return (
    <Link
      href={project.url}
      target="_blank"
      className="flex flex-col items-center justify-center
      rounded-xl border bg-popover p-2
      aspect-square
      hover:scale-[1.03] transition"
    >
      {CardContent}
    </Link>
  );
};



export { SquareCard, RectangleCard, MiniCard };
