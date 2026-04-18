import { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────
const SendIcon = () => (
  <svg
    className="w-4 md:w-5 aspect-square"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32013L6.34 2.32013C5.78749 2.04514 5.16362 1.94724 4.55344 2.03978C3.94326 2.13232 3.37646 2.4108 2.93033 2.83724C2.48421 3.26369 2.18046 3.81735 2.0605 4.42274C1.94054 5.02813 2.0102 5.65578 2.26 6.22013L4.66 11.5901C4.71446 11.72 4.74251 11.8593 4.74251 12.0001C4.74251 12.1409 4.71446 12.2803 4.66 12.4101L2.26 17.7801C2.0567 18.2368 1.97076 18.7371 2.00998 19.2355C2.0492 19.7339 2.21235 20.2145 2.48459 20.6338C2.75682 21.0531 3.12953 21.3977 3.56883 21.6363C4.00812 21.875 4.50009 22 5 22.0001C5.46823 21.9955 5.92949 21.8861 6.35 21.6801L20.35 14.6801C20.8466 14.4303 21.264 14.0474 21.5557 13.5742C21.8474 13.101 22.0018 12.556 22.0018 12.0001C22.0018 11.4442 21.8474 10.8993 21.5557 10.4261C21.264 9.95282 20.8466 9.56994 20.35 9.32013H20.34Z"
      fill="white"
    />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    className="w-4 md:w-5 aspect-square animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
  </svg>
);

// ── Shared input class ─────────────────────────────────────────
const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0 transition-colors duration-200";

// ── Initial form state ─────────────────────────────────────────
const INITIAL_STATE = { name: "", email: "", subject: "", message: "" };

// ── Component ─────────────────────────────────────────────────
const Form = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear status on new input so message disappears
    if (status !== "idle" && status !== "loading") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const apiPrefix = import.meta.env.VITE_API_BASE_URL || "";
      const res = await fetch(`${apiPrefix}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Message sent! Check your inbox.");
        setFormData(INITIAL_STATE);
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        I&apos;m always open to discussing product design work or partnership
        opportunities.
      </p>

      <div className="mx-2">
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            id="contact-name"
            placeholder="Name*"
            className={commonClass}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            id="contact-email"
            placeholder="Email*"
            className={commonClass}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            id="contact-subject"
            placeholder="Subject*"
            className={commonClass}
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          {/* Message */}
          <input
            type="text"
            name="message"
            id="contact-message"
            placeholder="Message*"
            className={commonClass}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          {/* Status feedback */}
          {status === "success" && (
            <div
              role="alert"
              className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-3 animate-fade-in"
            >
              <span>✅</span>
              <span>{responseMsg}</span>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 animate-fade-in"
            >
              <span>❌</span>
              <span>{responseMsg}</span>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            id="contact-submit"
            disabled={status === "loading"}
            className={`btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4 transition-all duration-200 ${
              status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {status === "loading" ? (
              <>
                Sending <SpinnerIcon />
              </>
            ) : (
              <>
                Send Message <SendIcon />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
