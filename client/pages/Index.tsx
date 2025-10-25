import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

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
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-crypto-bg text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-crypto-primary-light backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1300px] mx-auto px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white text-base hover:text-crypto-primary transition-colors">Home</a>
              <a href="#" className="text-white text-base hover:text-crypto-primary transition-colors">About</a>
              <a href="#" className="text-white text-base hover:text-crypto-primary transition-colors">Blogs</a>
              <a href="#" className="text-white text-base hover:text-crypto-primary transition-colors">Careers</a>
              <a href="#" className="text-white text-base hover:text-crypto-primary transition-colors">Contact Us</a>
            </nav>
          </div>
          <button className="bg-crypto-primary text-crypto-bg px-6 py-3 rounded-xl font-bold hover:bg-crypto-primary/90 transition-colors">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-18 px-12 max-w-[1300px] mx-auto">
        <div className="flex justify-between items-start gap-12">
          <motion.div className="w-full max-w-[588px]" {...fadeInUp}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-crypto-primary-light text-crypto-primary text-base w-fit">
                  Future of crypto trading
                </span>
                <h1 className="text-[72px] leading-[120%] font-medium tracking-tight text-white">
                  Fast and Secure<br />Cryptocurrency<br />Exchange
                </h1>
                <p className="text-base leading-[140%] text-white">
                  Trade cryptocurrencies with ease, security, and advanced features on our cutting-edge platform.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-crypto-primary text-crypto-bg px-6 py-3 rounded-xl font-bold w-fit hover:bg-crypto-primary/90 transition-colors">
                Explore more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b70848e70b5f3962cad5e1281b64709b5113dbe5?width=1168" 
              alt="Crypto App" 
              className="w-[584px] h-[582px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Crypto Coins */}
      <FeaturedCoins />

      {/* Features Section */}
      <section className="py-18 px-12 max-w-[1300px] mx-auto">
        <div className="flex gap-6">
          <motion.div className="w-full max-w-[588px]" {...fadeInUp}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center gap-3">
                <p className="text-base">
                  Why choose <span className="text-crypto-primary">crypgo</span>
                </p>
                <h2 className="text-[40px] leading-[120%] font-medium tracking-tight">
                  Features of the crypto framer mobile application
                </h2>
              </div>

              <div className="flex flex-wrap gap-12">
                <Feature 
                  icon={<LinkIcon />}
                  text="Designed for crypto trading platforms"
                />
                <Feature 
                  icon={<LightningIcon />}
                  text="Kickstart your crypto website today"
                />
                <Feature 
                  icon={<SettingsIcon />}
                  text="Launch your blockchain platform today"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="hidden lg:block flex-1" {...fadeIn}>
            <PortfolioCard />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section className="py-18 px-12 max-w-[1300px] mx-auto" {...staggerContainer}>
        <div className="flex justify-center gap-6">
          {[
            { value: "6M+", label: "Active users" },
            { value: "24/7", label: "Users support" },
            { value: "160+", label: "Countries" },
            { value: "$22B+", label: "Trade volume" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="flex-1 flex flex-col items-center gap-1 py-12 px-6 rounded-2xl border border-white/10 bg-white/5"
              {...fadeInUp}
            >
              <div className="text-[32px] leading-[120%] font-medium text-crypto-primary">
                {stat.value}
              </div>
              <div className="text-base text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* One Application Section */}
      <section className="py-18 px-12 max-w-[1300px] mx-auto">
        <motion.div className="flex flex-col items-center gap-10" {...fadeInUp}>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-base">
              We deliver <span className="text-crypto-primary">best solution</span>
            </p>
            <h2 className="text-[40px] leading-[120%] font-medium tracking-tight max-w-3xl">
              One application with multiple options to give you freedom of buying & selling
            </h2>
          </div>

          <div className="relative w-full h-[840px]">
            <OneApplicationGraphic />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-18 px-12 max-w-[1300px] mx-auto" {...fadeInUp}>
        <div className="flex justify-center">
          <div className="w-full max-w-[1200px] p-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex justify-between items-center">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="text-[40px] leading-[120%] font-medium tracking-tight">
                Crypgo powered by framer platform
              </h2>
              <p className="text-base text-white/60">
                Our landing page empower framer developers to have free, safer and more trustworthy experiences
              </p>
            </div>
            <button className="flex items-center gap-2 bg-crypto-primary text-crypto-bg px-6 py-3 rounded-xl font-bold hover:bg-crypto-primary/90 transition-colors">
              Get template
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Create Portfolio Section */}
      <section className="py-18 px-12 max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center gap-12">
          <motion.div className="hidden lg:block flex-1 relative h-[517px]" {...fadeIn}>
            <CryptoCardsGraphic />
          </motion.div>

          <motion.div className="w-full max-w-[585px] pl-8" {...fadeInUp}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-base">
                  Crypto landing page <span className="text-crypto-primary">template</span>
                </p>
                <h2 className="text-[40px] leading-[120%] font-medium tracking-tight">
                  Create your cryptocurrency portfolio today
                </h2>
                <p className="text-base text-white/60">
                  Coinbase has a variety of features that make it the best place to start trading.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  { icon: <ChartIcon />, text: "Manage your portfolio" },
                  { icon: <ShieldIcon />, text: "Vault protection" },
                  { icon: <MobileIcon />, text: "Mobile apps" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex p-3 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <p className="text-xl font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upgrade Section */}
      <section className="py-18 px-12 max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center gap-12">
          <motion.div className="w-full max-w-[585px]" {...fadeInUp}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-base">
                  Crypgo <span className="text-crypto-primary">upgrade</span>
                </p>
                <h2 className="text-[40px] leading-[120%] font-medium tracking-tight">
                  Upgrade your crypto business
                </h2>
                <p className="text-base text-white/60">
                  Get faster, safer, more affordable cloud object storage with no centeral point of failure.
                </p>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col gap-5">
                  {["100% secure", "A fraction of the cost", "More durable", "Easier to use"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckIcon />
                      <p className="text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {["Free figma file", "Powerful in performance", "Designed for crypto", "100% free framer template"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckIcon />
                      <p className="text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="hidden lg:block flex-1 relative h-[517px]" {...fadeIn}>
            <ChartCardsGraphic />
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <motion.section className="py-18 px-12 max-w-[1300px] mx-auto" {...fadeInUp}>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-base">
              Always by <span className="text-crypto-primary">your side</span>
            </p>
            <h2 className="text-[40px] leading-[120%] font-medium tracking-tight">
              Be the first to use our Crypgo!
            </h2>
            <p className="text-base text-white/60 max-w-2xl">
              Get faster, safer, more affordable cloud object storage with no centeral point of failure.
            </p>
          </div>

          <div className="w-full pt-18 flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
            <SupportWaveGraphic />
            
            <div className="w-full px-24 pb-12 flex justify-center gap-24">
              {[
                { icon: <HeadsetIcon />, title: "24/7 Support", desc: "Need help? Get your requests solved quickly via support team." },
                { icon: <UsersIcon />, title: "Community", desc: "Join the conversations on our worldwide OKEx communities" },
                { icon: <BookIcon />, title: "Academy", desc: "Learn blockchain and crypto for free." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-5 max-w-[240px]">
                  <div className="flex p-4 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-base text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-18 px-12 max-w-[1300px] mx-auto" {...fadeInUp}>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-base">
              Popular <span className="text-crypto-primary">questions</span>
            </p>
            <h2 className="text-[40px] leading-[120%] font-medium tracking-tight">
              Learn more about Crypgo
            </h2>
            <p className="text-base text-white/60">
              We accept 100+ cryptocurrencies around the world
            </p>
          </div>

          <div className="w-full max-w-[992px] flex flex-col gap-5">
            {[
              "What is Crypgo?",
              "Is Crypgo available worldwide?",
              "Which cryptocurrencies are supported on Crypgo?",
              "Is my personal information secure with Crypgo?",
              "Are there any deposit or withdrawal fees?",
              "Does Crypgo offer advanced trading tools?"
            ].map((question, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <p className="text-xl font-medium">{question}</p>
                <Plus className="w-8 h-8 text-crypto-primary" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Components

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6.353 7.765a16 16 0 0123.622-1.06l-5.132 4.609a8 8 0 00-12.559-3.549z" fill="white"/>
        <path d="M30 24.661a16 16 0 01-23.648 1.228l5.308-4.425a8 8 0 0012.344 3.197z" fill="white"/>
        <path d="M14.782 16.285L6.261 22.99V9.58l8.521 6.705z" fill="#99E39E"/>
        <path d="M10.522 16.285L2 22.99V9.58l8.522 6.705z" fill="#99E39E"/>
      </svg>
      <svg width="93" height="32" viewBox="0 0 93 32" fill="none">
        <text x="0" y="24" fill="white" fontSize="24" fontWeight="500" fontFamily="DM Sans">Crypgo</text>
      </svg>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex p-2.5 items-center justify-center rounded-full bg-white/10">
        {icon}
      </div>
      <p className="text-base font-medium max-w-[200px]">{text}</p>
    </div>
  );
}

function PortfolioCard() {
  return (
    <div className="w-full max-w-[371px] p-8 flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
      <p className="text-xl font-medium">
        Your portfolio is up <span className="text-crypto-primary">2.31%</span>
      </p>
      
      <div className="flex flex-col gap-8">
        {[
          { name: "Bitcoin", symbol: "BTC/USD", change: "1.05%", icon: "🪙" },
          { name: "Ethereum", symbol: "BTC/USD", change: "1.05%", icon: "💎" },
          { name: "Litecoin", symbol: "BTC/USD", change: "1.05%", icon: "🔷" },
          { name: "Polkadot", symbol: "BTC/USD", change: "1.05%", icon: "⚪" }
        ].map((coin, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-crypto-bitcoin flex items-center justify-center text-2xl">
                {coin.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-base font-semibold">{coin.name}</p>
                <p className="text-sm text-white/80">{coin.symbol}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-base font-medium text-crypto-primary">{coin.change}</p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3.333V16.667M14.167 7.5s-3.07-4.167-4.167-4.167c-1.098 0-4.167 4.167-4.167 4.167" stroke="#99E39E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedCoins() {
  return (
    <motion.section 
      className="py-18 px-12 max-w-[1300px] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center gap-10">
        <p className="text-base text-center">
          Featured <span className="text-crypto-primary">crypto coins</span>
        </p>
        <h2 className="text-[40px] leading-[120%] font-medium tracking-tight text-center">
          Guided by our 3 supremes
        </h2>
        
        <div className="w-full h-[400px] relative">
          <svg width="100%" height="400" viewBox="0 0 1300 400" fill="none" className="absolute inset-0">
            <path d="M50 200 Q 325 100, 650 200 T 1250 200" stroke="url(#grad1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M50 250 Q 325 150, 650 250 T 1250 250" stroke="url(#grad2)" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M50 300 Q 325 200, 650 300 T 1250 300" stroke="url(#grad3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
            
            <circle cx="200" cy="180" r="8" fill="#E79740" opacity="0.9"/>
            <circle cx="650" cy="200" r="8" fill="#E30278" opacity="0.9"/>
            <circle cx="1100" cy="220" r="8" fill="#7E4BD0" opacity="0.9"/>
            
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000510" stopOpacity="0"/>
                <stop offset="50%" stopColor="#E79740"/>
                <stop offset="100%" stopColor="#000510" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000510" stopOpacity="0"/>
                <stop offset="50%" stopColor="#E30278"/>
                <stop offset="100%" stopColor="#000510" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000510" stopOpacity="0"/>
                <stop offset="50%" stopColor="#7E4BD0"/>
                <stop offset="100%" stopColor="#000510" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.section>
  );
}

function OneApplicationGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[690px] h-[690px] rounded-full border border-white/10"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full border border-white/10 opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border border-white/10 opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-[690px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/2386db62ef9d8c4b73a622bece5684d03c13f120?width=663" 
            alt="Mobile App" 
            className="w-[331px] h-[675px] object-contain"
          />
        </div>

        <InfoBubble top="154px" right="-100px" icon={<RefinementIcon />} title="Refinement" desc="Refine & improve your crypto landing page" />
        <InfoBubble top="508px" right="-120px" icon={<ToolIcon />} title="Scale and support" desc="Deploy product live and ensure expert support" />
        <InfoBubble top="442px" left="-100px" icon={<LayersIcon />} title="Prototype" desc="Build crypto website test for your product" align="right" />
        <InfoBubble top="190px" left="-150px" icon={<GridIcon />} title="Planning" desc="Map the crypto projects scope with framer template" align="right" />
      </div>
    </div>
  );
}

function InfoBubble({ top, right, left, icon, title, desc, align = "left" }: any) {
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
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-[63px] top-[95px] w-[194px] h-[212px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-crypto-ethereum flex items-center justify-center text-xl">💎</div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xl font-medium">Ethereum</p>
            <div className="flex items-center gap-1 text-sm text-white/80">
              <span>ETH</span>
              <span className="text-white/60">USD</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[28px] font-medium tracking-tight">******</p>
          <p className="text-xs font-bold text-crypto-primary">5.23% (***)</p>
        </div>
      </div>

      <div className="absolute left-[292px] top-[201px] w-[194px] h-[212px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-crypto-bitcoin flex items-center justify-center text-xl">🪙</div>
          <div className="flex flex-col gap-0.5">
            <p className="text-xl font-medium">Bitcoin</p>
            <div className="flex items-center gap-1 text-sm text-white/80">
              <span>BTC</span>
              <span className="text-white/60">USD</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[28px] font-medium tracking-tight">******</p>
          <p className="text-xs font-bold text-crypto-primary">7.68% (***)</p>
        </div>
      </div>

      <div className="absolute left-[292px] top-[39px] w-[106px] h-[106px] p-5 rounded-2xl border border-crypto-avalanche/20 bg-crypto-avalanche/20 backdrop-blur-sm flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">🔺</div>
      </div>

      <div className="absolute left-[151px] top-[346px] w-[106px] h-[106px] p-5 rounded-2xl border border-crypto-polkadot/20 bg-crypto-polkadot/20 backdrop-blur-sm flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">⚪</div>
      </div>
    </div>
  );
}

function ChartCardsGraphic() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-[52px] top-[85px] w-[522px] h-[331px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-crypto-bitcoin flex items-center justify-center text-sm">🪙</div>
            <p className="text-xl font-medium">USD/BTC</p>
          </div>
          <div className="flex flex-col items-end text-sm">
            <p className="text-white/60">24h Volume</p>
            <p className="font-medium">**** BTC</p>
          </div>
        </div>

        <div className="space-y-4">
          {[38, 36, 34, 32, 30].map((price, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10"></div>
              <p className="text-sm text-white/40 w-10 text-right">${price}K</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-between text-sm text-white/40">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'].map((month, i) => (
            <span key={i}>{month}</span>
          ))}
        </div>

        <div className="mt-8 flex gap-1 items-end h-32">
          {[40, 28, 50, 45, 35, 55, 48, 38, 60, 42, 68, 52, 58, 45].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div 
                className={`w-full rounded ${i % 3 === 0 ? 'bg-crypto-primary' : 'bg-red-400'}`}
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 w-[181px] h-[248px] p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="w-6 h-6 rounded-full bg-crypto-bitcoin flex items-center justify-center text-xs">🪙</div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="4" r="1.5" fill="white"/>
            <circle cx="10" cy="10" r="1.5" fill="white"/>
            <circle cx="10" cy="16" r="1.5" fill="white"/>
          </svg>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative w-28 h-28">
            <svg width="112" height="112" viewBox="0 0 112 112">
              <circle cx="56" cy="56" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
              <circle cx="56" cy="56" r="50" fill="none" stroke="#99E39E" strokeWidth="8" strokeDasharray="280" strokeDashoffset="90" strokeLinecap="round" transform="rotate(-90 56 56)"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-medium">78%</p>
            </div>
          </div>
          <p className="text-xs text-white/60">2118 - 3000 %</p>

          <div className="flex gap-6 text-center">
            <div>
              <p className="text-sm font-bold">46%</p>
              <p className="text-xs text-white/60">Growth</p>
            </div>
            <div>
              <p className="text-sm font-bold">42</p>
              <p className="text-xs text-white/60">Days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[25px] bottom-0 w-[230px] h-[216px] p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-white/40">Montly sales charts</p>
            <p className="text-lg font-bold mt-1">******</p>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M11 7s-2 4-3 4-3-4-3-4" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="text-xs font-bold text-crypto-primary">+2.45%</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" fill="#99E39E" stroke="#99E39E"/>
            <path d="M5 7l1.5 1.5L10 5" stroke="#000510" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p className="text-xs font-bold text-crypto-primary">On track</p>
        </div>

        <div className="flex justify-between items-end h-20">
          {[30, 47, 56, 47, 81, 74, 64].map((height, i) => (
            <div key={i} className="w-3 rounded-full bg-white/20 flex items-end overflow-hidden">
              <div className="w-full bg-crypto-primary rounded-full" style={{ height: `${height}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SupportWaveGraphic() {
  return (
    <div className="relative w-full h-[220px]">
      <svg width="100%" height="220" viewBox="0 0 1200 220" fill="none" className="absolute inset-0">
        <defs>
          <linearGradient id="wave-grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#99E39E" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#99E39E" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path 
          d="M 0 110 Q 150 60, 300 110 T 600 110 T 900 110 T 1200 110 L 1200 220 L 0 220 Z" 
          fill="url(#wave-grad)"
        />
        <path 
          d="M 0 110 Q 150 60, 300 110 T 600 110 T 900 110 T 1200 110" 
          stroke="#99E39E" 
          strokeWidth="2" 
          fill="none"
        />
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-crypto-bg border-t border-white/20">
      <div className="max-w-[1300px] mx-auto px-12 py-20">
        <div className="flex justify-between items-start mb-16">
          <div className="flex flex-col gap-6 max-w-[486px]">
            <Logo />
            <p className="text-base text-white/60">
              Transform your crypto business with Crypgo Framer, a template for startups and blockchain services.
            </p>
            <div className="flex items-center gap-2">
              {['facebook', 'instagram', 'twitter'].map((social, i) => (
                <div key={i} className="flex p-2 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white/60 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium mb-2">Links</h3>
              {['Features', 'Benefits', 'Services', 'Why Crypgo', 'FAQs'].map((link, i) => (
                <a key={i} href="#" className="text-base text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium mb-2">Other Pages</h3>
              {['Terms', 'Disclosures', 'Latest News'].map((link, i) => (
                <a key={i} href="#" className="text-base text-white/60 hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium">Download app</h3>
              <div className="flex flex-col gap-4">
                <div className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-32 h-10 bg-white/20 rounded"></div>
                </div>
                <div className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-32 h-10 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex justify-center">
          <p className="text-sm text-white/40">
            Copyright ©2025 Crypgo. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

// Icons
function LinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.917 12.083l4.166-4.166M14.039 12.175l2.174-2.175c1.716-1.715 1.716-3.505 0-5.22-1.715-1.716-3.505-1.716-5.22 0l-2.175 2.174" stroke="#99E39E" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.19 10.561H6.807c-1.236 0-1.854 0-2.118-.407-.264-.408-.013-.976.489-2.112l1.51-3.414c.456-1.033.685-1.55 1.127-1.839.443-.29 1.005-.29 2.13-.29h1.741c1.365 0 2.048 0 2.306.446.257.446-.082 1.042-.759 2.234l-.893 1.572" stroke="#99E39E" strokeWidth="1.25" strokeLinejoin="round"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.917 10a2.917 2.917 0 11-5.834 0 2.917 2.917 0 015.834 0z" stroke="#99E39E" strokeWidth="1.25"/>
      <path d="M17.51 11.747c.435-.123.653-.184.739-.296.086-.112.086-.293.086-.653V9.194c0-.36 0-.54-.086-.652-.086-.112-.304-.173-.739-.296-1.626-.439-2.842-1.936-2.462-3.551.115-.444.173-.666.118-.797-.055-.13-.213-.22-.529-.4l-1.438-.816c-.31-.176-.465-.264-.604-.245-.139.019-.296.175-.61.488-1.216 1.213-3.228 1.213-4.444 0-.314-.313-.471-.47-.61-.488-.139-.019-.294.069-.604.245L4.89 3.498c-.316.18-.474.27-.529.4-.055.131.003.353.118.797.38 1.615-.836 3.112-2.462 3.551-.435.123-.653.184-.739.296-.086.112-.086.292-.086.652V10.798c0 .36 0 .54.086.653.086.112.304.173.739.296 1.626.438 2.842 1.935 2.462 3.55-.115.444-.173.666-.118.796.055.13.213.22.529.401l1.438.816c.31.176.465.264.604.245.139-.019.296-.175.61-.488 1.216-1.214 3.228-1.214 4.444 0 .314.313.471.469.61.488.139.019.294-.069.604-.245l1.438-.816c.316-.18.474-.27.529-.4.055-.131-.003-.353-.118-.797-.38-1.615.836-3.112 2.462-3.55z" stroke="#99E39E" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.5 15.828C17.999 21.756 9.864 23.484 5.201 18.864.629 14.335 2.045 6.129 8.057 3.5" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.683 12.5c1.888 0 2.832 0 3.441-.845.024-.031.062-.088.082-.121.548-.887.266-1.568-.298-2.93a12.002 12.002 0 00-8.575-8.575c-1.362-.564-2.043-.846-2.93-.298-.033.02-.09.058-.121.082-.845.609-.845 1.553-.845 3.441v2.11c0 1.92 0 2.88.596 3.477.596.596 1.556.596 3.477.596h2.11z" stroke="#99E39E" strokeWidth="1.5"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M10.125 14.5V8.5M12 8.5V7m0 9v-1.5m-1.875-2.5h3.75M13.875 11.5c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H9m4.875-3c.621 0 1.125-.496 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H9" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 11.183V8.28c0-1.64 0-2.46-.404-2.995-.404-.535-1.318-.795-3.145-1.314a37.858 37.858 0 00-3.96-1.252C12.023 2.266 11.424 2 11 2c-.424 0-1.023.266-2.491.719a37.858 37.858 0 00-3.96 1.252c-1.827.519-2.741.779-3.145 1.314C1 5.82 1 6.64 1 8.28v2.903c0 5.625 5.063 8.998 7.594 10.335.607.32.91.48 1.406.48.495 0 .799-.16 1.406-.48C13.937 20.181 19 16.808 19 11.183z" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 9c0-3.3 0-4.95 1.025-5.975C7.05 2 8.7 2 12 2c3.3 0 4.95 0 5.975 1.025C19 4.05 19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975C16.95 22 15.3 22 12 22c-3.3 0-4.95 0-5.975-1.025C5 19.95 5 18.3 5 15V9z" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 19h2M9 2l.089.534C9.282 3.691 9.378 4.27 9.775 4.622c.414.368 1.001.38 2.225.38 1.224 0 1.811-.012 2.225-.38.397-.352.493-.931.686-2.088L15 2" stroke="#99E39E" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function RefinementIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6.234 7C4.604 7 3.789 7 3.328 7.495c-.461.495-.36 1.262-.158 2.796.059.448.157.702.457 1.05.969 1.122 2.742 3.118 5.231 4.933.227.166.377.437.402.737.084.994.165 1.895.242 2.699.125 1.306.187 1.959.663 2.206.476.247 1.07-.069 2.258-.702l1.067-.565c.44-.234.66-.351.797-.549.136-.197.164-.435.22-.912.072-.615.148-1.335.226-2.174.028-.297.177-.565.403-.73 2.493-1.782 4.27-3.778 5.239-4.9.3-.348.398-.602.457-1.05.202-1.534.303-2.301-.158-2.796C20.211 7 19.396 7 17.766 7" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11.801 6.49L13.287 5.004c1.673-1.673 3.863-2.367 6.18-2.481.902-.044 1.353-.066 1.714.295.362.362.34.813.296 1.715-.114 2.318-.808 4.507-2.48 6.18l-1.486 1.486c-1.224 1.223-1.572 1.571-1.315 2.898.254 1.014.499 1.995-.238 2.732-.894.894-1.71.894-2.604 0l-7.183-7.183c-.894-.894-.894-1.71 0-2.604.737-.737 1.718-.492 2.732-.238 1.327.257 1.675-.092 2.898-1.315z" stroke="#99E39E" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M17 7h.01M2.5 21.5l5-5M8.5 21.5l2-2M2.5 15.5l2-2" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 11.5c.496 0 .956-.302 1.878-.904l.665-.287c1.638-.706 2.457-1.059 2.457-1.614 0-.556-.819-.909-2.457-1.615l-.665-.286C12.956 6.302 12.496 6 12 6c-.496 0-.956.302-1.878.904l-.665.287c-1.638.706-2.457 1.059-2.457 1.614 0 .556.819.909 2.457 1.615l.665.286C11.044 11.198 11.504 11.5 12 11.5zM12 11.5V17.5" stroke="#99E39E" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M17 9v6c0 .559-.819.912-2.457 1.618l-.665.287C12.956 17.302 12.496 17.5 12 17.5c-.496 0-.956-.198-1.878-.595l-.665-.287C7.819 15.912 7 15.559 7 15V9" stroke="#99E39E" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 2v20M17 2v20M22 7H2M22 17H2" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M22.667 14.406c0-.461 0-.691.069-.896.202-.597.733-.829 1.266-1.071.598-.273.897-.41 1.194-.433.336-.028.674.045.961.206.382.214.648.621.92.952 1.258 1.528 1.887 2.292 2.117 3.134.186.68.186 1.391 0 2.071-.336 1.229-1.396 2.259-2.181 3.212-.401.488-.602.731-.855.874-.288.161-.625.234-.962.207-.296-.024-.598-.161-1.194-.433-.532-.243-1.064-.474-1.266-1.071-.069-.205-.069-.436-.069-.897v-5.655z" stroke="#99E39E" strokeWidth="2"/>
      <path d="M9.334 14.406c0-.58-.017-1.102-.487-1.51-.171-.148-.397-.251-.85-.457-.598-.273-.897-.41-1.193-.433-.89-.072-1.369.535-1.882 1.158-1.258 1.528-1.887 2.292-2.117 3.134a3.997 3.997 0 000 2.071c.336 1.229 1.396 2.257 2.181 3.212.495.601.968 1.149 1.817 1.08.296-.024.598-.161 1.194-.434.453-.206.679-.309.85-.457.469-.408.487-.93.487-1.51v-5.854z" stroke="#99E39E" strokeWidth="2"/>
      <path d="M6.667 12c0-4.418 4.179-8 9.333-8 5.155 0 9.333 3.582 9.333 8M25.333 22.667v1.066c0 2.357-2.388 4.267-5.333 4.267h-2.667" stroke="#99E39E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M27.699 24c.999 0 1.794-.629 2.507-1.508C31.667 20.693 29.268 19.254 28.354 18.55c-.93-.716-1.968-1.122-3.021-1.217M24 14.667c1.841 0 3.333-1.493 3.333-3.334C27.333 9.492 25.841 8 24 8" stroke="#99E39E" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.301 24c-1 0-1.795-.629-2.508-1.508C.333 20.693 2.731 19.254 3.646 18.55c.93-.716 1.968-1.122 3.02-1.217M7.333 14.667c-1.841 0-3.333-1.493-3.333-3.334C4 9.492 5.492 8 7.333 8" stroke="#99E39E" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10.778 20.148C9.416 20.99 5.844 22.71 8.019 24.863c1.063 1.051 2.247 1.803 3.735 1.803h8.492c1.488 0 2.672-.752 3.735-1.803 2.176-2.153-1.396-3.873-2.758-4.715-3.195-1.976-7.249-1.976-10.445 0z" stroke="#99E39E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.667 10c0 2.577-2.09 4.667-4.667 4.667-2.577 0-4.667-2.09-4.667-4.667C11.333 7.423 13.423 5.333 16 5.333c2.577 0 4.667 2.09 4.667 4.667z" stroke="#99E39E" strokeWidth="2"/>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M8.777 9.65C12.786 10.357 15.176 11.836 16 12.685c.824-.849 3.214-2.328 7.223-3.035 2.031-.358 3.047-.537 3.912.15.865.686.865 1.6.865 3.829v7.01c0 2.038 0 3.057-.555 3.693-.555.636-1.777.852-4.222 1.283-2.177.384-3.878.996-5.109 1.611-1.211.605-1.817.908-2.114.908-.297 0-.903-.303-2.114-.908-1.231-.615-2.932-1.227-5.109-1.611-2.445-.431-3.667-.647-4.222-1.283C4 23.695 4 22.676 4 20.638v-7.009c0-2.229 0-3.143.865-3.83.865-.686 1.88-.507 3.912-.15z" stroke="#99E39E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 12v16.333" stroke="#99E39E" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M11.333 4.078C12.682 3.184 14.278 2.667 15.99 2.667c1.72 0 3.324.517 4.676 1.424m-2.504 3.242a5.374 5.374 0 00-2.172-.607c-.783 0-1.517.216-2.152.588" stroke="#99E39E" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 2.048c-.789-.248-1.629-.381-2.5-.381-4.602 0-8.333 3.731-8.333 8.333 0 4.602 3.731 8.333 8.333 8.333 4.602 0 8.333-3.731 8.333-8.333 0-.871-.133-1.711-.381-2.5" stroke="#99E39E" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M7.083 7.917L10 10.833l7.5-8.333" stroke="#99E39E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
