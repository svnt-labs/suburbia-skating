import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type ButtonLinkProps = {
  children: React.ReactNode;
  size?: "sm" | "lg";
} & React.ComponentProps<typeof PrismicNextLink>;

export function ButtonLink({ children, size, ...props }: ButtonLinkProps) {
  return (
    <PrismicNextLink
      prefetch={false as false | null | undefined}
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
