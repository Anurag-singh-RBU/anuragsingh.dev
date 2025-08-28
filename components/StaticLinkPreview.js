import { FOCUS_VISIBLE_OUTLINE, GRADIENT_LINK } from "@/lib/constants";
import { Portal } from "@headlessui/react";
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
              alt="preview"
            />
          </div>
        </Portal>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(GRADIENT_LINK, FOCUS_VISIBLE_OUTLINE, "cursor-pointer")}
      >
        {children}
      </a>

      <div className="mt-2 shadow-xl rounded-xl border p-1 w-fit">
        <Image
          src={src}
          width={width}
          height={height}
          quality={quality}
          priority={true}
          className="rounded-lg"
          alt="preview"
        />
      </div>
    </>
  );
};
