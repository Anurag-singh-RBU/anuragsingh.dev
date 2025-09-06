import Container from "@/components/Container";
import HighlightBox from "@/components/HighlightBox";
import ResourcesCard from "@/components/ResourcesCard";
import { links } from "@/constants/links";
import clsx from "clsx";

export default function Links() {
  return (
    <Container
      title="Links – Anurag Singh"
      description="Links to all my socials , projects , source codes and memes."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h3 className="text-2xl md:text-3xl font-bungee mb-5 mt-5 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <HighlightBox>Links</HighlightBox>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-mono font-bold mb-4 hidden md:block">
          Links to all my socials and source codes.
        </p>
        {links?.map((el) => (
          <a
            key={el?.href}
            href={el?.href}
            target="__blank"
            className="dark:hover:bg-zinc-800 dark:border-zinc-800 border-2 border-gray-200 rounded-md py-2 w-full mb-4 hover:bg-gray-50 flex flex-row items-center space-x-2"
          >
            <span className="inline-block mr-2">{el?.icon}</span>{" "}
            <el.icon className={clsx("h-5 w-5", el?.iconClass)} />
            <span className="font-bold font-mono">{el?.name}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}
