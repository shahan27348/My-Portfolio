import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SectionTitle: React.FC<{
  number: string;
  title: string;
  subtitle?: string;
}> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-slate-light flex items-center justify-center whitespace-nowrap">
      {title}
    </h2>
    <p className="text-accent mt-2">{subtitle}</p>
  </div>
);

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

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStatus("submitting");

      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS credentials are configured
      if (!serviceId || !templateId || !publicKey) {
        console.warn(
          "EmailJS credentials not configured. Using console.log instead."
        );
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
        // Send email using EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "Portfolio Owner", // You can customize this
          },
          publicKey
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
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <AnimatedSection>
        <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
          <SectionTitle number="5" title="Thank You!" subtitle="Message Sent" />
          <p className="text-slate-dark mb-8">
            Your message has been sent successfully. I appreciate you reaching
            out and I'll get back to you as soon as possible!
          </p>
          <button
            onClick={resetForm}
            className="inline-block bg-transparent text-accent font-mono border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300 text-lg"
          >
            Send Another Message
          </button>
        </section>
      </AnimatedSection>
    );
  }

  if (status === "error") {
    return (
      <AnimatedSection>
        <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
          <SectionTitle
            number="5"
            title="Oops!"
            subtitle="Something Went Wrong"
          />
          <p className="text-red-400 mb-4">
            {errorMessage || "Failed to send message. Please try again."}
          </p>
          <p className="text-slate-dark mb-8">
            You can also reach me directly at your email address or through
            social media.
          </p>
          <button
            onClick={resetForm}
            className="inline-block bg-transparent text-accent font-mono border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300 text-lg"
          >
            Try Again
          </button>
        </section>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
        <SectionTitle number="5" title="What’s Next?" subtitle="Get In Touch" />
        <p className="text-slate-dark mb-8">
          I'm currently open to new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you! Feel free to reach out about potential
          collaborations or just to chat.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-slate-dark mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-tertiary text-slate-light border rounded py-2 px-3 focus:outline-none focus:border-accent transition-colors duration-300 ${
                errors.name ? "border-red-500" : "border-tertiary"
              }`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              disabled={status === "submitting"}
            />
            {errors.name && (
              <p id="name-error" className="text-red-400 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-slate-dark mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-tertiary text-slate-light border rounded py-2 px-3 focus:outline-none focus:border-accent transition-colors duration-300 ${
                errors.email ? "border-red-500" : "border-tertiary"
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={status === "submitting"}
            />
            {errors.email && (
              <p id="email-error" className="text-red-400 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-slate-dark mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full bg-tertiary text-slate-light border rounded py-2 px-3 focus:outline-none focus:border-accent transition-colors duration-300 ${
                errors.message ? "border-red-500" : "border-tertiary"
              }`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              disabled={status === "submitting"}
            ></textarea>
            {errors.message && (
              <p id="message-error" className="text-red-400 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-transparent text-accent font-mono border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
