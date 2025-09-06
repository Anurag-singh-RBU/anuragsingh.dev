// import Analytics from "@/components/metrics/Analytics";
// import Buttondown from "@/components/metrics/Buttondown";
import Container from "@/components/Container";
import GitHub from "@/components/metrics/Github";
import Followers from "@/components/metrics/Followers";
import Following from "@/components/metrics/Following";
import Repositories from "@/components/metrics/Repositories";

import Analytics from "@/components/metrics/Analytics";
import HighlightBox from "@/components/HighlightBox";
import { TweetCard } from "@/components/magicui/tweet-card";
import { getTweet } from "react-tweet/api";

export default function Dashboard({ tweet }) {
  return (
    <Container
      title="Dashboard – Anurag Singh"
      description="A Dashboard to show various metrics via Next JS _api routes , deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h3 className="text-2xl md:text-3xl font-bungee mb-5 mt-5 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
          <HighlightBox>dashboard</HighlightBox>
        </h3>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4 font-mono">
            This dashboard is created with Next JS api routes converted to
            serverless functions that tracks various metrics across platforms.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <GitHub />
          <Followers />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Following />
          <Repositories />
        </div>{" "}

      </div>
    </Container>
  );
}

