import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const Desktop = ({ links, hoveredIndex, setHoveredIndex, router }) => {
  return (
    <>
      {links.map((navLink, index) => (
        <NextLink
          href={navLink.link}
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0  transform bg-gray-50 dark:bg-zinc-900"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <span
            className={`relative z-10 ${
              router.asPath === navLink.link
                ? "text-teal-600"
                : "text-gray-600 dark:text-gray-50"
            }`}
          >
            {navLink.name}
          </span>
          {router.asPath === navLink.link && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          )}
        </NextLink>
      ))}
    </>
  );
};
