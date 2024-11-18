// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "adamabdillah808@gmail.com",
    href: "mailto:adamabdillah808@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+62 8212 8259 1369",
    href: "tel:+6281282591369",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Bogor, Indonesia",
    href: "",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this with your actual email service integration
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Feel free to reach out if you want to collaborate on a project,
                have a question, or just want to connect.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-md">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:border-blue-500"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:border-blue-500"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:border-blue-500"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-600 focus:border-blue-500"
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FiSend />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-500 text-center">
                    Message sent successfully!
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-500 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
