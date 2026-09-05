import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Abdul Rehman",
          from_email: formData.email,
          to_email: "abdulrehmanhasan6@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section className="c-space section-spacing relative" id="contact">
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Sawad Section Header */}
      <div className="flex flex-col gap-2 mb-10 max-w-xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-lavender">Contact</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let's Connect</h2>
        <p className="text-sm text-neutral-400 font-light mt-1">
          Open to roles and collaborations across AI Engineering, LLM Systems, and Systems Architecture[cite: 1].
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-xl mx-auto bg-midnight/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-neutral-300 mb-2">
              FULL NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-11 rounded-xl px-4 text-sm bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-lavender transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono text-neutral-300 mb-2">
              EMAIL ADDRESS
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-11 rounded-xl px-4 text-sm bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-lavender transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-neutral-300 mb-2">
              YOUR MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="What project or role do you have in mind?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-lavender transition duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-royal to-lavender text-white font-medium text-sm hover:opacity-90 transition duration-200 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;