import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import { Button } from "./components/ui/3d-button";

export default function Contact() {
  const [val, setVal] = useState({
    email: "",
  });

  const [form, setForm] = useState({
    state: "idle",  
    message: "",
  });

  const Divider = () => {
    return (
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
    );
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setForm({ state: "sending", message: "" });

    try {
      const res = await fetch("/api/contact", {
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
    <div className="border border-blue-200 rounded sm:p-6 px-4 py-6 my-4 w-full dark:border-gray-800 bg-teal-50 dark:bg-blue-opaque mt-20">
      <h5 className="text-lg md:text-xl text-gray-700 font-bungee sm:mb-5 mb-2" style={{ wordSpacing: "5px" }}>
        Want to Interact ?
      </h5>
      <p className="my-1 text-gray-800 dark:text-blue-900 font-mono text-sm sm:text-lg mb-5" style={{ wordSpacing: "-3px" }}>
        Say HI – I’d love to hear from you ❤️
      </p>
      <a
        href="https://wa.me/9860988325?text=Hello Anurag , I am "
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center rounded-md text-sm font-mono bg-black px-6 py-2 font-semibold text-white shadow-md transition duration-300 hover:opacity-90 overflow-hidden"
      >
        <span>Chat on WhatsApp</span>
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></span>
      </a>

      <Divider />
      <p className="my-1 text-gray-800 dark:text-gray-700 font-mono font-bold">
        Drop in your email ID and I will get back to you.
      </p>
      <form className="my-4 font-mono" onSubmit={handleOnSubmit}>
        <div className="flex items-center space-x-2 mt-3">
          <input
            aria-label="Email for newsletter"
            placeholder="Enter Your Mail ID"
            type="email"
            autoComplete="email"
            name="email"
            value={val.email}
            onChange={(e) => setVal({ ...val, email: e.target.value })}
            required
            className="flex-1 min-w-0 px-4 py-2 placeholder:text-sm placeholder:font-mono font-medium focus:border-0 focus:outline-none placeholder:font-semibold placeholder:tracking-wider border border-gray-300 rounded-md bg-white dark:bg-white text-black dark:text-black"
          />
          <Button variant = "outline" className = "flex items-center bg-black text-white justify-center px-4 h-10 font-mono rounded-md" type = "submit">{form.state === "sending" ? <LoadingSpinner /> : "Send"}</Button>
        </div>

      </form>

      {form.state === "error" && <ErrorMessage>{form.message}</ErrorMessage>}
      {form.state === "success" && <SuccessMessage>{form.message}</SuccessMessage>}

    </div>
  );
}
