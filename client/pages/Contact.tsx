import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { config } from "@/lib/config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setSubmitStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiUrl = config.contactApiUrl;
      console.log('Submitting contact form to:', apiUrl);
      console.log('Form data:', formData);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success response:', data);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you for contacting us! We will get back to you soon.' 
      });
      handleReset();
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmitStatus({ 
        type: 'error', 
        message: `Failed to send message: ${errorMessage}. Please try again later or contact us directly at support@kailasa.app` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-crypto-bg text-white overflow-x-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/BG21_2.webp)',
          backgroundAttachment: 'scroll',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }}
      />
      <div className="relative z-10">
        <Header />

        <section className="relative pt-32 pb-12 md:pb-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div 
            className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
            {...fadeInUp}
          >
            <div className="font-great-victorian text-[36px] md:text-[48px] font-medium mb-8 text-center">
              Contact Us
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-crypto-primary transition-colors font-clash-display"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-crypto-primary transition-colors font-clash-display"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter your phone number*"
                    title="Enter a valid 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-crypto-primary transition-colors font-clash-display"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    placeholder="Message/Comment*"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-crypto-primary transition-colors resize-none font-clash-display"
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="reset"
                    onClick={handleReset}
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors font-clash-display font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-crypto-primary text-crypto-bg rounded-xl hover:bg-crypto-primary/90 transition-colors font-clash-display font-bold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <p className="font-clash-display text-white/60 mb-2 font-semibold">Information</p>
                  <a
                    href="mailto:info@kailasa.app"
                    className="font-clash-display text-white hover:text-crypto-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    info@kailasa.app
                  </a>
                </div>

                <div>
                  <p className="font-clash-display text-white/60 mb-2 font-semibold">Customer Service</p>
                  <a
                    href="mailto:support@kailasa.app"
                    className="font-clash-display text-white hover:text-crypto-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    support@kailasa.app
                  </a>
                </div>

                <div>
                  <p className="font-clash-display text-white/60 mb-2 font-semibold">Registered Office</p>
                  <p className="font-clash-display text-white">
                    San Francisco, California, United States
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

