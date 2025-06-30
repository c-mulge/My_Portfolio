'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Sparkles, ArrowRight, Send, User, Mail, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      href: "https://github.com/c-mulge",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/channveer-mulge/",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "https://x.com/Cmulge16",
      icon: Twitter,
      label: "Twitter"
    }
  ];

  // Star colors array
  const starColors = [
    '#FFD700', // Gold
    '#FF6B9D', // Pink
    '#00D4FF', // Cyan
    '#FF4757', // Red
    '#7B68EE', // Medium Slate Blue
    '#32CD32', // Lime Green
    '#FF8C00', // Dark Orange
    '#9370DB', // Medium Purple
    '#00CED1', // Dark Turquoise
    '#FF69B4', // Hot Pink
    '#ADFF2F', // Green Yellow
    '#FF1493'  // Deep Pink
  ];

  // Generate random star positions and sizes with colors
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    color: starColors[Math.floor(Math.random() * starColors.length)],
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  // Generate some larger twinkling stars with colors
  const bigStars = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 50,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 6 + 4}px`,
    color: starColors[Math.floor(Math.random() * starColors.length)],
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 3
  }));

  return (
    <div 
      id="contact-section" 
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
    >
      {/* Background stars */}
      {stars.map((star) => (
        <motion.div
          key={`small-star-${star.id}`}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: star.delay,
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {bigStars.map((star) => (
        <motion.div
          key={`big-star-${star.id}`}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: `0 0 12px 3px ${star.color}40`
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 1, 0.5, 1, 0], 
            scale: [0.5, 1, 0.8, 1.2, 1] 
          }}
          transition={{
            delay: star.delay,
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium">Available for new projects</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Transform Your Vision
          <span className="block mt-4">Into Digital Reality</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 text-gray-400"
        >
          Creating stunning websites that capture your unique story
          <br />
          with cutting-edge technology
        </motion.p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-md mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full group inline-flex items-center justify-center gap-3 bg-white text-black py-3 px-6 rounded-lg font-bold text-lg transition hover:bg-gray-200"
            >
              <Send className="w-5 h-5" />
              Send Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Social Links - Now positioned below the contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              title={social.label}
            >
              <social.icon size={24} className="text-white" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;