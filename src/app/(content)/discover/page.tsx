import { WEDDING_TIMELINE } from "@/constant/home";
import React from "react";

export default function Discover() {
  return (
    <>
      <section className="container-secondary py-16">
        <div className="container py-16 rounded-xl bg-[rgba(255,255,255,.5)]">
          <div className="flex flex-col gap-8 items-center mb-8">
            <h1 className="text-4xl text-center font-bold">
              And so the adventure begins
            </h1>
            <h2 className="text-2xl text-center font-bold">
              Check the festive timeline
            </h2>
          </div>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {WEDDING_TIMELINE.map((item, index) => (
              <li key={index}>
                {index === 0 ? null : <hr />}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={`${
                    index % 2 === 0
                      ? "timeline-start md:text-end"
                      : "timeline-end"
                  } mb-10`}
                >
                  <time className="timeline-box">{item.date}</time>
                  <div className="text-lg font-black">{item.title}</div>
                  {item.description}
                  mouse.
                </div>
                {index === WEDDING_TIMELINE.length - 1 ? null : <hr />}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container my-16 py-16">
        <div className="text-center text-4xl">{`Can't wait to see you there`}</div>
      </section>
    </>
  );
}
