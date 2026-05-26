"use client";

import { FormEvent, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaHeadset,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useToast } from "@/components/ui/Toast";

const info = [
  {
    Icon: FaHeadset,
    title: "Farmer Helpline",
    text: "1800-180-1551 (Toll Free)",
  },
  {
    Icon: FaLocationDot,
    title: "Head Office",
    text: "Krishi Bhavan, New Delhi - 110001",
  },
  { Icon: FaEnvelope, title: "Email", text: "support@aggrow.in" },
  {
    Icon: FaClock,
    title: "Working Hours",
    text: "Mon - Sat, 6:00 AM - 8:00 PM",
  },
];

const states = [
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Rajasthan",
  "Punjab",
  "Haryana",
  "Bihar",
  "Maharashtra",
  "Other",
];

const inputClass =
  "form-input w-full py-4 pr-5 pl-12 bg-glass backdrop-blur-md border border-glass-border rounded-2xl text-text text-sm outline-none transition-all duration-300 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(45,106,79,0.2)] disabled:opacity-60 disabled:cursor-not-allowed";

export function ContactSection() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      state: String(data.get("state") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!res.ok || !json?.ok) {
        const msg = json?.error || "Could not send your message. Please try again.";
        showToast(msg);
        return;
      }

      form.reset();
      showToast("Message sent successfully! We'll contact you soon.");
    } catch {
      showToast("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimateOnScroll animation="fade-up" delay={200}>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              maxLength={100}
              disabled={loading}
              className={inputClass}
            />
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim text-base pointer-events-none" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              maxLength={200}
              disabled={loading}
              className={inputClass}
            />
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim text-base pointer-events-none" />
          </div>

          <div className="relative">
            <select
              name="state"
              required
              defaultValue=""
              disabled={loading}
              className="form-select w-full py-4 px-5 bg-glass backdrop-blur-md border border-glass-border rounded-2xl text-text text-sm outline-none transition-all duration-300 focus:border-primary-light focus:shadow-[0_0_0_3px_rgba(45,106,79,0.2)] cursor-pointer appearance-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <option value="" disabled>
                Select Your State
              </option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={4}
              required
              maxLength={5000}
              disabled={loading}
              placeholder="Write your query or suggestion..."
              className={`form-textarea ${inputClass} resize-none`}
            />
            <FaCommentDots className="absolute left-4 top-4 text-text-dim text-base pointer-events-none" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold text-[#0b1a0f] bg-gradient-to-br from-accent to-[var(--color-accent-dark)] shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <FaPaperPlane className={loading ? "animate-pulse" : ""} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex flex-col gap-7 pt-2">
          {info.map(({ Icon, title, text }) => (
            <div key={title} className="flex gap-4 items-start">
              <Icon className="text-lg text-accent mt-1 w-6 text-center" />
              <div>
                <h4 className="text-base font-semibold mb-1 text-text">
                  {title}
                </h4>
                <p className="text-sm text-text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
