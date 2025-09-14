import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import confetti from "canvas-confetti";
import { Button } from "./components/ui/button";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };

  const [formState, setFormState] = useState({
    email: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  });

  const dropIn = {
    hidden: {
      y: "4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "stiff",
        damping: 25,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const handleButtonClick = () => {
    setOpen(!open);
    setFormState({
      email: {
        value: "",
        error: "",
      },
      message: {
        value: "",
        error: "",
      },
    });
    setLoading(false);
    setError("");
    setSuccess("");
  };

    const [val, setVal] = useState({
      email: "",
      message: "",
    });
  
    const [form, setForm] = useState({
      state: "idle",  
      message: "",
    });
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      setForm({ state: "sending", message: "" });
  
      try {
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify(val),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        });
  
        const data = await res.json();
  
        if (res.ok) {
          setForm({ state: "success", message: "Message sent successfully !!" });
          setVal({ email: "", message: "" }); 
        } else {
          setForm({ state: "error", message: data.error || "Something went wrong." });
        }
      } catch (error) {
        setForm({ state: "error", message: error.message || "Network error." });
      }
    };

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter
      onExitComplete={() => null}
    >
      <div class="fixed right-4 md:right-10 bottom-10 flex flex-col items-end z-20">
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4 rounded-xl shadow-2xl bg-white dark:bg-zinc-800  flex flex-col overflow-hidden mx-4 md:mx-0"
          >
            <div className="p-4 bg-gray-100 dark:bg-zinc-700">
              <h2 className="text-gray-700 font-bold text-xl dark:text-white font-mono tracking-tighter">
                Any question ? Drop in here 👇
              </h2>
              <small className="text-xs text-gray-500 mb-10 dark:text-gray-400 font-mono">
                It won't take more than 10 seconds. Shoot your shot. 😉
              </small>
            </div>
            <div className="content p-6 flex flex-col font-GS tracking-wider">
              <form onSubmit={handleOnSubmit} className="flex flex-col mb-3">
              <label className="text-md tracking-wider font-mono font-bold text-black mb-2 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={val.email}
                onChange={(e) => setVal({ ...val, email: e.target.value })}
                required
                className="text-black rounded-md border border-gray-200 py-1 text-sm px-2 focus:outline-none focus:border-gray-400 placeholder:text-sm placeholder:font-GS dark:bg-zinc-800 dark:border-gray-700 dark:text-white mb-1"
                placeholder="abc@xyz.com"
              />

              <small className="h-4 min-h-4 text-red-500 font-semibold">
                {formState.email.error && formState.email.error}
              </small>

              <label className="text-md tracking-wider font-mono font-bold text-black mb-2 dark:text-white">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                value={val.message}
                onChange={(e) => setVal({ ...val, message: e.target.value })}
                required
                rows="5"
                className="text-black text-sm rounded-md border border-gray-200 py-1 px-2 focus:outline-none focus:border-gray-400 placeholder:text-sm dark:bg-zinc-800 dark:border-gray-700 dark:text-white mb-1"
                placeholder="I'd love a compliment from you."
              />
              <small className="h-4 min-h-4 text-red-500 font-semibold mb-4">
                {formState.message.error && formState.message.error}
              </small>
              <Button onClick={handleClick} className = "bg-black text-white font-bold font-mono" disabled={form.state === "sending"} type="submit">
                {form.state === "sending" ? <LoadingSpinner/> : "Send"}
                </Button>
              </form>
              
              {form.state === "error" && <ErrorMessage>{form.message}</ErrorMessage>}
              {form.state === "success" && <SuccessMessage>{form.message}</SuccessMessage>}

            </div>
          </motion.div>
        )}
        <button
          onClick={handleButtonClick}
          class="bg-gray-100 dark:bg-zinc-800 w-14 h-14 rounded-full  flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      </div>
    </AnimatePresence>
  );
}
