import React, { useState, useEffect } from "react";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [experienceOffset, setExperienceOffset] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scrolling experience box
  useEffect(() => {
    const interval = setInterval(() => {
      setExperienceOffset((prev) => (prev + 1) % 200);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-scrolling testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % team.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const team = [
    {
      name: "N Saquib Lachoo",
      role: "Founder",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      rating: 5,
      text: "Very informative, caring and punctual. Suggested good and easy breathing exercises for my dad having COPD. Gave enough confidence and support to him. Have no hesitation in recommending their services. One of the most professional staff I have ever met.",
      label: "Highly Recommended!",
    },
    {
      name: "Dr. Soumyendro Chatterjee",
      role: "Clinical Advisor / Consultant",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      rating: 5,
      text: "Very informative, caring and punctual. Suggested good and easy breathing exercises for my dad having COPD. Gave enough confidence and support to him. Have no hesitation in recommending their services. One of the most professional staff I have ever met.",
      label: "Highly Recommended!",
    },
    {
      name: "Ankit Mathur",
      role: "Advisor / Investor",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      rating: 5,
      text: "Very informative, caring and punctual. Suggested good and easy breathing exercises for my dad having COPD. Gave enough confidence and support to him. Have no hesitation in recommending their services. One of the most professional staff I have ever met.",
      label: "Highly Recommended!",
    },
    {
      name: "Dr Deepanshu Khatri",
      role: "Head Operations",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      rating: 5,
      text: "Very informative, caring and punctual. Suggested good and easy breathing exercises for my dad having COPD. Gave enough confidence and support to him. Have no hesitation in recommending their services. One of the most professional staff I have ever met.",
      label: "Highly Recommended!",
    },
    {
      name: "Dr Natasha Saleem - PT",
      role: "Head – Clinical Process",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      rating: 5,
      text: "Very informative, caring and punctual. Suggested good and easy breathing exercises for my dad having COPD. Gave enough confidence and support to him. Have no hesitation in recommending their services. One of the most professional staff I have ever met.",
      label: "Highly Recommended!",
    },
  ];

  const whyChoose = [
    {
      title: "+ 500 Practitioners",
      description:
        "CBP has a strong network of over 500 physiotherapists/chiropractors enrolled through a structured empanelment criterion.",
      icon: "../../public/businessman.png",
    },
    {
      title: "Integrated Approach",
      description:
        "Our integrated / multi-therapy approach enables us take a holistic view of patient needs and provide and outcome-based treatment.",
      icon: "../../public/approaches.png",
    },
    {
      title: "Treatment Scheduling",
      description:
        "Instant confirmation of clinic appointment & home visit is confirmed within 30 mins. We try our best to not change a physio for ongoing treatments.",
      icon: "../../public/customer-service.png",
    },
    {
      title: "Always Listening",
      description:
        "Continuous monitoring of treatment progress with feedback & Counseling calls. Pro-active grievance redressal to ensure a smooth path to your recovery.",
      icon: "../../public/deadline.png",
    },
    {
      title: "Payments",
      description:
        "Transparent Pricing with friendly packages for long term treatments. Option to pay through cash, card or online with insurance re-imbursement friendly billing.",
      icon: "../../public/credit-card.png",
    },
    {
      title: "12*7 Support",
      description:
        "Help is just a text Away. 12*7 support on WhatsApp for any query or concern for your new appointment or for an ongoing physio treatment.",
      icon: "../../public/support.png",
    },
  ];

  const recoverySteps = [
    {
      title: "Fizo 360",
      description:
        "Comprehensive Assessment for better evaluation of Ortho / Neuro conditions with Advanced assessments like Posture Analysis & Muscle Imbalances detection",
      icon: "../../public/inspector.png",
    },
    {
      title: "Fizo IQ",
      description:
        "Clinical Decision Support System integrating Ortho–Neuro intelligence for accurate diagnosis, optimized treatment protocols, and effective outcome tracking",
      icon: "../../public/iq.png",
    },
    {
      title: "Fizo Track",
      description:
        "Progress tracking system utilizing SMART Goals & Milestones to objectively monitor, analyze, and optimize the patient recovery journey",
      icon: "../../public/health-tracking.png",
    },
    {
      title: "Activ PT",
      description:
        "Smart rehabilitation app designed for post–treatment care, providing personalized exercise programs, adherence tracking, and expert–guided recovery",
      icon: "../../public/cardio-workout.png",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % team.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <section className="relative h-96 overflow-hidden bg-gray-200">
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-100"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-light text-gray-800 mb-4 tracking-wider">
            About Us
          </h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image with Parallax */}
            <div className="relative">
              <div
                className="relative z-10"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Physiotherapy session"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Floating Experience Box with Auto-scroll */}
              <div
                className="absolute bottom-8 left-8 z-20 bg-white rounded-2xl p-6 shadow-xl"
                style={{
                  transform: `translateX(${
                    Math.sin(experienceOffset * 0.1) * 10
                  }px)`,
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="text-emerald-600 font-bold">15+</div>
                  </div>
                  <div className="text-sm text-gray-600">Years Of</div>
                  <div className="text-sm font-medium text-gray-800">
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
                About Us
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                We Are The Best For
                <br />
                <span className="text-emerald-600">Physiotherapy</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Movera Physiotherapy is India's fastest growing Delivery Network
                  for Physiotherapy & Chiropractors services. At movera
                  Physiotherapy, we are committed to increase access to quality
                  physio care through ultra-modern clinics and high-skilled
                  practitioners.
                </p>

                <p>
                  Our integrated / multi-therapy approach helps keep a strong
                  focus on patient needs and deliver the highest level of
                  patient centric care with better outcomes.
                </p>

                <p>
                  We serve a wide range of patients offering treatment at clinic
                  as well as at the comfort of their homes. We make sure that
                  our clinics are not only equipped with the latest equipment's
                  but also provide clean, energetic and uplifting atmospheres
                  for better healing.
                </p>

                <p>
                  Rather than transactional engagement with patients, we are
                  committed to partner with our patients in their journey of
                  healing.
                </p>

                <p>
                  We work with you through your healing from start to finish
                  providing a robust program involving combination of multiple
                  therapies / modalities. Also, after treatment is over, we
                  provide support / guidance to prevent injury from repeating /
                  pain from returning. The happiness on our patient's faces is
                  what keeps us going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Happiness On Our Patient's Faces Is What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
              What <span className="text-emerald-600">Patients</span> Says About
              us
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial + offset) % team.length;
                const testimonial = team[index];

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ${
                      offset === 1 ? "transform scale-105 shadow-xl" : ""
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-emerald-600">
                        {testimonial.label}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? "bg-emerald-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-700 bg-green-100 px-4 py-1 rounded-full">
            Movera Physiotherapy Team
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-green-900">
            Our <span className="text-green-700">Dedicated</span> & Experienced
            Therapist Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="overflow-hidden rounded-3xl shadow-lg mb-4 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[260px] object-cover transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-white">
        {/* Why Choose */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-green-600 font-medium">
              Treatment That Blends Competence With Compassion
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Why Choose{" "}
              <span className="text-green-700">Movera Physiotherapy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-xl border shadow transition duration-300 hover:shadow-xl hover:bg-gradient-to-r from-green-50 to-green-100"
              >
                <div className="mb-4 w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-green-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Faster & Lasting Recovery */}
        <section className="bg-[#e6f0ec] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-green-900 mb-12">
              Faster & Lasting Recovery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {recoverySteps.map((step, idx) => (
                <div key={idx}>
                  <div className="w-16 h-16 mx-auto mb-4 transform hover:-translate-y-2 transition duration-300">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-green-900">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

{
  /* Team Section */
}
{
  /* <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center"> */
}
{
  /* <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            CB Physiotherapy Team
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Our Dedicated <span className="text-emerald-600">&</span>{" "}
            Experienced Therapist Team
          </h2> */
}

{
  /* Team Members Grid */
}
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16"> */
}
{
  /* N Saquib Lachoo */
}
{
  /* <div className="text-center group">
              <div
                className="relative mb-6 overflow-hidden rounded-3xl"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="N Saquib Lachoo"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-400 rounded-2xl opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                N Saquib Lachoo
              </h3>
              <p className="text-gray-600 text-sm">Founder</p>
            </div> */
}

{
  /* Dr. Soumyendro Chatterjee */
}
{
  /* <div className="text-center group">
              <div
                className="relative mb-6 overflow-hidden rounded-3xl"
                style={{
                  transform: `translateY(${scrollY * 0.08}px)`,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Dr. Soumyendro Chatterjee"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-gray-300 rounded-2xl opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Soumyendro Chatterjee
              </h3>
              <p className="text-gray-600 text-sm">
                Clinical Advisor / Consultant
              </p>
            </div> */
}

{
  /* Ankit Mathur */
}
{
  /* <div className="text-center group">
              <div
                className="relative mb-6 overflow-hidden rounded-3xl"
                style={{
                  transform: `translateY(${scrollY * 0.06}px)`,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Ankit Mathur"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Ankit Mathur
              </h3>
              <p className="text-gray-600 text-sm">Advisor / Investor</p>
            </div> */
}

{
  /* Dr Deepanshu Khatri */
}
{
  /* <div className="text-center group">
              <div
                className="relative mb-6 overflow-hidden rounded-3xl"
                style={{
                  transform: `translateY(${scrollY * 0.07}px)`,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Dr Deepanshu Khatri"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-400 rounded-2xl opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr Deepanshu Khatri
              </h3>
              <p className="text-gray-600 text-sm">Head Operations</p>
            </div> */
}

{
  /* Dr Natasha Saleem - PT */
}
{
  /* <div className="text-center group">
              <div
                className="relative mb-6 overflow-hidden rounded-3xl"
                style={{
                  transform: `translateY(${scrollY * 0.09}px)`,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Dr Natasha Saleem"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-gray-200 rounded-2xl opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr Natasha Saleem - PT
              </h3>
              <p className="text-gray-600 text-sm">Head - Clinical Process</p>
            </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* </section> */
}
