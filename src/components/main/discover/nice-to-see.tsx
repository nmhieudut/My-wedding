import Section from "@/components/ui/Section";
import { Words } from "@/components/ui/animation/Words";
import React from "react";

export const NiceToSee = () => {
  return (
    <Section>
      <div className="container my-16 py-16 flex items-center justify-center">
        <h1 className="text-4xl text-center font-bold title">
          <Words value="Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi <3" />
        </h1>
      </div>
    </Section>
  );
};
