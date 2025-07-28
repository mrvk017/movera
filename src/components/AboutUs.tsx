import React, { useState, useEffect } from 'react';
import { Star, User, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [experienceOffset, setExperienceOffset] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scrolling experience box
  useEffect(() => {
    const interval = setInterval(() => {
      setExperienceOffset(prev => (prev + 1) % 200);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-scrolling testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Vikram Venkatesh",
      role: "Patient",
      rating: 5,
      text: "Very informative, caring and punctual. Suggested good and easy breathing exercises for my dad having COPD. Gave enough confidence and support to him. Have no hesitation in recommending their services. One of the most professional staff I have ever met.",
      label: "Highly Recommended!"
    },
    {
      name: "Abhishek Rocks",
      role: "Patient", 
      rating: 5,
      text: "One of the most professional physiotherapist I've met through them. The Expert was a great listener, asks the right questions, and is genuinely concerned about patient's well being Highly satisfied with the treatment provided. Highly recommended. All the best for future.",
      label: "Most Professional!"
    },
    {
      name: "Sushim Dey",
      role: "User",
      rating: 5,
      text: "Great centre and amazing doctors. More than their treatment it's their positivity that motivates you to come around soon. Thoroughly skilled and truly confident in approach. If you have an unbearable pain and low confidence, this is the right platform.",
      label: "Great Center!"
    },
    {
      name: "Priya Sharma",
      role: "Patient",
      rating: 5,
      text: "Excellent physiotherapy services with modern equipment and caring staff. The treatment plan was well structured and I saw significant improvement in my condition. Highly recommend for anyone seeking quality healthcare.",
      label: "Excellent Service!"
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      rating: 5,
      text: "Outstanding experience with CB Physiotherapy. The therapists are knowledgeable and the facilities are top-notch. My recovery was faster than expected thanks to their dedicated care and professional approach.",
      label: "Outstanding Experience!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <section className="relative h-96 overflow-hidden bg-gray-200">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-100"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-light text-gray-800 mb-4 tracking-wider">About Us</h1>
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
                  transform: `translateY(${scrollY * 0.1}px)`
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
                  transform: `translateX(${Math.sin(experienceOffset * 0.1) * 10}px)`
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="text-emerald-600 font-bold">15+</div>
                  </div>
                  <div className="text-sm text-gray-600">Years Of</div>
                  <div className="text-sm font-medium text-gray-800">Experience</div>
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
                  CB Physiotherapy is India's fastest growing Delivery Network for Physiotherapy & 
                  Chiropractors services. At CB Physiotherapy, we are committed to increase access 
                  to quality physio care through ultra-modern clinics and high-skilled practitioners.
                </p>
                
                <p>
                  Our integrated / multi-therapy approach helps keep a strong focus on patient 
                  needs and deliver the highest level of patient centric care with better outcomes.
                </p>

                <p>
                  We serve a wide range of patients offering treatment at clinic as well as at the 
                  comfort of their homes. We make sure that our clinics are not only equipped with 
                  the latest equipment's but also provide clean, energetic and uplifting atmospheres 
                  for better healing.
                </p>

                <p>
                  Rather than transactional engagement with patients, we are committed to partner 
                  with our patients in their journey of healing.
                </p>

                <p>
                  We work with you through your healing from start to finish providing a robust 
                  program involving combination of multiple therapies / modalities. Also, after 
                  treatment is over, we provide support / guidance to prevent injury from repeating / 
                  pain from returning. The happiness on our patient's faces is what keeps us going.
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
              What <span className="text-emerald-600">Patients</span> Says About us
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
                const index = (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                
                return (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ${
                      offset === 1 ? 'transform scale-105 shadow-xl' : ''
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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
                        <div className="font-medium text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            CB Physiotherapy Team
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Our Dedicated <span className="text-emerald-600">&</span> Experienced Therapist Team
          </h2>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;