import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
  Heart,
  Users,
  UserCheck
} from 'lucide-react';
import { PROFILE, INNER_CIRCLE, IMAGES } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-slate-900 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.contact}
          alt="Contact background crystal"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#050811]/92 to-[#050811]" />
        <div className="absolute inset-0 bg-grid-cyber opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, need a full-stack engineer, or just want to connect? Reach out through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Phone / WhatsApp</span>
                    <h4 className="text-sm font-bold text-white">Call or WhatsApp</h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyPhone}
                    title="Copy phone number"
                    className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                  <a
                    href={PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-all"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <a
                href={`tel:${PROFILE.phone}`}
                className="text-base sm:text-lg font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors block mt-2"
              >
                {PROFILE.phone}
              </a>
              <span className="text-[11px] font-mono text-slate-500">
                Rwanda local format: {PROFILE.phone} &bull; International: +250 790 962 628
              </span>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 backdrop-blur-md transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</span>
                    <h4 className="text-sm font-bold text-white">Send an Email</h4>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/40 text-xs font-mono text-slate-300 hover:text-sky-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-sky-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PROFILE.email}`}
                className="text-xs sm:text-sm font-mono text-sky-400 hover:text-sky-300 break-all transition-colors block mt-2"
              >
                {PROFILE.email}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Base Location</span>
                  <h4 className="text-sm font-bold text-white">{PROFILE.location}</h4>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">
                Available for software engineering roles in Kigali, remote freelance projects, and global opportunities.
              </p>
            </div>

            {/* Social Grid with user's exact handles */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <span className="text-xs font-mono text-slate-400 uppercase block mb-3">
                Official Social & Developer Profiles
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {/* GitHub */}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-all group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  <div className="truncate">
                    <span className="block font-semibold">GitHub</span>
                    <span className="text-[10px] text-slate-500 font-mono truncate block">norbertihimbazwe</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/40 text-xs text-slate-300 hover:text-sky-400 transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <div className="truncate">
                    <span className="block font-semibold">LinkedIn</span>
                    <span className="text-[10px] text-slate-500 font-mono truncate block">manzi norbert</span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href={PROFILE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 text-xs text-slate-300 hover:text-blue-400 transition-all group"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <div className="truncate">
                    <span className="block font-semibold">Facebook</span>
                    <span className="text-[10px] text-slate-500 font-mono truncate block">manziwizzynorbert</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-500/40 text-xs text-slate-300 hover:text-pink-400 transition-all group"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <div className="truncate">
                    <span className="block font-semibold">Instagram</span>
                    <span className="text-[10px] text-slate-500 font-mono truncate block">@ma_nzi1</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-sky-950/30 border border-sky-500/40 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank you for reaching out!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message was prepared. You can also reach me directly at{' '}
                    <a href={`tel:${PROFILE.phone}`} className="text-emerald-400 font-semibold underline">
                      {PROFILE.phone}
                    </a>{' '}
                    or{' '}
                    <a href={`mailto:${PROFILE.email}`} className="text-sky-300 font-semibold underline">
                      {PROFILE.email}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs text-slate-200 border border-slate-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Opportunity / Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, ideas, or how we might collaborate..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500/60 focus:outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sky-500/25 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Dedicated Family & Inner Circle Section */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5" />
              <span>Personal Circle</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Family & Close Friends
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Honoring the key people whose support, friendship, and encouragement inspire my life and software engineering pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sibling Card */}
            <div className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/40 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                {/* Avatar Badge */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold font-mono shadow-lg shadow-pink-500/20 shrink-0">
                  <Heart className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                      Usanase Lilly Brave
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      Sibling
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Beloved sibling, always offering unwavering love, joy, and inspiration throughout my software developer journey.
                  </p>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">Social Media:</span>
                    <a
                      href="https://instagram.com/usanaselillybrave"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/30 text-pink-300 text-xs font-mono font-semibold transition-all"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>@usanaselillybrave</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Friend Card */}
            <div className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                {/* Avatar Badge */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold font-mono shadow-lg shadow-sky-500/20 shrink-0">
                  <Users className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      Irakoze Hertier
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      Close Friend
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    My loyal friend and peer, always there through every step of life, education, and personal growth.
                  </p>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">Status:</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-medium">
                      <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                      <span>True Friend & Companion</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
