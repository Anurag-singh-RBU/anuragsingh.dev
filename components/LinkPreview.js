"use client";

import { FOCUS_VISIBLE_OUTLINE, GRADIENT_LINK } from "@/lib/constants";
import { Portal, Transition } from "@headlessui/react";
import * as HoverCard from "@radix-ui/react-hover-card";
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
    <>
      {isMounted && (
        <Portal>
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
        </Portal>
      )}

      <HoverCard.Root
        openDelay={50}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <HoverCard.Trigger asChild>
          <a className={className} href={url}>
            {children}
          </a>
        </HoverCard.Trigger>

        <HoverCard.Portal>
          <HoverCard.Content side="top" align="center" sideOffset={10}>
            <Transition
              show={isOpen}
              appear={true}
              enter="transform transition duration-300 origin-bottom ease-out"
              enterFrom="opacity-0 translate-y-2 scale-0"
              enterTo="opacity-100 translate-y-0 scale-100"
              className="shadow-xl rounded-xl"
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
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
};
