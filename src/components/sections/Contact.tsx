import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("submitting");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.log("Form submitted:", { name, email, message });
      setTimeout(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
          to_name: "Muhammad Shahan",
        },
        publicKey,
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-transparent text-white border-b py-3 px-0 text-sm placeholder:text-white/30
     focus:outline-none transition-colors duration-300 ${
       hasError ? "border-red-500" : "border-white/20 focus:border-white/60"
     }`;

  return (
    <section
      id="contact"
      className="w-full bg-[#1a1a1a] px-8 md:px-16 lg:px-24 py-24"
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {/* ── Left: heading ── */}
        <div className="flex-1 flex flex-col justify-between min-h-[340px]">
          <h2
            className="text-white uppercase leading-[0.88] contact-heading"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(4rem, 12vw, 13rem)",
            }}
          >
            Let&apos;s Get
            <br />
            In Touch
          </h2>
          <p
            className="text-white/40 text-xs uppercase tracking-widest mt-8 lg:mt-auto"
            style={{ fontFamily: "'League Gothic', sans-serif" }}
          >
            *&nbsp; Available for new projects
            <br />
            from March&nbsp;2025
          </p>
        </div>

        {/* ── Right: form ── */}
        <div className="flex-1 w-full max-w-xl">
          {status === "success" ? (
            <div className="flex flex-col gap-6">
              <p
                className="text-white uppercase"
                style={{
                  fontFamily: "'League Gothic', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                }}
              >
                Message Sent!
              </p>
              <p className="text-white/50 text-sm">
                Thanks for reaching out. I will get back to you soon.
              </p>
              <button
                onClick={resetForm}
                className="contact-send-btn self-start"
              >
                Send Another
              </button>
            </div>
          ) : status === "error" ? (
            <div className="flex flex-col gap-6">
              <p className="text-red-400 text-sm">
                {errorMessage || "Something went wrong. Please try again."}
              </p>
              <button
                onClick={resetForm}
                className="contact-send-btn self-start"
              >
                Try Again
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-8"
            >
              {/* Row: name + email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/60 text-[0.6rem] uppercase tracking-[0.2em] mb-3"
                    style={{
                      fontFamily: "'League Gothic', sans-serif",
                      fontSize: "0.75rem",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass(errors.name)}
                    disabled={status === "submitting"}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/60 text-[0.6rem] uppercase tracking-[0.2em] mb-3"
                    style={{
                      fontFamily: "'League Gothic', sans-serif",
                      fontSize: "0.75rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass(errors.email)}
                    disabled={status === "submitting"}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white/60 uppercase tracking-[0.2em] mb-3"
                  style={{
                    fontFamily: "'League Gothic', sans-serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass(errors.message)} resize-none`}
                  disabled={status === "submitting"}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="contact-send-btn"
                >
                  {status === "submitting" ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
