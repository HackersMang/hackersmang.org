import { IntroProps } from "@/lib/types";
import React from "react";


const Intro = ({ title, subtitle }: IntroProps): JSX.Element => {
  // Function to process subtitle
  const processSubtitle = (text?: string) => {
    if (!text) return null;

    const words = text.split(" ");
    if (words.length <= 2) {
      return text; // Return as is if it has 2 or fewer words
    }

    const mainText = words.slice(0, -2).join(" "); // First part
    const highlightedText = words.slice(-2).join(" "); // Last two words

    return (
      <>
        {mainText}{" "}
        <span className="text-neutral whitespace-nowrap curved-underline">
          {highlightedText}
        </span>
      </>
    );
  };

  return (
    <section className="pt-28 pb-12 w-full flex items-center justify-center">
      <div className="flex flex-col items-center w-full px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-secondary outfit-bold text-center transition-all">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl text-neutral lg:text-3xl mx-3 mt-2 text-center font-light">
            {processSubtitle(subtitle)}
          </h2>
        )}
      </div>
    </section>
  );
};

export default React.memo(Intro);
