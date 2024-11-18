// components/NewsletterSubscribe.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your newsletter subscription API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            required
          />
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${
              status === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </div>
        {message && (
          <p
            className={`text-sm ${
              status === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
