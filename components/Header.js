import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurImage } from "./BlurImage";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: "1vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: "1vh" },
  };

  const itemA = {
    hidden: { opacity: 0, scale: 0.5, y: "1vh" },
    show: { opacity: 1, scale: 1, y: 0 },
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start sm:space-x-14 w-full mb-10">
      <div className="flex sm:w-3/4 flex-col mt-6">
      <div className="flex flex-row items-center space-x-2 mb-2 -ml-10">
        <div className="relative w-[70px] h-[65px] sm:block hidden">
          <div className="absolute left-[5px] top-[60px] sm:block hidden" style={{ transform: "translate(-5px, 6px)" }}>
            <motion.svg
              key="spinning-snowflake-small1"
              animate={{ rotate: [0, 60, -60, 0] , y: 0, opacity: 0.8, transition: { duration: 0.5 }}}
              initial={{ rotate: 0 , opacity: 0, y: "1vh"}}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 8,
                ease: [0.32, 0.72, 0.52, 0.98] 
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 45"
              width="28"
              height="28"
              style={{ originX: "50%", originY: "50%" }}
            >
              <defs>
                <linearGradient id="snowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BEEBFF"/>
                  <stop offset="50%" stopColor="#7DD3FC"/>
                  <stop offset="100%" stopColor="#38BDF8"/>
                </linearGradient>
              </defs>
              <path
                fill="url(#snowGradient2)"
                d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z"
              />
            </motion.svg>
          </div>

          <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -52%)" }}>
            <motion.svg
              key="spinning-snowflake"
              animate={{ rotate: [0, 60, -60, 0] }}
              initial={{ rotate: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 12,
                ease: [0.32, 0.72, 0.52, 0.98] 
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 45"
              width="48"
              height="48"
              style={{ originX: "50%", originY: "50%"}}
            >
              <defs>
                <linearGradient id="snowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BEEBFF"/>
                  <stop offset="50%" stopColor="#7DD3FC"/>
                  <stop offset="100%" stopColor="#38BDF8"/>
                </linearGradient>
              </defs>
              <path
                fill="url(#snowGradient)"
                d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z"
              />
            </motion.svg>
          </div>

          <div className="absolute right-[-15px] bottom-0 sm:block hidden" style={{ transform: "translate(10px, -6px)" }}>
            <motion.svg
              key="spinning-snowflake-small2"
              animate={{ rotate: [0, -60, 60, 0], opacity: 0.6, y: 0, transition: { duration: 0.5 }}}
              initial={{ rotate: 0 , opacity: 0, y: "1vh", transition: { duration: 0.5, delay: 0.5}}}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: [0.32, 0.72, 0.52, 0.98] 
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 45"
              width="28"
              height="28"
              style={{ originX: "50%", originY: "50%" }}
            >
              <defs>
                <linearGradient id="snowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BEEBFF"/>
                  <stop offset="50%" stopColor="#7DD3FC"/>
                  <stop offset="100%" stopColor="#38BDF8"/>
                </linearGradient>
              </defs>
              <path
                fill="url(#snowGradient3)"
                d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z"
              />
            </motion.svg>
          </div>
        </div>
      </div>

        <h1 className="text-4xl md:text-4xl font-bungee mb-4 text-black/70 sectionOne whitespace-nowrap">
          Anurag &nbsp;Singh
        </h1>

        <div className="relative items-center font-mono flex-wrap dark:text-zinc-300 mb-3 text-md text-gray-500" style={{wordSpacing: "2px", letterSpacing: "0.5px"}}>
          Building
          <a
            className={
              "font-bold font-jetbrains bg-gray-100 dark:bg-zinc-700 dark:text-white sm:mx-2 mx-1 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black"
            }
            href="https://shadyxui.in">
            Shadyx
          </a>
          and
          <a
            className={

              "font-bold font-jetbrains bg-gray-100 dark:bg-zinc-700 dark:text-white sm:mx-2 mx-1 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black"
              
            }
            href="https://scrivo.vercel.app/">
            Scrivo
          </a>
          other
          <span
            className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200"
            style={{ cursor: "🤩" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            {" "}
            cool things
            <AnimatePresence>
              {open && (
                <motion.div
                  key="modal"
                  variants={variants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="z-20  p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-2xl absolute inset-x-0  w-full min-h-90 text-xs md:text-sm">
                  <div className="bg-grid-slate-50 dark:bg-grid-zinc-700/30 absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Founder{" "}
                    <Hyperlink
                      text="@scrivo"
                      link="https://scrivo.vercel.app/"
                    />{" "}
                    and{" "}
                    <Hyperlink
                      text="@shadyx"
                      link="https://shadyxui.in"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Competitive coding{" "}
                    <Hyperlink text="@leetcode" link="https://leetcode.com/u/singhar_7"/>{" "}
                    and{" "}
                    <Hyperlink
                      text="@codechef"
                      link="https://www.codechef.com/users/heehoohaa"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Checkout my npm CLI{" "}
                    <Hyperlink
                      text="@anuragcodes/shadyx"
                      link="https://www.npmjs.com/package/@anuragcodes/shadyx"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Cool TailwindCSS Colors{" "}
                    <Hyperlink
                      text="@colors"
                      link="https://www.shadyxui.in/colors"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Posts{" "}
                    <Hyperlink
                      text="@linkedin"
                      link="https://www.linkedin.com/in/anuragsinghrbu/"
                    />
                    {" "}and{" "}
                    <Hyperlink
                      text="@twitter"
                      link="https://twitter.com/anuragRBU"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Project repositories{" "}
                    <Hyperlink
                      text="@github"
                      link="https://github.com/Anurag-singh-RBU"
                    />
                  </motion.p>

                  <div className="absolute inset-x-0 -bottom-px h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                    <div className=" w-full flex-none blur-[1px] h-px [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-300 text-justify font-hanken leading-relaxed md:w-11/12" style={{wordSpacing: "1.5px", letterSpacing: "0.4px"}}>
          Full Stack Developer building SaaS products and web apps. Find me
          on twitter for tech updates and fun.
        </p>
      </div>

      <div className=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <a
          href="https://twitter.com/anuragRBU"
          target="__blank"
          className="block  z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-white h-20 w-20"
        >
          <BlurImage
            fill
            style={{ objectFit: "cover" }}
            className="bg-gray-100"
            src="/my-logo.jpg"
          />
        </a>
        <div className="z-0">
          <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

export const Hyperlink = ({ link, text }) => {
  return (
    <a
      href={link}
      className="inline-block font-bold text-zinc-700 dark:text-zinc-200 transform hover:scale-105 transition duration-200"
      target="__blank">
      {text}
    </a>
  );
};
