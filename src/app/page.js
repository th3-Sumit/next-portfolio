"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderImage from "../static/images/me2.png";
import AboutImage from "../static/images/me-4.jpeg";
import {
  Award,
  BarChart3,
  Box,
  Briefcase,
  Building2,
  Calendar,
  ClipboardList,
  Cloud,
  Code,
  Code2,
  Cpu,
  Database,
  Facebook,
  Globe,
  GraduationCap,
  HomeIcon,
  IdCard,
  Instagram,
  Layers,
  Linkedin,
  Lock,
  Mail,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Monitor,
  Server,
  ShoppingCart,
  Star,
  Terminal,
  Twitter,
  UserCircle,
  Users,
  X,
  Zap,
} from "lucide-react";

export default function Home() {
  const skills = [
    {
      name: "Zoho",
      icon: <Cloud className="w-10 h-10 text-blue-400 mx-auto mb-2" />,
    },
    {
      name: "Wordpress",
      icon: <Globe className="w-10 h-10 text-blue-500 mx-auto mb-2" />,
    },
    {
      name: "Shopify",
      icon: <Box className="w-10 h-10 text-green-400 mx-auto mb-2" />,
    },
    {
      name: "ReactJs",
      icon: <Monitor className="w-10 h-10 text-cyan-400 mx-auto mb-2" />,
    },
    {
      name: "ExpressJs",
      icon: <Terminal className="w-10 h-10 text-gray-300 mx-auto mb-2" />,
    },
    {
      name: "NodeJs",
      icon: <Cpu className="w-10 h-10 text-green-500 mx-auto mb-2" />,
    },
    {
      name: "MySQL",
      icon: <Database className="w-10 h-10 text-blue-400 mx-auto mb-2" />,
    },
    {
      name: "MongoDB",
      icon: <Server className="w-10 h-10 text-green-500 mx-auto mb-2" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Layers className="w-10 h-10 text-cyan-400 mx-auto mb-2" />,
    },
    {
      name: "Bootstrap",
      icon: <Code2 className="w-10 h-10 text-purple-400 mx-auto mb-2" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Layers className="w-10 h-10 text-cyan-400 mx-auto mb-2" />,
    },
    {
      name: "Bootstrap",
      icon: <Code2 className="w-10 h-10 text-purple-400 mx-auto mb-2" />,
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio showcasing my work and skills.",
      image: HeaderImage,
      skills: ["ReactJS", "Tailwind CSS", "NodeJS"],
    },
    {
      title: "E-commerce Store",
      description:
        "Full-featured online store with product search and cart system.",
      image: AboutImage,
      skills: ["Shopify", "Bootstrap", "MySQL"],
    },
    {
      title: "Blog Platform",
      description: "A custom blog platform with CMS functionality.",
      image: HeaderImage,
      skills: ["WordPress", "PHP", "MongoDB"],
    },
    {
      title: "E-commerce Store",
      description:
        "Full-featured online store with product search and cart system.",
      image: AboutImage,
      skills: ["Shopify", "Bootstrap", "MySQL"],
    },
    {
      title: "Blog Platform",
      description: "A custom blog platform with CMS functionality.",
      image: HeaderImage,
      skills: ["WordPress", "PHP", "MongoDB"],
    },
  ];

  const services = [
    { name: "Landing Pages", icon: Monitor },
    { name: "Portfolio Websites", icon: Briefcase },
    { name: "E-commerce Sites", icon: ShoppingCart },
    { name: "CRM Integrations", icon: Zap },
    { name: "Custom Web Applications", icon: Code },
    { name: "Blog Platforms", icon: Globe },
    { name: "Corporate Websites", icon: Building2 },
    { name: "Booking & Scheduling Systems", icon: Calendar },
    { name: "Dashboard & Analytics", icon: BarChart3 },
    { name: "Membership Sites", icon: Lock },
    { name: "Event Pages", icon: Calendar },
    { name: "Product Landing Pages", icon: Monitor },
    { name: "Social Media Pages", icon: Megaphone },
    { name: "Educational Platforms", icon: GraduationCap },
    { name: "Real Estate Listings", icon: HomeIcon },
    { name: "Portfolio with Client Testimonials", icon: Users },
    { name: "Personal Branding Sites", icon: UserCircle },
    { name: "One-Page CV/Resume Sites", icon: IdCard },
    { name: "Customer Support Portals", icon: MessageSquare },
    { name: "Interactive Forms & Surveys, & More...", icon: ClipboardList },
  ];

  const reviews = [
    {
      name: "John Doe",
      work: "Portfolio Website",
      message: "Amazing work!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      work: "E-commerce Store",
      message: "Highly recommend!",
      rating: 4,
    },
    {
      name: "David Lee",
      work: "Blog Platform",
      message: "Professional and creative!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      work: "Landing Page",
      message: "Delivered on time!",
      rating: 5,
    },
    {
      name: "Chris Brown",
      work: "CRM Integration",
      message: "Loved the quality!",
      rating: 4,
    },
    {
      name: "Sophia Green",
      work: "Dashboard UI",
      message: "Very responsive!",
      rating: 5,
    },
  ];

  const workOptions = [
    "Portfolio Website",
    "E-commerce Store",
    "Blog Platform",
    "Landing Page",
    "CRM Integration",
    "Dashboard UI",
  ];

  const [formData, setFormData] = useState({
    name: "",
    work: "",
    message: "",
    rating: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);
    setFormData({ name: "", work: "", message: "", rating: 0 });
    setShowModal(false);
  };

  return (
    <>
      <header className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16 lg:py-24">
          {/* Left Section - Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Turning <span className="text-indigo-500">Ideas</span> Into
              <br />
              <span className="text-yellow-400">Digital Masterpieces</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
              I’m a passionate freelancer specializing in crafting stunning,
              functional, and high-performing web experiences — helping brands
              shine online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg font-semibold shadow-lg"
              >
                Work With Me
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black transition rounded-lg font-semibold"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0">
            <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500">
              <Image
                src={HeaderImage} // Replace with your image path in public folder
                alt="Freelancer at work"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-indigo-500">
              <Image
                src={AboutImage} // Replace with your image
                alt="About Me"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Cards + Description */}
          <div className="flex-1">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center border border-white/20 hover:bg-transparent transition">
                <Award className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-gray-300 text-sm">Skills</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center border border-white/20 hover:bg-transparent transition">
                <Briefcase className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">4+ Years</h3>
                <p className="text-gray-300 text-sm">Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center border border-white/20 hover:bg-transparent transition">
                <Layers className="w-10 h-10 text-pink-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-gray-300 text-sm">Projects Completed</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              I am a passionate and results-driven freelancer with over four
              years of experience in creating visually stunning, highly
              functional, and user-friendly digital solutions. My diverse skill
              set allows me to adapt to different project requirements and
              deliver high-quality results that exceed client expectations.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400">What Major Skills I Have</p>
            <h2 className="text-3xl font-bold">My Skills</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center border border-white/20 hover:bg-transparent transition"
              >
                {skill.icon}
                <p className="text-gray-300 font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
              Projects
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <button className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              My Services
            </span>
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-200 bg-white/10 shadow-sm hover:shadow-lg hover:border-indigo-500 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="mx-auto mb-3 h-8 w-8 text-indigo-500 group-hover:text-purple-500 transition-colors" />
                  <p className="font-medium text-gray-300 group-hover:text-indigo-600 transition-colors">
                    {service?.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Client Reviews
          </h2>

          {/* Display Reviews */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 p-6">
            {currentReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="text-sm text-indigo-300">{review.work}</p>
                <p className="mt-3">{review.message}</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mb-12">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-indigo-500 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          {/* Add Review Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow-lg transition"
            >
              Add Review
            </button>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-2xl font-semibold mb-4">Add a Review</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-2 rounded bg-white/5 border border-white/20 focus:border-indigo-400 outline-none"
                  />

                  <select
                    value={formData.work}
                    onChange={(e) =>
                      setFormData({ ...formData, work: e.target.value })
                    }
                    className="w-full p-2 rounded bg-white/5 border border-white/20 focus:border-indigo-400 outline-none"
                  >
                    <option value="">Select Work Type</option>
                    {workOptions.map((work, idx) => (
                      <option key={idx} value={work}>
                        {work}
                      </option>
                    ))}
                  </select>

                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-2 rounded bg-white/5 border border-white/20 focus:border-indigo-400 outline-none"
                    rows="4"
                  ></textarea>

                  {/* Star Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        onClick={() =>
                          setFormData({ ...formData, rating: i + 1 })
                        }
                        className={`w-6 h-6 cursor-pointer transition ${
                          i < formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-500 hover:text-yellow-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded shadow-lg transition"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Heading */}
          <div className="text-center mb-12">
            <h4 className="text-indigo-400 uppercase tracking-wider mb-2">
              Get In Touch
            </h4>
            <h2 className="text-4xl font-bold">Any Enquiry</h2>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto">
              Feel free to reach out through any platform or send a direct
              message using the form below.
            </p>
          </div>

          {/* Cards + Form Container */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 w-full max-w-5xl">
            {/* Cards Column */}
            <div className="flex flex-col justify-between gap-6 flex-1">
              {[
                {
                  icon: (
                    <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  ),
                  title: "Email",
                  desc: "Freelancer Sumit 🚀",
                  link: "mailto:your@email.com",
                },
                {
                  icon: (
                    <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  ),
                  title: "Messenger",
                  desc: "Freelancer Sumit 🚀",
                  link: "https://m.me/yourusername",
                },
                {
                  icon: (
                    <Instagram className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  ),
                  title: "Instagram",
                  desc: "Freelancer Sumit 🚀",
                  link: "https://instagram.com/yourusername",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center flex-1"
                >
                  {item.icon}
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-indigo-300">{item.desc}</p>
                  <a
                    href={item.link}
                    className="mt-2 inline-block text-indigo-400 hover:text-indigo-300 text-sm"
                  >
                    Send a message
                  </a>
                </div>
              ))}
            </div>

            {/* Form */}
            <form className="bg-white/5 p-6 rounded-xl shadow-lg space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-indigo-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-indigo-400 outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-indigo-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg w-full shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-300 pt-12">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/10">
            {/* Logo + Description */}
            <div>
              <h2 className="text-2xl font-bold text-white">
                Freelancer Sumit 🚀
              </h2>
              <p className="mt-3 text-gray-400 text-sm max-w-xs">
                Helping clients achieve their vision through high-quality,
                modern web development and design.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-indigo-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-indigo-400 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-indigo-400 transition"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-indigo-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-indigo-500 hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-indigo-500 hover:text-white transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-indigo-500 hover:text-white transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-indigo-500 hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Freelancer Sumit 🚀. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
