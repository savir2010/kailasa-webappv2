  import { motion } from "framer-motion";
  import { useEffect, useState, useRef } from "react";
  import { 
    ArrowRight, 
    ChevronLeft, 
    ChevronRight, 
    Heart,
    Link as LinkIcon,
    Zap as LightningIcon,
    Settings as SettingsIcon,
    BarChart as ChartIcon,
    Shield as ShieldIcon,
    Smartphone as MobileIcon,
    Globe as GlobeIcon,
    Sparkles as RefinementIcon,
    Wrench as ToolIcon,
    Layers as LayersIcon,
    Check as CheckIcon,
    Upload,
    Phone,
    MessageSquare,
    Target,
    Languages,
    Clock
  } from "lucide-react";
  import { Pie, PieChart, Sector, Cell } from "recharts";
  import { PieSectorDataItem } from "recharts/types/polar/Pie";
  import {
    ChartConfig,
    ChartContainer,
  } from "@/components/ui/chart";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  // Typewriter component for multi-line text
  function Typewriter({ lines }: { lines: string[] }) {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
      if (currentLineIndex < lines.length) {
        const currentLine = lines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => prev + currentLine[currentCharIndex]);
            setCurrentCharIndex(prev => prev + 1);
          }, 100);
          return () => clearTimeout(timeout);
        } else if (currentLineIndex < lines.length - 1) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => prev + '\n');
            setCurrentLineIndex(prev => prev + 1);
            setCurrentCharIndex(0);
          }, 300);
          return () => clearTimeout(timeout);
        }
      }
    }, [currentLineIndex, currentCharIndex, lines]);

    return (
      <div className="whitespace-pre-line">
        {displayedText}
      </div>
    );
  }

  export default function Index() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    const staggerContainer = {
      initial: {},
      whileInView: { transition: { staggerChildren: 0.1 } },
      viewport: { once: true, margin: "-100px" },
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

        {/* Hero Section */}
        <section className="relative pt-20 md:pt-32 pb-12 md:pb-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            <motion.div className="w-full max-w-[588px]" {...fadeInUp}>
              <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center justify-center px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10 bg-crypto-primary-light text-crypto-primary text-base md:text-lg w-fit">
                    Future of crypto trading
                  </span>
                  <h1 className="font-great-victorian text-[40px] sm:text-[56px] md:text-[84px] leading-[120%] font-medium tracking-tight text-white">
                    <Typewriter lines={["Manage Your Life With Kailasa"]} />
                  </h1>
                  <p className="text-base md:text-lg leading-[140%] text-white">
                  Tap into the transformative power of Kailasa Supreme Intelligence – your all-in-one digital life coach powered by AI. Whether you seek clarity in finance, wellness in health, or harmony in relationships, Kailasa brings ancient wisdom blended with modern artificial intelligence to elevate every aspect of your life.

                  </p>
                </div>
                <a 
                  href="https://web.kailasa.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-crypto-primary text-crypto-bg px-6 py-3 rounded-xl font-bold w-fit hover:bg-crypto-primary/90 transition-colors"
                >
                  Start Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/photo_hero.png"
                alt="Kailasa"
                className="w-[584px] h-[582px] object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* Featured Crypto Coins */}
        <FeaturedCoins />

        {/* Features Section */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <motion.div className="w-full max-w-[588px]" {...fadeInUp}>
              <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col items-center gap-3">
                  <p className="text-base md:text-lg">
                  </p>
                  <h2 className="font-great-victorian text-[36px] sm:text-[48px] md:text-[64px] leading-[120%] font-medium tracking-tight text-center md:text-left">
                    Turn your wishes into reality with Kailasa
                  </h2>
                </div>

                <div className="flex flex-wrap gap-6 md:gap-12 justify-center md:justify-start">
                  <Feature
                    icon={<LinkIcon className="w-5 h-5 text-crypto-primary" />}
                    text="Connect your mind, body, and energy through AI"
                  />
                  <Feature
                    icon={<LightningIcon className="w-5 h-5 text-crypto-primary" />}
                    text="Unlock your potential and accelerate growth"
                  />
                  <Feature
                    icon={<SettingsIcon className="w-5 h-5 text-crypto-primary" />}
                    text="Personalize your path to balance and fulfillment"
                  />
                  <Feature
                      icon={<Heart className="w-5 h-5 text-crypto-primary" />}
                      text="Align your emotions, purpose, and daily actions"
                    />

                </div>
              </div>
            </motion.div>

            <motion.div className="w-full lg:flex-1 flex justify-center lg:justify-end" {...fadeIn}>
              <PortfolioCard />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
          {...staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 md:gap-6">
            {[
              { value: "10K+", label: "Active users" },
              { value: "24/7", label: "Personalized Support" },
              { value: "160+", label: "Countries" },
              { value: "25+", label: "Languages" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-1 py-8 md:py-12 px-3 md:px-6 rounded-2xl border border-white/10 bg-white/5"
                {...fadeInUp}
              >
                <div className="text-[32px] md:text-[40px] leading-[120%] font-medium text-crypto-primary">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-white/80 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* One Application Section */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div className="flex flex-col items-center gap-6 md:gap-10" {...fadeInUp}>
            <div className="flex flex-col items-center gap-3 text-center mb-8 md:mb-12">
              <br className="hidden md:block" />
              <h2 className="font-great-victorian text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] font-medium tracking-tight max-w-3xl px-4">
              Key Features

              </h2>
            </div>
            

            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[840px] hidden md:block">
              <OneApplicationGraphic />
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
          {...fadeInUp}
        >
          <div className="flex justify-center">
            <div className="w-full max-w-[1200px] p-8 md:p-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-6 md:gap-8">
              <div className="flex flex-col gap-3 text-center">
                <h2 className="font-great-victorian text-[36px] sm:text-[44px] md:text-[48px] leading-[120%] font-medium tracking-tight">
                Available <span className="text-crypto-primary">Everywhere</span>
                </h2>
                <p className="text-base md:text-lg text-white/60 px-4">
                Whether you're on Android, iOS, or Web, Kailasa Supreme Intelligence syncs seamlessly across devices to guide you wherever you go.

                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
                <a
                  href="https://web.kailasa.app/"
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
              </div>
            </div>
          </div>
        </motion.section>

        {/* Create Portfolio Section */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <motion.div
              className="hidden lg:block flex-1 relative h-[517px]"
              {...fadeIn}
            >
              <CryptoCardsGraphic />
            </motion.div>

            <motion.div className="w-full max-w-[585px] lg:pl-8" {...fadeInUp}>
              <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  {/* <p className="text-base">
                    Crypto landing page{" "}
                    <span className="text-crypto-primary">template</span>
                  </p> */}
                  <h2 className="font-great-victorian text-[36px] sm:text-[44px] md:text-[48px] leading-[120%] font-medium tracking-tight">
                  Hyperpersonalize your AI experience                </h2>
                  <p className="text-base md:text-lg text-white/60">
                  Seamlessly integrates with your favorite apps to understand your context and deliver smarter, tailored insights.
                  </p>
                </div>

                <div className="flex flex-col gap-4 md:gap-5">
                  {[
                    { icon: <ChartIcon className="w-6 h-6 text-crypto-primary" />, text: "Syncs with your daily tools for deeper awareness" },
                    { icon: <ShieldIcon className="w-6 h-6 text-crypto-primary" />, text: "Understands your routines through connected apps" },
                    { icon: <MobileIcon className="w-6 h-6 text-crypto-primary" />, text: "Adapts insights across your digital life" },

                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="flex p-3 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        {item.icon}
                      </div>
                      <p className="text-xl md:text-2xl font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upgrade Section */}
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <motion.div className="w-full max-w-[585px]" {...fadeInUp}>
              <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col gap-3 text-center lg:text-left">

                  <h2 className="font-great-victorian text-[36px] sm:text-[44px] md:text-[48px] leading-[120%] font-medium tracking-tight">
                    Enhance your personal growth
                  </h2>
                  <p className="text-base md:text-lg text-white/60">
                    Transform your mental well-being with personalized AI guidance that adapts to your unique journey, providing continuous support whenever you need it.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex flex-col gap-4 md:gap-5">
                    {[
                      "100% Privacy",
                      "Easy to use",
                      "Personalized Insights",
                      "Easier to use",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                        <CheckIcon className="w-5 h-5 text-crypto-primary" />
                        <p className="text-lg font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5">
                    {[
                      "24/7 Availability",
                      "Adaptive Learning",
                      "Context-Aware Guidance",
                      "Privacy-First Approach",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                        <CheckIcon className="w-5 h-5 text-crypto-primary" />
                        <p className="text-lg font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block flex-1 relative h-[517px]"
              {...fadeIn}
            >
              <ChartCardsGraphic />
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <motion.section
          className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
          {...fadeInUp}
        >
          <div className="flex flex-col items-center gap-6 md:gap-10">
            <div className="w-full max-w-7xl">
              <VideoPlayer />
            </div>
          </div>
        </motion.section>


        {/* Footer */}
        <Footer />
        </div>
      </div>
    );
  }

  // Components

  function Logo() {
    return (
      <div className="flex items-center gap-2.5">
        <img 
          src="/image.png" 
          alt="Kailasa Logo" 
          className="w-8 h-8 object-contain"
        />
        <div className="flex flex-col">
        <svg width="93" height="32" viewBox="0 0 93 32" fill="none">
          <text
            x="0"
            y="24"
            fill="white"
            fontSize="24"
            fontWeight="500"
            fontFamily="DM Sans"
          >
              Kailasa
          </text>
        </svg>
          <p className="text-xs text-white/60 font-normal mt-0.5">Supreme Intelligence</p>
        </div>
      </div>
    );
  }

  function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
      <div className="flex items-start gap-3 md:gap-4 w-full md:w-auto">
        <div className="flex p-2 md:p-2.5 items-center justify-center rounded-full bg-white/10 shrink-0">
          {icon}
        </div>
        <p className="text-base md:text-xl font-medium max-w-[200px]">{text}</p>
      </div>
    );
  }

  function PortfolioCard() {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const chartData = [
      { name: "Succeed", value: 72, fill: "#2a463a", label: "Completed Goals" },
      { name: "Fail to achieve goals", value: 28, fill: "#a2dcab", label: "Uncompleted Goals" },
    ];

    const chartConfig = {
      value: {
        label: "Value",
      },
      succeed: {
        label: "Succeed",
        color: "#60A5FA",
      },
      fail: {
        label: "Fail to achieve goals",
        color: "#1E40AF",
      },
    } satisfies ChartConfig;

    return (
      <div className="w-full max-w-[600px] mx-auto lg:ml-auto">
        <style>{`
          [data-chart] .recharts-layer path,
          [data-chart] path.recharts-sector {
            transition: opacity 0.6s ease-in-out !important;
            transition-property: opacity !important;
          }
        `}</style>
        <div className="relative">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          >
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={120}
                outerRadius={180}
                strokeWidth={0}
                activeIndex={activeIndex}
                activeShape={({
                  outerRadius = 0,
                  ...props
                }: PieSectorDataItem) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                )}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
                isAnimationActive={false}
              >
                {chartData.map((entry, index) => {
                  const isInactive = activeIndex >= 0 && activeIndex !== index;
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.fill}
                      opacity={isInactive ? 0.4 : 1}
                    />
                  );
                })}
              </Pie>
            </PieChart>
          </ChartContainer>
          {/* Center text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-none mb-2 text-white">
                72%
                </div>
              <div className="text-base md:text-lg leading-tight text-white/80">
                <div>of reported</div>
                <div>goals on Kailasa</div>
                <div>are completed</div>
                </div>
              </div>
              </div>
        </div>
      </div>
    );
  }

  function FeaturedCoins() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const supremes = [
      { 
        name: 'Dhani', 
        image: '/Dhani.webp',
        color: 'rgba(0, 128, 128, 0.6)',
        subtitle: 'AI for Health and Medicine',
        description: 'Restore balance and vitality with Dhani, your AI-powered health guide. Whether you\'re focused on emotional healing or physical recovery, Dhani integrates AI healthcare technology and holistic practices to promote complete well-being.',
        features: [
          'Personalized support through AI medical insights',
          'Wellness recommendations via AI tools for healthcare',
        ],
        footer: 'Discover how AI in healthcare and ancient wisdom work together to optimize your health.'
      },
      { 
        name: 'Kubera', 
        image: '/Kubera.webp',
        color: 'rgba(212, 179, 0, 0.6)',
        subtitle: 'AI in Finance & Wealth',
        description: 'Unlock your path to abundance with Kubera, your intelligent wealth companion. Whether you\'re aiming to grow your savings or conduct AI financial statement analysis, Kubera uses modern AI in finance tools combined with timeless strategies to guide you toward financial empowerment.',
        features: [
          'Intelligent financial analysis software',
          'Advanced AI financial planning software',
          'Smart AI financial forecasting',
        ],
        footer: 'Transform your finances with cutting-edge finance AI insights.'
      },
      { 
        name: 'Fu Shen', 
        image: '/Feshen.webp',
        color: 'rgba(255, 20, 147, 0.6)',
        subtitle: 'AI for Relationships & Fulfillment',
        description: 'Build stronger connections and find inner joy with Fu Shen, your AI-powered relationship and wellness coach. Whether you\'re navigating emotions, love, or personal growth, Fu Shen blends AI and modern spirituality to create harmony in life.',
        features: [
          'Guidance for love and self-discovery with AI wellness companion',
          'Support through AI life coaching tools',
        ],
        footer: 'Experience more meaningful connections and happiness with the help of AI.'
      },
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % supremes.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [supremes.length]);

    const nextSupreme = () => setCurrentIndex(prev => (prev + 1) % supremes.length);
    const prevSupreme = () => setCurrentIndex(prev => (prev - 1 + supremes.length) % supremes.length);

    return (
      <motion.section
        className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <p className="text-base md:text-lg text-center">
          </p>
          <h2 className="font-great-victorian text-[36px] sm:text-[44px] md:text-[48px] leading-[120%] font-medium tracking-tight text-center px-4">
            Guided by our 3 supremes
          </h2>

          {/* Supreme Card Carousel */}
          <div className="w-full max-w-7xl relative overflow-hidden hidden md:block">
            <div className="relative flex items-center justify-center h-[900px]">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + supremes.length) % supremes.length;
                const supreme = supremes[index];
                const position = offset === 0 ? "center" : offset === -1 ? "left" : "right";
                const scale = position === "center" ? 1 : 0.7;
                const zIndex = position === "center" ? 20 : 10;
                const opacity = position === "center" ? 1 : 0.3;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[35%] max-w-lg h-full flex items-center justify-center"
                    initial={{ 
                      x: position === "left" ? "-70%" : position === "right" ? "70%" : "0%", 
                      scale: 0.6, 
                      opacity: 0.3 
                    }}
                    animate={{ 
                      x: position === "left" ? "-70%" : position === "right" ? "70%" : "0%", 
                      scale, 
                      opacity 
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex }}
                  >
                    <div
                      className="w-full h-[95%] rounded-3xl border border-white/20 flex flex-col overflow-hidden backdrop-blur-sm"
                      style={{ backgroundColor: supreme.color }}
                    >
                      {/* Image section (takes 40%) */}
                      <div className="flex justify-center items-center flex-[0.4] p-6">
                        <img
                          src={supreme.image}
                          alt={supreme.name}
                          className="w-full h-full object-contain rounded-2xl shadow-2xl"
                        />
                      </div>

                      {/* Text section (takes remaining 60%) */}
                      <div className="flex flex-col flex-[0.6] justify-between px-6 pb-6 text-white">
                        <div className="text-center">
                          <h3 className="font-clash-display text-4xl font-bold mb-2">{supreme.name}</h3>
                          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-3"></div>
                          <h4 className="font-clash-display text-xl font-normal">{supreme.subtitle}</h4>
                        </div>

                        <p className="text-base text-white/90 mt-3 leading-snug text-center">
                          {supreme.description}
                        </p>

                        <ul className="mt-3 space-y-1 text-left text-base text-white/90">
                          {supreme.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-1.5">
                              <span className="font-semibold">{idx + 1}.</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-sm text-white/80 mt-4 text-center leading-tight">
                          {supreme.footer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Navigation Arrows */}
              <button
                onClick={prevSupreme}
                className="absolute left-4 z-30 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={nextSupreme}
                className="absolute right-4 z-30 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Simple List */}
          <div className="w-full flex flex-col gap-6 md:hidden px-4">
            {supremes.map((supreme, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/20 flex flex-col overflow-hidden backdrop-blur-sm"
                style={{ backgroundColor: supreme.color }}
              >
                <div className="flex justify-center items-center flex-[0.4] p-4">
                  <img
                    src={supreme.image}
                    alt={supreme.name}
                    className="w-full h-48 object-contain rounded-2xl shadow-2xl"
                  />
          </div>
                <div className="flex flex-col gap-4 px-6 pb-6 text-white">
                  <div className="text-center">
                    <h3 className="font-clash-display text-3xl font-bold mb-2">{supreme.name}</h3>
                    <div className="w-16 h-0.5 bg-white/50 mx-auto mb-3"></div>
                    <h4 className="font-clash-display text-lg font-normal">{supreme.subtitle}</h4>
                  </div>
                  <p className="text-base text-white/90 leading-snug text-center">
                    {supreme.description}
                  </p>
                  <ul className="space-y-1 text-left text-base text-white/90">
                    {supreme.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-1.5">
                        <span className="font-semibold">{idx + 1}.</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[100px] md:h-[200px]"></div>
        </div>
      </motion.section>
    );
  }

  function OneApplicationGraphic() {
    // 6 circles positioned evenly around the ring (360/6 = 60 degrees apart)
    // Starting at -90 degrees (top) and spacing evenly
    const angleStep = 360 / 6;
    const startAngle = -90;
    
    const circles = [
      {
        angle: startAngle,
        icon: <Upload className="w-7 h-7 text-crypto-primary" />,
        title: "File Uploads",
        desc: "Share files instantly.",
      },
      {
        angle: startAngle + angleStep,
        icon: <Languages className="w-7 h-7 text-crypto-primary" />,
        title: "Multi-Language Support",
        desc: "Talk in any language.",
      },
      {
        angle: startAngle + angleStep * 2,
        icon: <Phone className="w-7 h-7 text-crypto-primary" />,
        title: "Inbound & Outbound Calls",
        desc: "Call or receive anytime.",
      },
      {
        angle: startAngle + angleStep * 3,
        icon: <Clock className="w-7 h-7 text-crypto-primary" />,
        title: "24/7 Availability",
        desc: "Always here for you.",
      },
      {
        angle: startAngle + angleStep * 4,
        icon: <Target className="w-7 h-7 text-crypto-primary" />,
        title: "Goal Setting",
        desc: "Set and reach goals.",
      },
      {
        angle: startAngle + angleStep * 5,
        icon: <ChartIcon className="w-7 h-7 text-crypto-primary" />,
        title: "Analytics to Track Progress",
        desc: "See your growth clearly.",
      },
    ];

    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Rings behind the image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[690px] h-[690px] rounded-full border border-white/70"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full border border-white opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full border border-white opacity-40"></div>
          </div>

          {/* Connection lines from center to circles on the ring */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {circles.map((circle, index) => {
              const angleRad = (circle.angle * Math.PI) / 180;
              const centerX = 50; // Percentage
              const centerY = 50; // Percentage
              const radius = 41; // Percentage (345px out of 840px)
              const x = centerX + radius * Math.cos(angleRad);
              const y = centerY + radius * Math.sin(angleRad);
              
              return (
                <line
                  key={index}
                  x1={`${centerX}%`}
                  y1={`${centerY}%`}
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Image on top of rings */}
          <div className="relative z-10 flex items-center justify-center">
            <img
              src="/goals.png"
              alt="Mobile App"
              className="w-[331px] h-[675px] object-contain"
            />
          </div>

          {/* Circles positioned on the ring lines */}
          {circles.map((circle, index) => {
            const angleRad = (circle.angle * Math.PI) / 180;
            const centerX = 50; // Percentage
            const centerY = 50; // Percentage
            const radius = 41; // Percentage
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);
            const isLeft = circle.angle > 90 && circle.angle < 270;
            
            // Adjust positioning to prevent squishing - push text further out for better spacing
            const offsetX = Math.cos(angleRad) * 8; // Push text further from center
            const offsetY = Math.sin(angleRad) * 8;
            const finalX = x + offsetX;
            const finalY = y + offsetY;
            
            return (
              <div
                key={index}
                className="absolute flex items-start gap-3"
                style={{
                  left: `${finalX}%`,
                  top: `${finalY}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                }}
              >
                <div
                  className={`flex flex-col ${isLeft ? 'items-end text-right' : 'items-start'} gap-2`}
                  style={{ maxWidth: '320px', minWidth: '200px' }}
                >
                  <div className={`flex items-start gap-3 mb-2 ${isLeft ? 'flex-row-reverse' : ''}`}>
                    <div className="flex p-3 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shrink-0">
                      {circle.icon}
                    </div>
                    <h3 className="font-great-victorian text-xl md:text-2xl font-medium leading-tight break-words">
                      {circle.title}
                    </h3>
                  </div>
                  <p className={`text-lg md:text-xl text-white/80 ${isLeft ? 'text-right' : 'text-left'} leading-relaxed`}>
                    {circle.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function InfoBubble({
    top,
    right,
    left,
    icon,
    title,
    desc,
    align = "left",
  }: any) {
    return (
      <div
        className="absolute flex items-start gap-3"
        style={{ top, right, left }}
      >
        {align === "right" && (
          <div className="flex flex-col items-end gap-0.5 max-w-[220px]">
            <p className="text-xl font-medium text-right">{title}</p>
            <p className="text-base text-white/60 text-right">{desc}</p>
          </div>
        )}
        <div className="flex p-3 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
        {align === "left" && (
          <div className="flex flex-col gap-0.5 max-w-[220px]">
            <p className="text-xl font-medium">{title}</p>
            <p className="text-base text-white/60">{desc}</p>
          </div>
        )}
      </div>
    );
  }

  function CryptoCardsGraphic() {
    const apps = [
      {
        name: "Gmail",
        icon: "/gmail.png",
        top: "50px",
        left: "60px",
        borderColor: "#EA4335", // Gmail red
        zIndex: 3,
      },
      {
        name: "Device Calendar",
        icon: "/devicecal.png",
        top: "300px",
        left: "100px",
        borderColor: "#FF6B6B", // Calendar red
        zIndex: 1,
      },
      {
        name: "Google Calendar",
        icon: "/gcalender.png",
        top: "130px",
        left: "250px",
        borderColor: "#4285F4", // Google Calendar blue
        zIndex: 2,
      },
      {
        name: "LinkedIn",
        icon: "/linkedin.png",
        top: "40px",
        left: "380px",
        borderColor: "#0A66C2", // LinkedIn blue
        zIndex: 4,
      },
      {
        name: "WhatsApp",
        icon: "/whatsapp.png",
        top: "260px",
        left: "350px",
        borderColor: "#25D366", // WhatsApp green
        zIndex: 1,
      },
    ];

    return (
      <div className="relative w-full h-full">
        {apps.map((app, index) => (
          <div
            key={index}
            className="absolute w-[194px] h-[212px] p-8 rounded-2xl border-2 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center justify-center gap-4"
            style={{
              top: app.top,
              left: app.left,
              borderColor: app.borderColor,
              zIndex: app.zIndex,
            }}
          >
            <img
              src={app.icon}
              alt={app.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-xl font-medium text-center">{app.name}</p>
              </div>
            ))}
      </div>
    );
  }

  function ChartCardsGraphic() {
    const [animatedPoints, setAnimatedPoints] = useState<number[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Progressive incline line data with upward trend and fluctuations
    const allPoints = [
      20, 21, 23, 22, 26, 21, 27, 30, 28, 33, 34, 34, 36, 39, 38, 42, 43, 43,
      41, 46, 48, 47, 49, 52, 51, 55, 57, 56, 60, 59, 63, 66, 66, 67, 70, 69,
      73, 74, 75, 78
    ];
    
    

    useEffect(() => {
      if (!isVisible) return;

      // Animate the line drawing
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= allPoints.length) {
          setAnimatedPoints(allPoints.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 60);

      return () => clearInterval(interval);
    }, [isVisible]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    const points = animatedPoints;
    const viewBoxWidth = 600;
    const viewBoxHeight = 400; // Increased height for taller graph
    const paddingLeft = 60; // More space for Y-axis label
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 50; // More space for X-axis label
    const width = viewBoxWidth - paddingLeft - paddingRight;
    const height = viewBoxHeight - paddingTop - paddingBottom;
    
    const maxY = Math.max(...allPoints, 80);
    const minY = Math.min(...allPoints, 20);
    const yRange = maxY - minY;

    const pathData = points
      .map((y, i) => {
        const x = (i / (allPoints.length - 1 || 1)) * width + paddingLeft;
        const normalizedY = (y - minY) / yRange;
        const actualY = height - normalizedY * height + paddingTop;
        return `${i === 0 ? 'M' : 'L'} ${x} ${actualY}`;
      })
      .join(' ');

    // Axis lines
    const xAxisY = paddingTop + height;
    const yAxisX = paddingLeft;

    return (
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="w-full max-w-[600px]" style={{ height: '500px' }}>
          <svg
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            className="w-full h-full"
          >
            {/* Y-axis line */}
            <line
              x1={yAxisX}
              y1={paddingTop}
              x2={yAxisX}
              y2={xAxisY}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
            />
            
            {/* X-axis line */}
            <line
              x1={yAxisX}
              y1={xAxisY}
              x2={viewBoxWidth - paddingRight}
              y2={xAxisY}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
            />

            {/* Y-axis label */}
            <text
              x={20}
              y={viewBoxHeight / 2}
              fill="rgba(255, 255, 255, 0.8)"
              fontSize="14"
              fontWeight="500"
              textAnchor="middle"
              transform={`rotate(-90, 20, ${viewBoxHeight / 2})`}
            >
              Personal Growth
            </text>

            {/* X-axis label */}
            <text
              x={viewBoxWidth / 2}
              y={viewBoxHeight - 10}
              fill="rgba(255, 255, 255, 0.8)"
              fontSize="14"
              fontWeight="500"
              textAnchor="middle"
            >
              Time
            </text>

            {/* Progress line */}
            {points.length > 1 && (
        <path
                d={pathData}
                fill="none"
          stroke="#99E39E"
                strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
            )}
      </svg>
        </div>
      </div>
    );
  }

  function VideoPlayer() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    return (
      <div ref={containerRef} className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={isVisible ? "https://www.youtube.com/embed/dY-1dGS5XII?list=TLGG6IaLxAVLidYwMjExMjAyNQ&autoplay=1&mute=1&start=1" : ""}
          title="Kailasa: Supreme Intelligence"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  }


