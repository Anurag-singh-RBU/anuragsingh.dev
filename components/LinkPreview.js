"use client";

import { Transition } from "@headlessui/react";
import cx from "clsx";
import Image from "next/image";
import { encode } from "qss";
import React from "react";

export const LinkPreview = ({ children, url, className }) => {
  const width = 200;
  const height = 125;
  const quality = 50;

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width * 3,
    "viewport.height": height * 3,
  });

  const src = `https://api.microlink.io/?${params}`;

  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a className={className} href={url}>
        {children}
      </a>

      {/* preload hidden image */}
      {isMounted && (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            priority={true}
            alt="preview"
          />
        </div>
      )}

      <Transition
        show={isOpen}
        appear={true}
        enter="transform transition duration-300 origin-bottom ease-out"
        enterFrom="opacity-0 translate-y-2 scale-0"
        enterTo="opacity-100 translate-y-0 scale-100"
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 shadow-xl rounded-xl z-50"
      >
        <a
          href={url}
          className="block p-1 bg-white border border-transparent shadow rounded-xl hover:border-pink-500"
          style={{ fontSize: 0 }}
        >
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            priority={true}
            className="rounded-lg"
            alt="preview"
          />
        </a>
      </Transition>
    </div>
  );
};
