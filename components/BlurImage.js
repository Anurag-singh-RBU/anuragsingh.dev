import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export const BlurImage = ({ src, className, fill, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  
  // Convert fill prop to layout="fill" for Next.js 12 compatibility
  const imageProps = {
    ...rest,
    ...(fill && { layout: "fill" })
  };
  
  return (
    <Image
      className={clsx(
        "transition duration-500",
        isLoading ? "blur-sm scale-100" : " blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      {...imageProps}
    />
  );
};
