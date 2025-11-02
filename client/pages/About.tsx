import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-crypto-bg text-white overflow-x-hidden relative">
      {/* Background Image - Scrolls with page */}
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
        {/* Header */}
        <Header />

        {/* First Block: About Us, Mission, Vision in one container */}
        <section className="relative pt-32 pb-12 md:pb-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div 
            className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10" 
            {...fadeInUp}
          >
            <div className="flex flex-col gap-8">
              {/* About Us Row */}
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="w-full lg:w-1/2">
                  <div className="text-[40px] md:text-[56px] font-medium mb-6">About Us</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    At "Kailasa," we are revolutionizing how you seek guidance and support. Our mission is to empower 
                    individuals with a personalized, supreme intelligence that adapts to your unique needs and goals. 
                    Whether you're navigating career decisions, refining your leadership skills, optimizing your health 
                    and fitness, or strengthening relationships, "Kailasa" offers expert-level advice and actionable insights. 
                    From parenting to financial planning, yoga to motivation, our supreme intelligence is your ultimate 
                    companion for personal growth and well-being. With a foundation built on advanced technology and a deep 
                    understanding of human aspirations, we are here to simplify your journey to a balanced, successful, and 
                    fulfilling life—all in one trusted source.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" 
                    alt="View snowcapped mountain against cloudy sky"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              {/* Mission and Vision Row */}
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                  <div className="text-[40px] md:text-[56px] font-medium mb-6">Mission</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    At "Kailasa," our mission is to empower individuals to overcome personal challenges and achieve their 
                    aspirations with clarity and confidence. By offering both subjective and objective advice, we ensure a 
                    holistic approach to problem-solving. Our commitment extends beyond guidance; we provide continuous support 
                    and education—offering what traditional systems often overlook—to equip you with the skills, common sense, 
                    and insights needed to succeed. With "Kailasa," you're never alone on your journey to personal growth.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-[40px] md:text-[56px] font-medium mb-6">Vision</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">
                    At "Kailasa," our vision is to redefine how individuals achieve personal growth, harmony, and success. 
                    We aim to be the trusted, confidential intelligence in your pocket, offering personalized and custom advice 
                    that aligns with your unique journey. We aim to enhance emotional intelligence and situational handling, 
                    bringing people closer together and creating positive, supportive cultures at home and in workplaces. 
                    "Kailasa" envisions a world where guidance is accessible and transformative and inspires a brighter, more 
                    connected future for everyone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Second Block: Founder Message */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div 
            className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
            {...fadeInUp}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" 
                  alt="Founder"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="text-[40px] md:text-[56px] font-medium mb-6">Founder Message</div>
                <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
                  <p>
                    Hi, I'm the founder of "Kailasa," and I'm thrilled to connect with you. Our mission is to help 
                    you achieve personal growth, harmony, and success in a way that's unique to you. Think of us as your 
                    trusted, confidential advisor, always by your side, offering personalized insights that support your 
                    journey.
                  </p>
                  <p>
                    We're here to help you enhance emotional intelligence, navigate life's challenges, and build stronger 
                    connections—whether at home or in the workplace. Together, we're creating a world where transformative 
                    guidance & assistance is always accessible, inspiring a brighter and more connected future for everyone.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-2xl font-semibold mb-1">Satya Dillikar</div>
                  <p className="text-white/80 mb-4">Founder, Kailasa App</p>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Third Block: Co-Founder Message */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div 
            className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
            {...fadeInUp}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <div className="text-[40px] md:text-[56px] font-medium mb-6">Co-Founder Message</div>
                <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
                  <p>
                    Hey! I'm one of the founding engineers of "Kailasa", and we built this because we know how tough 
                    it can be to deal with personal struggles and try to figure things out on your own. Our goal is to 
                    help you face challenges and reach your goals with more clarity and confidence.
                  </p>
                  <p>
                    With powerful tech and smart systems behind the scenes, the app gives both real-world advice and 
                    personalized support that fits you. It's not just about quick fixes. we're focused on helping you 
                    grow over time with meaningful insights and steps that most apps or systems miss.
                  </p>
                  <p>
                    We're here to make sure you never feel stuck or alone in your journey. With "Kailasa", you'll always 
                    have guidance, tools, and support right in your pocket. Let's grow together!
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-2xl font-semibold mb-1">Savir Dillikar</div>
                  <p className="text-white/80 mb-4">Founding Engineer, Kailasa App</p>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop" 
                  alt="Co-Founder"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Store Links Section */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div className="flex flex-col items-center gap-6 md:gap-8" {...fadeIn}>
            {/* <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Login to Web Badge.svg"
                  alt="Login to Web"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Mobile App Store Badges_white.svg"
                  alt="Download on the App Store"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Mobile App Store Badges_android_white.svg"
                  alt="Get it on Google Play"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div> */}
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
