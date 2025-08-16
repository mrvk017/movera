import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";


// Fix Leaflet default marker issue
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [schedule, setSchedule] = useState("");
  const [message, setMessage] = useState("");

  const faqs = [
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via the contact form or email us at support@example.com.",
    },
    {
      question: "What are your working hours?",
      answer: "Our team is available from Monday to Friday, 9 AM to 6 PM IST.",
    },
    {
      question: "Can I schedule a callback?",
      answer:
        "Yes, you can schedule a callback using the form and selecting your preferred date and time.",
    },
  ];

    // Example pin locations
  const locations = [
    {
      id: 1,
      name: "Head Office",
      position: [28.6139, 77.209], // Delhi
      details: "Our main office in New Delhi",
    },
    {
      id: 2,
      name: "Branch Office",
      position: [19.076, 72.8777], // Mumbai
      details: "Branch office in Mumbai",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-16 items-center">
        {/* Map with pins */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <MapContainer
            center={[23.2599, 77.4126]} // Bhopal center
            zoom={5}
            scrollWheelZoom={false}
            className="w-full h-[400px] rounded-2xl shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
              <Marker
                key={loc.id}
                position={loc.position as [number, number]}
                icon={customIcon}
              >
                <Popup>
                  <strong>{loc.name}</strong> <br />
                  {loc.details}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Tilt>

        {/* Address */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Visit Us
          </h2>
          <p className="text-gray-700 text-lg">
            You can find us at our main office in New Delhi or our branch
            in Mumbai. Hover or click the pins on the map to see details.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">New Delhi</h3>
              <p className="text-gray-600">
                Connaught Place, New Delhi, India
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Mumbai</h3>
              <p className="text-gray-600">Bandra, Mumbai, India</p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Contact Form Section */}
      <section className="w-full bg-white max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* left Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white rounded-xl border border-black focus:outline-none text-black"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-6 py-4 bg-white rounded-xl border border-black focus:outline-none text-black"
            />
              <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Number"
              className="w-full px-6 py-4 bg-white rounded-xl border border-green-800 focus:outline-none text-black"
              required
            />
            <input
              type="datetime-local"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="w-full px-6 py-4 bg-white rounded-xl border border-black focus:outline-none text-black"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-4 bg-white rounded-xl border border-black focus:outline-none text-black"
            />
            <button
              type="submit"
              className="w-full py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* right Tilt Image */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={1500}
        >
          <motion.img
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="Contact illustration"
            className="rounded-2xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </Tilt>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center rounded-2xl shadow-lg">
        {/* Left Tilt Image */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={1500}
        >
          <motion.img
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="FAQ illustration"
            className="rounded-2xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </Tilt>

        {/* Right FAQ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Community */}
      <section className="w-full py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join our trustable Medifit product community
            </h3>
            <p className="text-gray-600 mb-6">
              Join us as we build a community where wellness is accessible,
              education is empowering, and health is a shared journey.
            </p>
            <button className="bg-[#4B2E2B] text-white py-2 px-5 rounded shadow hover:bg-[#3A1F1C] transition">
              Get started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {["/logo.png", "/logo.png", "/logo.png", "/logo.png"].map(
              (src, i) => (
                <Tilt
                  key={i}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={800}
                  glareEnable={false}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={src}
                    alt={`Product ${i}`}
                    className="w-full h-full object-cover"
                  />
                </Tilt>
              )
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
