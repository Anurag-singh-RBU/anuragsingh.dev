import { FOCUS_VISIBLE_OUTLINE, GRADIENT_LINK } from "@/lib/constants";
import { Portal, Transition } from "@headlessui/react";
import * as HoverCard from "@radix-ui/react-hover-card";
import cx from "clsx";
import Image from "next/image";
import { encode } from "qss";
import React from "react";

export const StaticLinkPreview = ({ children, url }) => {
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
            />
          </div>
        </Portal>
      )}

      <HoverCard.Root openDelay={50}>
        <HoverCard.Trigger
          className={cx(GRADIENT_LINK, FOCUS_VISIBLE_OUTLINE, "cursor-pointer")}
        >
          {children}
        </HoverCard.Trigger>

        <HoverCard.Portal>
          <HoverCard.Content
            side="top"
            align="center"
            sideOffset={10}
            className="shadow-xl rounded-xl bg-white border p-1"
          >
            <Transition
              appear
              show={true}
              enter="transform transition duration-300 origin-bottom ease-out"
              enterFrom="opacity-0 translate-y-2 scale-90"
              enterTo="opacity-100 translate-y-0 scale-100"
            >
              <Image
                src={src}
                width={width}
                height={height}
                quality={quality}
                priority={true}
                className="rounded-lg"
              />
            </Transition>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
};
