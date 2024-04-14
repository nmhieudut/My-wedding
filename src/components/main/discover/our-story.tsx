import Section from "@/components/ui/Section";
import { Words } from "@/components/ui/animation/Words";
import { motion } from "framer-motion";

export const OurStory = () => {
  return (
    <Section>
      <div className="container py-16">
        <div className="flex flex-col gap-8 items-center mb-8">
          <h1 className="text-4xl text-center font-bold title">
            <Words value="Câu chuyện của chúng mình" />
          </h1>
          <h2 className="text-2xl text-center font-bold">
            <Words value="The story of us" />
          </h2>
        </div>
      </div>
    </Section>
  );
};
