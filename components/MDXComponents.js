import Link from "next/link";
import Image from "next/image";
import Tweet from "react-tweet-embed";

import ProsCard from "@/components/ProsCard";
import ConsCard from "@/components/ConsCard";
import Step from "@/components/Step";
import StepLarge from "@/components/StepLarge";
import StepLargeCustom from "@/components/StepLargeCustom";
import StepCheck from "@/components/StepCheck";
import HighlightBox from "@/components/HighlightBox";
import Divider from "@/components/Divider";
import Table from "@/components/Table";
import VideoDemo from "@/components/VideoDemo";
import VideoComponent from "@/components/VideoComponent";
import Button from "@/components/Button";
import AnimatedGradient from "@/components/SnippetsComponents/AnimatedGradient";
import TwitterCardsFramerMotionExample from "@/components/SnippetsComponents/TwitterCardsFramerMotionExample";
import MeteorEffect from "@/components/MeteorEffect/MeteorEffect";
import { CardHoverEffect } from "@/components/CardHoverEffect/CardHoverEffect";
import { PreviewContainer } from "@/components/PreviewContainer/PreviewContainer";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        <span>{props.children}</span>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  StepLarge,
  StepCheck,
  Tweet,
  VideoDemo,
  HighlightBox,
  Divider,
  Table,
  StepLargeCustom,
  VideoComponent,
  Button,
  AnimatedGradient,
  TwitterCardsFramerMotionExample,
  MeteorEffect,
  CardHoverEffect,
  PreviewContainer,
};

export default MDXComponents;
