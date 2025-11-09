"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

export const GetInTouch = () => {
  const [state, handleSubmit] = useForm(formId);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      const timer = setTimeout(() => (state.succeeded = false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
      {state.succeeded && (
        <p className="text-green-500 font-medium">
          ✅ Thanks for your submission!
        </p>
      )}

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
      />
      <ValidationError
        className="text-red-500"
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
      />
      <ValidationError
        className="text-red-500"
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        placeholder="Your Message"
        id="message"
        name="message"
        rows={5}
        className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white resize-none"
      />
      <ValidationError
        className="text-red-500"
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
      >
        {state.submitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};
