import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import HighlightBox from "./HighlightBox";
import ModernRetroButton from "./components/modern-retro-button";
import { ChevronDownCircle } from "lucide-react";
import Button from "./Button";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8 mt-10" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-mono font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 sm:ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <BsPatchCheckFill className="text-blue-500 mr-2" />

        <p className="sm:font-bold font-bold font-jetbrains text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6 font-mono text-justify text-sm">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2025</Year>
    <ul>
      <Step title="React Enthusiast ⚒">
        Was introducted to React, took up a paid course to get the hang of
        it. I haven't stopped since then.
      </Step>
      <Step title="Open Source Contributions ⚙️">
        Started contributing to open source on a daily basis. Contributed to
        smaller projects to learn more on the contributing part.
      </Step>
    </ul>
    <Divider />
    <Year>2024</Year>
    <ul>
      <Step title="Started College 🔥">
        Opted for Computer Science B.Tech Degree from Ramdeobaba University Nagpur.
      </Step>
      <Step title="Introduced to Frontend ⚡️">
        Started getting interest in Frontend Development. Used to learn this stuff
        from Youtube.
      </Step>
      <Step title="Javascript fanboy 🙌🏻">
        Started working with JavaScript, I was amazed by the level of simplicity it
        provided back then.
      </Step>
      <Step title="C and Java 🙌🏻">
        Started learning logics and basic programming fundamentals with Object
        Oriented Programming. C was intimidating and Java was fun.
      </Step>
      <Step title="First Achievement 😂">
        I consider this as an achievement. Got 9.25 SGPA in my first ever sem.
      </Step>
    </ul>
    <Divider />
    <Year>2023</Year>
    <ul>
      <Step title="Completed 12th Grade 📜">
        Completed 12th grade with 88.6% Marks in Science stream. Again, a big
        achievement for me.
      </Step>
      <Step title="Developed interest in Web 2 🚀">
        One of my friends introduced me to Web Development. I started off by
        making simple HTML and CSS websites like Amazon and Flipkart Clone.
      </Step>
    </ul>
    <Divider />
    <Year>2021</Year>
    <ul>
      <Step title="Completed 10th Grade 📜">
        Scored 9 CGPA in 10th Grade. For me it was huge.
      </Step>
      <Step title="Wanted to take up Science 🌪❤️">
        I always wanted to become an Engineer. My parents
        agreed and that let me to opt for Science stream.
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="First Computer 💻">
        I played games all day - everyday.
      </Step>
    </ul>
    <Divider />
    <Year>2005</Year>
    <ul>
      <Step className = "font-sans" title="An Enginner was Born in India 👶🏼"/>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
     <h3 className="text-2xl md:text-3xl font-bungee mb-8 sm:mt-20 mt-10 text-black/80 dark:text-white" style={{wordSpacing: "6px"}}>
        <HighlightBox>Life Updates</HighlightBox>
      </h3>
      <Year>2025</Year>
      <ul>
        <Step title="Open Source - SHADYX ✨">
          Created my first ever full stack website using Next Js and got over 150 users in just 2 damn months.
        </Step>
        <Step title="SaaS Products 🚀">
          Started freelancing - developed full stack applications for clients
          ranging from SaaS to static landing pages.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-2 px-3 rounded-md skill-inner-shadow self-center text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors mt-6 font-jetbrains font-bold"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-2 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
