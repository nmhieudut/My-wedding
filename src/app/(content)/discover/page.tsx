import { WEDDING_TIMELINE } from "@/constant/home";
import React from "react";
import Section from "@/components/ui/Section";
import { Welcome } from "@/components/main/discover/welcome";
import { TravelStay } from "@/components/main/discover/travel-stay";
import { FestivalTimeline } from "@/components/main/discover/festival-timeline";
import { OurStory } from "@/components/main/discover/our-story";
import { NiceToSee } from "@/components/main/discover/nice-to-see";
import { Question } from "@/components/main/discover/question";

export default function Discover() {
  return (
    <>
      <Welcome />
      <OurStory />
      <TravelStay />
      <FestivalTimeline />
      <Question />
      <NiceToSee />
    </>
  );
}
