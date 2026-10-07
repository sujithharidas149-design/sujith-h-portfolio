import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Quick message builder
  const [inquiryType, setInquiryType] = useState<'Full-Time Role' | 'Freelance Project' | 'Agency Collaboration'>('Full-Time Role');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentToast, setSentToast] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Collaboration Inquiry from ${senderName || 'Recruiter/Client'}`);
    const body = encodeURIComponent(
      `Hello Sujith,\n\nMy name is ${senderName} (${senderEmail}).\n\n${message || 'I came across your portfolio and would like to discuss an opportunity.'}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentToast(true);
    setTimeout(() => setSentToast(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#090708] border-t border-[#E7DCD3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#9B2946]">09 · INITIATION</span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#9B2946]/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Headline & Direct Contact Channel Details */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#F5F0EA] font-normal leading-[0.94] text-balance">
              LET'S MAKE SOMETHING PEOPLE <span className="italic text-[#E7DCD3]">REMEMBER</span>.
            </h2>

            <p className="font-sans-clean text-lg sm:text-xl text-[#AAA0A3] font-light max-w-lg leading-relaxed">
              Have a full-time opening, performance marketing challenge, or creative project? Let's connect.
            </p>

            {/* Direct Cards */}
            <div className="pt-6 space-y-4 max-w-md font-sans-clean">
              {/* Email Card */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#12090D] border border-[#E7DCD3]/10 hover:border-[#9B2946]/60 transition-colors">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#4A0E1C]/80 border border-[#9B2946] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E7DCD3]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#AAA0A3] block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-medium text-[#F5F0EA] hover:text-[#9B2946] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-[#AAA0A3] hover:text-[#F5F0EA] transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#12090D] border border-[#E7DCD3]/10 hover:border-[#9B2946]/60 transition-colors">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#4A0E1C]/80 border border-[#9B2946] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E7DCD3]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#AAA0A3] block">
                      TELEPHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-medium text-[#F5F0EA] hover:text-[#9B2946] transition-colors"
                    >
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-[#AAA0A3] hover:text-[#F5F0EA] transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#12090D] border border-[#E7DCD3]/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25070E] border border-[#67152A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#9B2946]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#AAA0A3] block">
                      HEADQUARTERS
                    </span>
                    <span className="text-sm font-medium text-[#F5F0EA]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#AAA0A3]">IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-[#25070E]/80 via-[#12090D] to-[#090708] border border-[#9B2946]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F0EA] mb-2">
                Send Direct Inquiry
              </h3>
              <p className="text-xs text-[#AAA0A3] font-sans-clean mb-6">
                Choose an inquiry type and compose your note; clicking send immediately prepares an email addressed to Sujith.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry Type Selector (Segmented controls) */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#AAA0A3] mb-2">
                    Inquiry Intent
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(['Full-Time Role', 'Freelance Project', 'Agency Collaboration'] as const).map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-center truncate ${
                          inquiryType === type
                            ? 'bg-[#4A0E1C] border-[#9B2946] text-[#F5F0EA]'
                            : 'bg-[#12090D] border-[#E7DCD3]/10 text-[#AAA0A3] hover:text-[#F5F0EA]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#AAA0A3] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#090708]/80 border border-[#E7DCD3]/15 rounded-xl text-sm text-[#F5F0EA] placeholder-[#AAA0A3]/50 focus:border-[#9B2946] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#AAA0A3] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@agency.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#090708]/80 border border-[#E7DCD3]/15 rounded-xl text-sm text-[#F5F0EA] placeholder-[#AAA0A3]/50 focus:border-[#9B2946] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#AAA0A3] mb-1.5">
                    Project / Role Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Sujith about the scope, role expectations, or timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#090708]/80 border border-[#E7DCD3]/15 rounded-xl text-sm text-[#F5F0EA] placeholder-[#AAA0A3]/50 focus:border-[#9B2946] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#4A0E1C] hover:bg-[#67152A] text-[#F5F0EA] text-xs uppercase tracking-widest font-semibold rounded-xl border border-[#9B2946] transition-all duration-300 shadow-[0_10px_25px_rgba(74,14,28,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Dispatch To Sujith</span>
                  <Send className="w-3.5 h-3.5 text-[#E7DCD3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {sentToast && (
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-200 text-center animate-fadeIn">
                    Draft prepared in your email client!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
