import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";

interface Blog {
  title: string;
  subtitle: string;
  image_url: string;
  description: string;
  publish_date: string;
  read_time: string;
  blog_url: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs data
    fetch('/data/blogs.json')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load blogs:', err);
        setLoading(false);
      });
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

  const getBlogSlug = (blogUrl: string) => {
    const match = blogUrl.match(/blog[s/]*(\w+)\.html/);
    return match ? match[1] : 'blog_1';
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

        {/* Latest Blog Section */}
        <section className="relative pt-32 pb-12 md:pb-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div 
            className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10"
            {...fadeInUp}
          >
            <div className="font-great-victorian text-[36px] md:text-[48px] font-medium mb-6">Latest blog</div>
            
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-crypto-primary"></div>
              </div>
            ) : blogs.length > 0 ? (
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                  <img 
                    src={blogs[0].image_url.replace('./', '/')} 
                    alt={blogs[0].title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="font-great-victorian text-[28px] md:text-[36px] font-medium mb-2">
                      {blogs[0].title}
                    </h3>
                    {blogs[0].subtitle && (
                      <h4 className="font-clash-display text-xl md:text-2xl font-medium text-white/80 mb-4">
                        {blogs[0].subtitle}
                      </h4>
                    )}
                    <div className="flex items-center gap-6 text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm md:text-base">{blogs[0].publish_date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm md:text-base">{blogs[0].read_time}</span>
                      </div>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                      <span dangerouslySetInnerHTML={{ __html: blogs[0].description }} />
                    </p>
                  </div>
                  
                  <Link
                    to={`/blogs/${getBlogSlug(blogs[0].blog_url)}`}
                    className="inline-block"
                  >
                    <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-black/80 transition-colors w-full lg:w-auto">
                      Read complete blog
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-white/60">No blogs available.</div>
            )}
          </motion.div>
        </section>

        {/* All Blogs Grid */}
        {blogs.length > 1 && (
          <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
            <motion.div 
              className="w-full"
              {...fadeInUp}
            >
              <div className="font-great-victorian text-[36px] md:text-[48px] font-medium mb-8">All blogs</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogs.slice(1).map((blog, index) => (
                  <div
                    key={index}
                    className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col"
                  >
                    <img 
                      src={blog.image_url.replace('./images/', '/')} 
                      alt={blog.title}
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="font-clash-display text-[18px] md:text-[22px] font-bold mb-2">
                      {blog.title}
                    </h3>
                    {blog.subtitle && (
                      <h4 className="font-clash-display text-base font-normal text-white/80 mb-3">
                        {blog.subtitle}
                      </h4>
                    )}
                    <p className="text-sm md:text-base leading-relaxed mb-4 flex-grow">
                      {blog.description.replace(/<[^>]*>/g, '')}
                    </p>
                    <div className="flex items-center gap-4 text-white/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span className="text-xs md:text-sm">{blog.publish_date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs md:text-sm">{blog.read_time}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blogs/${getBlogSlug(blog.blog_url)}`}
                    >
                      <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-black/80 transition-colors w-full">
                        Read complete blog
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Store Links Section
        <section className="py-12 md:py-18 px-4 sm:px-8 md:px-12 max-w-[1300px] mx-auto">
          <motion.div className="flex flex-col items-center gap-6 md:gap-8" {...fadeIn}>
            <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
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
          {/* </motion.div>
        </section> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
