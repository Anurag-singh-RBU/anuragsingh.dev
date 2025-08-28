import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import TwitterCardsFramerMotionExample from "@/components/SnippetsComponents/TwitterCardsFramerMotionExample";

export default function Playground() {
  return (
    <Container
      title="Anurag Singh"
      description="Full-Stack developer , JavaScript enthusiast , Freelancer , Tech Blogger and a Learner. I love building products and web apps that impact millions of lives.">
      <TwitterCardsFramerMotionExample/>
    </Container>
  );
}
