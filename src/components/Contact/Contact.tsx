'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Sparkles, ArrowRight, Mail, Copy, Check, Phone } from "lucide-react";

const ContactPage = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const email = "mulgechannveer@gmail.com"; 
  const number = "+91 70208 41171"; 

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

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handlePhoneCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone:', err);
    }
  };

  const starColors = [
    '#FFD700', '#FF6B9D', '#00D4FF', '#FF4757', '#7B68EE',
    '#32CD32', '#FF8C00', '#9370DB', '#00CED1', '#FF69B4',
    '#ADFF2F', '#FF1493'
  ];

  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    color: starColors[Math.floor(Math.random() * starColors.length)],
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

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
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden"
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

      <div className="text-center max-w-2xl mx-auto relative z-10">
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

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-mono text-sm md:text-base">{email}</span>
            <button
              onClick={handleEmailCopy}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
              title="Copy email"
            >
              {emailCopied ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400">Copied!</span>
                </motion.div>
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-mono text-sm md:text-base">{number}</span>
            <button
              onClick={handlePhoneCopy}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
              title="Copy phone"
            >
              {phoneCopied ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400">Copied!</span>
                </motion.div>
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Download Resume */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <a 
            href="/My_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-3 bg-white text-black py-3 px-6 rounded-lg font-bold text-lg transition hover:bg-gray-200"
          >
            <Download className="w-5 h-5" />
            Download Resume
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center mb-12"
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

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-500"
        >
          Let&#39;s build something extraordinary together
        </motion.p>
      </div>
    </div>
  );
};

export default ContactPage;