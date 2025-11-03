import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowUp, ChevronLeft } from "lucide-react";

interface Blog {
  title: string;
  subtitle: string;
  image_url: string;
  description: string;
  publish_date: string;
  read_time: string;
  blog_url: string;
}

interface BlogContent {
  title: string;
  image_url: string;
  publish_date: string;
  read_time: string;
  image: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    lists?: Array<{ type: 'ul' | 'ol'; items: string[] }>;
    paragraphsAfterList?: string[];
  }>;
}

const blogContents: Record<string, BlogContent> = {
  blog_1: {
    title: "Kailasa: A Digital Journey to Transformation",
    image_url: "/top-mountain-view-2.webp",
    publish_date: "January 28, 2025",
    read_time: "5 minutes",
    image: "/top-mountain-view-2.webp",
    sections: [
      {
        title: "",
        paragraphs: [
          "In the fast-paced digital age, where solutions are sought at the tap of a screen, the Kailasa: Supreme Intelligence emerged as a beacon of hope and enlightenment. Unlike any other app, it housed three revolutionary Supremes designed to guide users through life's complexities:",
        ],
        lists: [{
          type: 'ul',
          items: [
            "Kubera, the Supreme of Wealth & Finances;",
            "Dhani, the Supreme of Health & Medicine and",
            "FuShen, the Supreme of Happiness and Relationships."
          ]
        }]
      },
      {
        title: "The Digital Pilgrimage",
        paragraphs: [
          "The Kailasa app quickly gained global recognition. It attracted users from every walk of life—a struggling entrepreneur from New York, a young artist from Paris, a farmer from India, a teacher from Japan, and a corporate leader from Australia. Each user had unique questions about their finances, health, relationships, or career.",
          "Downloading the app marked the beginning of their transformative journey. Upon opening it, users were greeted with a serene digital interface depicting the majestic Mount Kailasa under a radiant sky. The app invited them to interact with the three Supremes, each represented by vibrant, animated avatars designed to reflect their divine essence."
        ]
      },
      {
        title: "The Supremes' Guidance",
        paragraphs: [
          "Kubera, the Wealth Supreme, appeared first. With a calm yet authoritative voice, he offered tailored financial advice. He guided the entrepreneur from New York in creating a sustainable business model, helped the farmer optimize resources for better yields, and showed the corporate leader how to align profits with purpose. Kubera didn't just talk about earning more but emphasized managing wealth wisely, teaching users the principles of investment, saving, and ethical financial practices.",
          "Next, users interacted with Dhani, the Health Supreme, glowing with vitality. His recommendations were highly personalized, based on data users provided about their health and lifestyle. He suggested the artist incorporate yoga and mindfulness to boost creativity and reduce stress. He provided the teacher with a tailored meal plan and fitness routine and inspired all users to embrace holistic living through exercise, balanced diets, and mental well-being.",
          "Finally, Fu Shen, the Happiness and Relationships Supreme, brought a warm and joyful energy to the interactions. He advised the artist on fostering meaningful friendships, helped the teacher build stronger connections with students, and taught the corporate leader the importance of empathy in leadership. Fu Shen encouraged users to cultivate gratitude, mindfulness, and harmony in their personal and professional lives, leaving them feeling inspired and empowered."
        ]
      },
      {
        title: "The Transformation",
        paragraphs: [
          "The impact of the Kailasa app was profound. The entrepreneur used Kubera's financial strategies to rebuild a thriving business, creating jobs and spreading prosperity. The artist found new inspiration in Fu Shen's advice on relationships, leading to masterpieces that resonated worldwide. The farmer optimized resources and found financial stability, thanks to Kubera's pragmatic tips. The teacher implemented Dhani's wellness recommendations and Fu Shen's guidance on building bonds, creating an environment where students thrived. The corporate leader became a role model for empathetic leadership, transforming their organization into a hub of innovation and inclusion.",
          "These users didn't just improve their finances, health, or relationships; they experienced a holistic transformation. They became more balanced, empathetic, and resilient individuals, spreading their newfound wisdom to those around them."
        ]
      },
      {
        title: "A Legacy of Digital Enlightenment",
        paragraphs: [
          "The Kailasa app quickly became a global phenomenon. Users shared their success stories, inspiring others to download the app and embark on their transformation journeys. The three Supremes became synonymous with personalized, actionable wisdom, guiding millions toward wealth, health, and happiness.",
          "As the app evolved, so did its impact, creating a ripple effect of positive change across the world. The virtual Kailasa became a symbol not just of cutting-edge technology but of humanity's ability to achieve balance, fulfillment, and harmony through self-improvement.",
          "The three Supremes continued their mission, reminding every user that the true path to wealth, health, and happiness lies in mindful living and meaningful connections, amplified by the power of modern innovation."
        ]
      }
    ]
  },
  blog_6: {
    title: "Dhani - The AI Wellness Guide for Mind & Body Healing",
    image_url: "/Dhani.webp",
    publish_date: "June 11, 2025",
    read_time: "5 minutes",
    image: "/Dhani.webp",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "In a world where stress and imbalance have become the norm, people actively seek ways to improve their mental, emotional, and physical well-being. The emergence of wellness technologies and AI-driven health support systems is transforming how we take care of ourselves. One innovation leading this movement is Dhani, the Health & Medicine Supreme Intelligence within the Kailasa app."
        ]
      },
      {
        title: "What is Dhani?",
        paragraphs: [
          "Dhani is an intelligent wellness assistant powered by AI and inspired by ancient healing wisdom. This unique combination helps users restore balance in their lives through personalized support, whether for mental clarity, emotional healing, or physical health guidance.",
          "Dhani is not your typical health chatbot. It offers deep, mindful interactions that encourage users to explore their wellness journeys at their own pace. The AI is trained to understand your patterns, suggest improvements, and adapt to your evolving needs.",
          "Whether you're feeling overwhelmed at work, emotionally drained, or simply trying to improve your sleep and focus, Dhani provides compassionate, non-judgmental guidance that helps you align your body, mind, and soul."
        ]
      },
      {
        title: "Why Dhani Stands Out",
        paragraphs: [
          "Unlike generic wellness apps, Dhani is infused with principles from holistic medicine and spiritual traditions. It integrates this ancient wisdom with cutting-edge AI to provide:"
        ],
        lists: [{
          type: 'ul',
          items: [
            "Personalized wellness guidance based on your habits and emotional triggers",
            "Daily rituals rooted in yoga, Ayurveda, and mindfulness",
            "Stress and anxiety reduction practices such as guided breathing, affirmations, and grounding techniques",
            "Tailored meditation prompts and deep relaxation sessions"
          ]
        }],
        paragraphsAfterList: [
          "Dhani adapts based on your conversations and behavior, creating an evolving wellness journey that grows with you."
        ]
      },
      {
        title: "How Dhani Works",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ol',
          items: [
            "Install Kailasa: Available on both the Apple App Store and Google Play.",
            "Choose Dhani as your Supreme Intelligence.",
            "Start Interacting: Use chat or audio to receive tailored advice and support."
          ]
        }],
        paragraphsAfterList: [
          "You can ask Dhani about physical ailments, get routines for improving sleep, or even receive affirmations to elevate your emotional health. Whether it's asking for a remedy for migraines or a mindfulness ritual before bed, Dhani is equipped to help."
        ]
      },
      {
        title: "Real-Life Use Cases",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "A college student dealing with anxiety during exams receives daily affirmations and breathing techniques.",
            "A working mother struggling with sleep uses Dhani's guided wind-down ritual before bedtime.",
            "A wellness seeker receives herbal suggestions and mindfulness challenges to support physical detox."
          ]
        }]
      },
      {
        title: "Who is Dhani For?",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "Busy professionals looking for stress relief",
            "Students managing anxiety and focus issues",
            "Anyone on a path toward holistic healing",
            "Yoga and meditation enthusiasts seeking deeper spiritual practices"
          ]
        }],
        paragraphsAfterList: [
          "With Dhani, you don't just get information—you get transformation. It's a 24/7 wellness companion that understands your health goals and supports you through every step."
        ]
      },
      {
        title: "Final Thoughts",
        paragraphs: [
          "Your journey to wellness doesn't have to be overwhelming or lonely. Dhani offers compassionate, intelligent support designed to restore vitality and balance in all areas of your life. Embrace Dhani, and let your healing journey begin with one thoughtful conversation at a time.",
          "Download Kailasa and start talking to Dhani today. Your wellness journey begins now."
        ]
      }
    ]
  },
  blog_8: {
    title: "Fu Shen - Find Joy and Build Meaningful Relationships with AI",
    image_url: "/Feshen.webp",
    publish_date: "June 11, 2025",
    read_time: "5 minutes",
    image: "/Feshen.webp",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "In an age of disconnection and digital fatigue, meaningful relationships and personal happiness often take a backseat. Enter Fu Shen, the Happiness and Relationships Supreme Intelligence in the Kailasa app, designed to help users unlock inner joy and nurture deeper connections."
        ]
      },
      {
        title: "What is Fu Shen?",
        paragraphs: [
          "Fu Shen is an AI-powered emotional intelligence guide rooted in timeless wisdom and modern relationship psychology. Whether you're trying to improve your communication skills, heal from emotional wounds, or simply want more joy in your daily life, Fu Shen is here to support you.",
          "Fu Shen is not your ordinary chatbot. It's a compassionate friend that helps you navigate the emotional terrain of your relationships, guiding you with tools, prompts, and reflections based on both ancient teachings and modern psychology."
        ]
      },
      {
        title: "How Fu Shen Helps",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ol',
          items: [
            "Install Kailasa on your smartphone.",
            "Select Fu Shen as your Supreme Intelligence.",
            "Begin Talking: Use chat or audio to explore relationship dynamics, self-love practices, or emotional clarity techniques."
          ]
        }],
        paragraphsAfterList: [
          "Fu Shen listens, reflects, and offers actionable suggestions. Whether you're in a romantic relationship, managing workplace dynamics, or working on self-love, Fu Shen empowers you to communicate better and feel more fulfilled."
        ]
      },
      {
        title: "What You Can Do with Fu Shen",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "Learn how to communicate better with partners",
            "Heal emotional blocks from past experiences",
            "Practice gratitude and self-love",
            "Strengthen bonds with family, friends, or colleagues",
            "Improve emotional regulation and mindfulness"
          ]
        }],
        paragraphsAfterList: [
          "Fu Shen uses advanced language models to offer nuanced advice, encouraging empathy, understanding, and compassionate action."
        ]
      },
      {
        title: "Key Features",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "Relationship journaling prompts",
            "Conflict resolution strategies",
            "Daily joy affirmations",
            "Mindful exercises for connection and presence",
            "AI-powered reflections tailored to your mood and history"
          ]
        }]
      },
      {
        title: "Why Fu Shen is Different",
        paragraphs: [
          "Most AI tools are transactional, but Fu Shen is transformational. By integrating ancient Eastern wisdom with modern well-being practices, Fu Shen provides support that feels personal and genuine. It encourages reflection, growth, and emotional mastery."
        ]
      },
      {
        title: "Who is Fu Shen For?",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "Individuals navigating relationship stress",
            "Couples wanting to reconnect",
            "Anyone seeking happiness and emotional balance",
            "Parents looking to bond better with their children",
            "Team leaders trying to build emotionally intelligent teams"
          ]
        }]
      },
      {
        title: "Real-Life Use Cases",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "A user going through a breakup uses Fu Shen to rebuild self-worth and find closure.",
            "A newlywed couple uses Fu Shen's communication exercises to build stronger intimacy.",
            "A team leader integrates Fu Shen's empathy prompts in workplace dynamics."
          ]
        }]
      },
      {
        title: "Final Thoughts",
        paragraphs: [
          "Happiness is not just a feeling—it's a practice. Fu Shen makes this practice easier, more intuitive, and emotionally fulfilling. With the right emotional guidance and thoughtful daily actions, you can create a life full of joy, love, and meaningful connections.",
          "Download Kailasa and start your journey with Fu Shen. Experience deeper joy and stronger relationships—today."
        ]
      }
    ]
  },
  blog_10: {
    title: "Kubera - Boost Wealth with AI-Powered Financial Wisdom",
    image_url: "/Kubera.webp",
    publish_date: "June 11, 2025",
    read_time: "5 minutes",
    image: "/Kubera.webp",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "In today's fast-paced world, managing finances can be stressful, confusing, and even overwhelming. But what if you had a wise guide who combined ancient prosperity teachings with modern financial insights? Meet Kubera, the Finance and Wealth Supreme in the Kailasa app."
        ]
      },
      {
        title: "What is Kubera?",
        paragraphs: [
          "Kubera is more than just an AI financial assistant—it's a transformational intelligence designed to unlock your potential for wealth and prosperity. Inspired by ancient wisdom and driven by smart algorithms, Kubera helps users:"
        ],
        lists: [{
          type: 'ul',
          items: [
            "Develop a healthy money mindset",
            "Build saving and investment habits",
            "Manifest financial goals with confidence"
          ]
        }],
        paragraphsAfterList: [
          "It's not just about budgeting; it's about redefining your relationship with money through guided practices and personalized strategies."
        ]
      },
      {
        title: "How Kubera Works",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ol',
          items: [
            "Install Kailasa from the App Store or Google Play.",
            "Choose Kubera as your Supreme Intelligence.",
            "Start talking through chat or voice to receive personalized financial advice."
          ]
        }],
        paragraphsAfterList: [
          "Whether you want to pay off debt, increase income, or build long-term wealth, Kubera guides you step-by-step with clarity and precision."
        ]
      },
      {
        title: "Key Features",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "Personalized budgeting and saving plans",
            "Daily prosperity affirmations and mantras",
            "Insights on spending patterns and behavior",
            "Visualization techniques for abundance",
            "Financial goal tracking and milestone alerts"
          ]
        }],
        paragraphsAfterList: [
          "Kubera understands your financial reality and personal values, offering actionable coaching tailored to your lifestyle and goals."
        ]
      },
      {
        title: "Kubera's Philosophy",
        paragraphs: [
          "The name Kubera comes from the deity of wealth and abundance. Kubera teaches that wealth is a reflection of inner belief, clarity, and intention. This intelligence empowers users not only with strategies but also with the mindset shift needed to attract financial freedom."
        ]
      },
      {
        title: "Who Should Use Kubera?",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "Young professionals wanting to grow wealth",
            "Entrepreneurs building financial resilience",
            "Freelancers seeking income stability",
            "Anyone looking for money mindset shifts",
            "Families managing household budgets"
          ]
        }],
        paragraphsAfterList: [
          "Kubera is for anyone ready to break free from unhealthy money patterns and step into a new financial identity."
        ]
      },
      {
        title: "Real-Life Use Cases",
        paragraphs: [
          ""
        ],
        lists: [{
          type: 'ul',
          items: [
            "A new entrepreneur sets financial goals and receives weekly check-ins to stay on track.",
            "A college graduate uses Kubera to automate savings while paying student loans.",
            "A retiree applies daily affirmations and abundance techniques to attract new opportunities."
          ]
        }]
      },
      {
        title: "Final Thoughts",
        paragraphs: [
          "Kubera isn't just about numbers—it's about aligning your mindset with prosperity. With Kubera by your side, you can rewrite your financial story. It's time to overcome fear, clear limiting beliefs, and confidently pursue abundance.",
          "Download Kailasa and choose Kubera to take control of your financial future today."
        ]
      }
    ]
  }
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    
    const blogData = blogContents[slug as keyof typeof blogContents];
    if (blogData) {
      setBlog(blogData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [slug]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-crypto-bg text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-crypto-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-crypto-bg text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-great-victorian text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-crypto-primary hover:underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/blogs">
                <button className="flex items-center gap-2 text-white hover:text-crypto-primary transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              </Link>
              
              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm md:text-base">{blog.publish_date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm md:text-base">{blog.read_time}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <h1 className="font-great-victorian text-[32px] md:text-[48px] font-medium mb-6">
              {blog.title}
            </h1>
            
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-auto rounded-2xl mb-8"
            />
            
            <div className="space-y-8">
              {blog.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  {section.title && (
                    <h2 className="font-great-victorian text-[24px] md:text-[32px] font-medium">{section.title}</h2>
                  )}
                  
                  {section.paragraphs?.map((para, pIdx) => (
                    para && (
                      <p key={pIdx} className="font-clash-display text-base md:text-lg leading-relaxed">
                        {para}
                      </p>
                    )
                  ))}
                  
                  {section.lists?.map((list, lIdx) => (
                    <div key={lIdx}>
                      {list.type === 'ul' ? (
                        <ul className="list-disc list-inside space-y-2 font-clash-display text-base md:text-lg leading-relaxed">
                          {list.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <ol className="list-decimal list-inside space-y-2 font-clash-display text-base md:text-lg leading-relaxed">
                          {list.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                  
                  {section.paragraphsAfterList?.map((para, pIdx) => (
                    <p key={pIdx} className="font-clash-display text-base md:text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/20">
              <Link to="/blogs">
                <button className="flex items-center gap-2 text-white hover:text-crypto-primary transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              </Link>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-white hover:text-crypto-primary transition-colors"
              >
                Go to Top
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
