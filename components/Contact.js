import { useState, useRef } from "react";
import Link from "next/link";
// import useSWR from "swr";
import format from "comma-number";
// import { trackGoal } from "fathom-client";

// import fetcher from "@/lib/fetcher";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Contact() {
  const Divider = () => {
    return (
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
    );
  };
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  //   const { data } = useSWR("/api/subscribers", fetcher);
  //   const subscriberCount = format(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    // trackGoal("JYFUFMSF", 0);
    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Hooray! You're now on the list. Check your inbox or promotions for a mail.`,
    });
  };

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque mt-20">
      <h5 className="text-lg md:text-xl text-gray-900 font-bungee sm:mb-5 mb-2" style={{wordSpacing : "5px"}}>
        Want to Interact ?
      </h5>
      <p className="my-1 text-gray-800 dark:text-blue-700 font-mono text-sm sm:text-md mb-3" style={{wordSpacing : "-3px"}}>
        Say HI – I’d love to hear from you ❤️
      </p>
      <a
        href="https://wa.me/9860988325?text=Hello Anurag , I am "
        className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
        type="submit"
      >
        Chat on WhatsApp
      </a>

      <Divider />
      <p className="my-1 text-gray-800 dark:text-gray-700 font-mono font-bold">
        Drop in your email ID and I will get back to you.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="Enter Your Email"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 placeholder:text-sm placeholder:font-mono mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === "Sending" ? <LoadingSpinner /> : "Send"}
        </button>
      </form>

      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200"></p>
      )}
    </div>
  );
}
