/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Sparkles, 
  Mail, 
  DollarSign, 
  User,
  ShieldCheck,
  TrendingUp,
  PenTool,
  Clock,
  ArrowUpRight,
  Lock
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offer: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-white/20">
            <PenTool className="text-black w-5 h-5" />
          </div>
          <a 
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="font-display font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity"
>
  Webquil
</a>
        </div>
        <div className="hidden lg:flex gap-10 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/40">
          <a href="#meaning" className="hover:text-white transition-colors">The Vision</a>
          <a href="#why" className="hover:text-white transition-colors">Asset Value</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Potential</a>
          <a href="#contact" className="hover:text-white transition-colors">Inquire</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden sm:block text-sm font-bold hover:text-white/70 transition-colors">Make Offer</a>
          <a 
            href="#contact" 
            className="relative group bg-white text-black px-7 py-3.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">Acquire Now</span>
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-start pt-32 pb-12 px-6 overflow-hidden mesh-gradient">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-white/60"
            >
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              Exclusive Digital Asset Opportunity
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]"
            >
              Own the Name. <br />
              <span className="text-white md:text-gradient">
                Define the Brand.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/50 max-w-3xl mb-14 leading-tight font-light"
            >
              Webquil.com is the definitive brand for the next generation of digital creators. A premium, one-word fusion of heritage and high-tech.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-10 mb-4 md:mb-8"
            >
              <div className="flex flex-wrap gap-8 items-start">
                <div className="flex flex-col gap-5">
                  <button 
                    onClick={() => window.location.href = '#contact'}
                    className="relative group bg-white text-black px-12 py-6 rounded-2xl font-bold text-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Secure the Domain <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 rounded-2xl bg-white blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                  </button>
                  
                  <div className="flex flex-col gap-2.5 px-2">
                    {[
                      "Secure Escrow Transfer",
                      "Full Ownership Rights",
                      "One-Time Payment"
                    ].map((text) => (
                      <div key={text} className="flex items-center gap-2.5 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href = '#contact'}
                  className="bg-white/5 border border-white/10 px-10 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  Make an Offer
                </button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-8 bg-brand-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-brand-accent mb-3 font-black">Acquisition Value</span>
                  <div className="flex items-center gap-6">
                    <span className="text-7xl md:text-9xl font-display font-bold text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">$695</span>
                    <div className="flex flex-col -space-y-1">
                      <span className="text-white/20 text-xl md:text-2xl line-through decoration-brand-accent/40">$1,250</span>
                      <span className="text-[11px] font-black text-green-500 uppercase tracking-[0.2em]">Save 45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            rotate: 0, 
            scale: 1,
            y: [0, -20, 0],
            rotateZ: [0, 2, 0]
          }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 15, 
            rotateX: 5,
            transition: { duration: 0.4 }
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5,
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotateZ: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute right-[-5%] top-[20%] w-[40%] aspect-square glass-card hidden lg:flex items-center justify-center rotate-3 border-white/10 overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.15)]"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          {/* Subtle Glow Background */}
          <div className="absolute -inset-20 bg-brand-accent/10 blur-[120px] rounded-full opacity-40 pointer-events-none animate-pulse" />
          
          {/* Moving Sheen / Lighting Effect */}
          <motion.div
            animate={{ 
              translateX: ['-200%', '200%'],
              translateY: ['-200%', '200%'],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 2
            }}
            className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent w-[200%] h-[200%] -rotate-45 pointer-events-none"
          />

          {/* Inner Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
          
          <div className="text-center p-12 relative z-10" style={{ transform: "translateZ(80px)" }}>
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="font-serif italic text-9xl text-white/10 mb-4 select-none"
            >
              W
            </motion.div>
            <div className="font-display text-7xl font-bold tracking-tighter mb-2 text-gradient">Webquil</div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1.2, delay: 1.5, ease: "circOut" }}
              className="h-px bg-brand-accent mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
            />
            <p className="text-white/40 font-serif italic text-2xl">The artisan's digital legacy.</p>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
        </motion.div>
      </section>

      {/* Brand Vision Section */}
      <section id="meaning" className="py-20 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <motion.div {...fadeInUp}>
                <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Vision</span>
                <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 leading-[0.9] tracking-tighter">
                  The Quill, Reimagined <br />
                  <span className="font-serif italic font-light text-white/60">for the Digital Age.</span>
                </h2>
                <div className="space-y-8 text-xl md:text-2xl text-white/50 leading-relaxed font-light">
                  <p>
                    Webquil is the digital successor to the artisan's most essential tool. It bridges the gap between <span className="text-white font-medium">classic craftsmanship</span> and the cutting edge of SaaS and AI.
                  </p>
                  <p>
                    By merging "Web" with the "Quill," we've created a name that feels both <span className="text-white font-medium">established and innovative</span>. The single-L spelling is a deliberate choice for modern brevity and brand recall.
                  </p>
                  <p className="font-serif italic text-white/70">
                    "It’s not just a domain. It’s the first word of your brand’s story."
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <motion.div 
                {...fadeInUp}
                className="relative aspect-[4/5] glass-card overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-transparent to-purple-500/10 opacity-50" />
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                    <PenTool className="w-12 h-12 text-brand-accent" />
                  </div>
                  <div className="font-display text-5xl font-bold tracking-tighter mb-4">Webquil</div>
                  <div className="text-white/30 tracking-[0.4em] uppercase text-[10px] font-bold">Crafting the Future</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Value Section */}
      <section id="why" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Asset Value</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-[0.9] tracking-tighter">Why Webquil is a <br />Tier-1 Investment.</h2>
            </motion.div>
            <motion.div {...fadeInUp} className="flex items-center gap-4 text-white/40 font-bold uppercase tracking-widest text-xs">
              <TrendingUp className="w-5 h-5 text-brand-accent" />
              Appreciating Digital Real Estate
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-1px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
              {
                title: "Instant Authority",
                desc: "A name that sounds like a billion-dollar company from day one. Skip the 'startup' phase and project enterprise-level trust.",
                icon: <ShieldCheck className="w-8 h-8 text-blue-400" />
              },
              {
                title: "Universal Appeal",
                desc: "From creative agencies to AI-driven SaaS, Webquil adapts to your vision while maintaining its premium essence.",
                icon: <Layers className="w-8 h-8 text-purple-400" />
              },
              {
                title: "SEO Advantage",
                desc: "Short, pronounceable, and easy to type. A high-recall name that reduces your customer acquisition costs over time.",
                icon: <TrendingUp className="w-8 h-8 text-green-400" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg p-12 hover:bg-white/[0.02] transition-colors"
              >
                <div className="mb-10">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{item.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Section */}
      <section id="use-cases" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Potential</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">One Name. <br />Infinite Verticals.</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                title: "The Creative Agency",
                desc: "A home for designers who treat code like art. Webquil is the ultimate studio name for high-end digital production.",
                metric: "High Retention"
              },
              {
                title: "The SaaS Powerhouse",
                desc: "The perfect brand for workflow tools, CMS platforms, or collaborative editors. Scalable, sleek, and professional.",
                metric: "Global Scale"
              },
              {
                title: "The AI Frontier",
                desc: "Ideal for generative text tools or AI-driven content engines. A name that sounds intelligent and sophisticated.",
                metric: "Future Ready"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="group"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{item.metric}</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-accent transition-colors duration-500">{item.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-light mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-white/80 group-hover:gap-4 transition-all">
                  Explore Potential <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-32 px-6">
        <motion.div 
          {...fadeInUp}
          className="max-w-5xl mx-auto glass-card p-16 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/60">
              <Clock className="w-4 h-4" /> Limited Time Opportunity
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.9]">Opportunities like this <br />don't wait.</h2>
            <p className="text-2xl text-white/50 mb-12 font-light max-w-2xl mx-auto">
              Webquil.com is a singular asset. Once the acquisition is complete, it will be off the market for years, if not decades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => window.location.href = '#contact'}
                className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all"
              >
                Acquire for $695
              </button>
              <div className="text-white/40 text-sm font-medium">
                Includes secure transfer & 24/7 support
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div {...fadeInUp}>
              <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Inquire</span>
              <h2 className="font-display text-6xl font-bold mb-10 tracking-tighter leading-[0.9]">Let's finalize <br />your brand.</h2>
              <p className="text-2xl text-white/50 mb-16 font-light leading-relaxed">
                We facilitate rapid, secure domain transfers via Escrow.com. Send your offer or inquiry to start the process.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Direct Line</div>
                  <div className="text-2xl font-medium">hello@webquil.com</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Secure Method</div>
                  <div className="text-2xl font-medium">Escrow Protected</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="glass-card p-10 md:p-16 relative">
              <div className="absolute inset-0 grid-pattern opacity-5" />
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    
                    action="https://formspree.io/f/xyknrlnb"
                    method="POST"
                    className="space-y-8 relative z-10"
                  >
                    <input type="hidden" name="_subject" value="Webquil Domain Offer" />
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Full Name</label>
                        <input 
                          name="name"
                          required
                          type="text" 
                          placeholder="Alex Morgan"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-accent transition-colors"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Email Address</label>
                        <input 
                          name="email"
                          required
                          type="email" 
                          placeholder="alex@vision.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-accent transition-colors"
                          />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Offer Amount (USD)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/20" />
                        <input 
                          name="offer"
                          required
                          type="number" 
                          placeholder="695"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 focus:outline-none focus:border-brand-accent transition-colors font-display font-bold text-3xl"
                          />
                      </div>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-white text-black py-6 rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-white/10"
                    >
                      Submit Acquisition Request
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-brand-accent" />
                    </div>
                    <h3 className="text-4xl font-bold mb-4 tracking-tight">Request Received.</h3>
                    <p className="text-xl text-white/50 font-light">We will contact you within 24 hours to finalize the transfer.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <PenTool className="text-black w-4 h-4" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Webquil</span>
          </div>
          
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Escrow</a>
          </div>

          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-right">
            &copy; {new Date().getFullYear()} Webquil.com <br />
            Secure Asset Acquisition
          </p>
        </div>
      </footer>
    </div>
  );
}
