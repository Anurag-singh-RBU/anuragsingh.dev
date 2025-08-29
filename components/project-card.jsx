import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import clsx from "clsx";
import { Badge } from "@/ui/badge";

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden border dark:border-gray-700 h-auto">
      {href ? (
        <Link
          href={href || "#"}
          className={clsx("block cursor-pointer", className)}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )}
        </Link>
      ) : (
        <div className={clsx("block cursor-pointer", className)}>
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )}
        </div>
      )}

      <CardHeader className="sm:px-3 px-2">
        <div className="space-y-2">
          <CardTitle className="mt-1 text-xl font-jetbrains font-bold">{title}</CardTitle>
          <time className="text-sm font-sans font-normal">{dates}</time>
          <div className="hidden text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown
            components={{
              p: ({ node, ...props }) => (
                <p
                  className="prose max-w-full text-justify font-GS font-medium text-sm tracking-wide dark:text-gray-400 dark:prose-invert"
                  {...props}
                  style={{color: "rgb(140 , 140 , 140)"}}
                />
              ),
            }}
          >
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-4 flex flex-col sm:px-2 px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag, idx) => (
              <p
                key={idx}
                className={`leading-5 mb-2 dark:border dark:border-zinc-700 font-semibold dark:text-black text-black rounded-md text-xs mr-2 px-1`}
                style={{ backgroundColor: "rgb(240,240,240)"}}
              >
                {tag}
              </p>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 py-2">
      {links && links.length > 0 && (
        <div className="flex flex-row flex-wrap justify-center items-center gap-2">
          {links.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <button className="flex items-center font-sans text-center text-white font-semibold bg-black dark:border dark:border-gray-600 dark:bg-white rounded-md gap-2 px-2 py-1 text-xs mb-2">
                <span className="flex items-center">{link.icon}</span>
                <span>{link.type}</span>
              </button>
            </Link>
          ))}
        </div>
      )}
    </CardFooter>

    </Card>
  );
}
