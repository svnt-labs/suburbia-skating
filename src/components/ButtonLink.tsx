import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export type ButtonProps = PrismicNextLinkProps & {
  color?: "orange" | "purple" | "lime";
  size?: "sm" | "md" | "lg";
  icon?: "cart" | "skateboard" | "plus";
};

export function ButtonLink({
  color = "orange",
  size = "md",
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <PrismicNextLink
  prefetch={false as false | null | undefined} // 👈 force the correct type
  className={clsx(
    "button-cutout group mx-4 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
    size === "sm" && "gap-2.5 py-2 text-base",
    size === "lg" && "gap-3.5 py-4 text-xl"
  )}
  {...props}
>
  {children}
</PrismicNextLink>

  );
}

function SkateboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 139 80">
      <path
        fill="#000"
        fillOpacity="0.8"
        d="M111.7 74.4c2.8.6 6.7 0 9.1-2.5..."
      ></path>
    </svg>
  );
}
