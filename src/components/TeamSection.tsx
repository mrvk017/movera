import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import HeadingText from "./HeadingText";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Giusy Loredana",
    role: "Junior Therapist",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Cloe Fulvia",
    role: "Therapist",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Lauretta Pina",
    role: "Trainer",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Renza Concetta",
    role: "Trainer",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Fabrizio Giotto",
    role: "Senior Therapist",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-6">
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Social Media Overlay */}
        {member.socialLinks && (
          <div
            className={`absolute inset-0 bg-sage-500/80 rounded-full flex items-center justify-center transition-all duration-300 ${
              isHovered ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex space-x-4">
              {member.socialLinks.twitter && (
                <a
                  href={member.socialLinks.twitter}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              )}
              {member.socialLinks.facebook && (
                <a
                  href={member.socialLinks.facebook}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  aria-label={`${member.name} Facebook`}
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              )}
              {member.socialLinks.email && (
                <a
                  href={`mailto:${member.socialLinks.email}`}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="text-xl lg:text-2xl font-light text-sage-800 mb-2 tracking-wide">
          {member.name}
        </h3>
        <p className="text-sm lg:text-base text-gray-600 font-medium">
          {member.role}
        </p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="px-2 bg-gradient-to-br from-sage-50 to-stone-100 min-h-screen ">
      <div className="max-w-7.5xl mx-auto bg-white rounded-3xl p-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-sage-600 mb-4 tracking-widest uppercase">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-sage-800 mb-8 tracking-wide">
            <HeadingText heading="Meet Certified Therapist" />
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We believe healing starts with trust and care.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We focus on long-term results, not temporary relief.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 lg:gap-8 xl:gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
