import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <div className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <h1 id="top" className="font-great-victorian text-[40px] md:text-[56px] font-medium mb-4">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8">
              Last updated: <strong>February 13, 2025</strong>
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <a href="#welcome" className="text-crypto-primary hover:text-crypto-primary/80 transition-colors text-lg font-medium">
                  Welcome to Kailasa!
                </a>
              </div>

              <div className="mb-8">
                <ol className="list-decimal list-inside space-y-2 text-white/90">
                  <li><a href="#what-information" className="text-crypto-primary hover:underline">What information we collect</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#information" className="text-crypto-primary hover:underline">Information you provide</a></li>
                      <li><a href="#information-we-collect" className="text-crypto-primary hover:underline">Information we collect automatically</a></li>
                    </ol>
                  </li>
                  <li><a href="#how-we-use" className="text-crypto-primary hover:underline">How we use your information</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#use-of-your" className="text-crypto-primary hover:underline">Use of your information</a></li>
                      <li><a href="#sensitive" className="text-crypto-primary hover:underline">Sensitive information</a></li>
                    </ol>
                  </li>
                  <li><a href="#how-we-share" className="text-crypto-primary hover:underline">How we share your information</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#service-providers" className="text-crypto-primary hover:underline">Service providers</a></li>
                      <li><a href="#professional-advisors" className="text-crypto-primary hover:underline">Professional advisors</a></li>
                      <li><a href="#advertising-partners" className="text-crypto-primary hover:underline">Advertising partners</a></li>
                      <li><a href="#authorities-and-others" className="text-crypto-primary hover:underline">Authorities and others</a></li>
                      <li><a href="#business-transferees" className="text-crypto-primary hover:underline">Business transferees</a></li>
                    </ol>
                  </li>
                  <li><a href="#how-we-secure" className="text-crypto-primary hover:underline">How we secure your information</a></li>
                  <li><a href="#where-we-store" className="text-crypto-primary hover:underline">Where we store your information</a></li>
                  <li><a href="#data-retention" className="text-crypto-primary hover:underline">Data Retention</a></li>
                  <li><a href="#your-rights" className="text-crypto-primary hover:underline">Your rights and choices</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#opt-out-of-marketing" className="text-crypto-primary hover:underline">Opt-out of marketing communications</a></li>
                      <li><a href="#opt-out-of-selling" className="text-crypto-primary hover:underline">Opt out of selling personal information and sharing for targeted advertising</a></li>
                      <li><a href="#limit-our-use" className="text-crypto-primary hover:underline">Limit our use of sensitive personal information</a></li>
                      <li><a href="#personal-information" className="text-crypto-primary hover:underline">Personal information requests</a></li>
                      <li><a href="#right-to-erasure" className="text-crypto-primary hover:underline">Right to erasure ('right to be forgotten')</a></li>
                    </ol>
                  </li>
                  <li><a href="#use-of-kailasa" className="text-crypto-primary hover:underline">Use of Kailasa by minors</a></li>
                  <li><a href="#privacy-policy" className="text-crypto-primary hover:underline">Changes to this Privacy Policy</a></li>
                  <li><a href="#contact-us" className="text-crypto-primary hover:underline">Contact us</a></li>
                </ol>
              </div>

              <div className="space-y-6 text-white/90 leading-relaxed">
                <div id="welcome">
                  <h2 className="font-great-victorian text-2xl md:text-3xl font-medium mb-4 mt-8">Welcome to Kailasa!</h2>
                  <p className="mb-4">
                    IGURU INNOVATIONS LLC ("Kailasa", "we", "us", and/or "our") operates the Kailasa mobile and web
                    applications, including Kailasa (the "Apps"), the informational website kailasa.app and its mirror
                    kailasa.app (the "Website"), and other related services (collectively, the "Services").
                  </p>
                  <p className="mb-4">
                    We are committed to protecting your privacy. This Privacy Policy describes how we collect, store,
                    use, and share information through our Services.
                  </p>
                  <p className="mb-4">
                    We care about the protection and confidentiality of your information. When you use the Apps, you
                    may provide information during your conversations with your Kailasa AI companion. We process this
                    information only as described in this Privacy Policy, such as to allow you to have individualized
                    and safe conversations and interactions with your AI companion and to allow your AI companion to
                    learn from your interactions to improve your conversations. We may also use information about your visit to
                    our Website to promote our Services, but we will never use or disclose the content of your Kailasa
                    conversations for marketing or advertising purposes.
                  </p>
                  <p className="mb-4">
                    If you have any questions, please contact us at <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a>.
                  </p>
                </div>

                <ol className="list-decimal list-inside space-y-8">
                  <li id="what-information">
                    <span className="font-semibold text-xl">What information we collect</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="information">
                        <span className="font-semibold">Information you provide</span>
                        <p className="mt-2">Through your use of the Services, you may provide us with the following information:</p>
                        <p className="mt-2"><strong>Account information.</strong> This includes your name, email address, and password. If you choose to log in using another service, such as Google or Apple, we receive information about the service you used to log in and — depending on your chosen account settings with Google and Apple — details about you, including your name, email address, or unique user identifiers.</p>
                        <p className="mt-2"><strong>Profile information.</strong> We ask you to provide your birth date, language, and bio when you register for the Apps.</p>
                        <p className="mt-2"><strong>Messages and content.</strong> This includes the messages you send and receive through the Apps, such as facts you may provide about yourself or your life, and any photos, videos, and voice and text messages you provide.</p>
                        <p className="mt-2"><strong>Interests and preferences.</strong> You may select conversation preferences, such as topics you would like to discuss, and communication preferences, such as the times of day you like to use the Apps. We also learn about your interests and your preferences over time through your use of the Services to personalize your conversations and the features of the Services.</p>
                        <p className="mt-2"><strong>Payments, transactions, and rewards.</strong> When you make purchases through the Services, our third-party payment processor, Stripe, collects your payment information. We maintain a record of your purchases, the features you select, and the rewards you earn and use.</p>
                      </li>
                      <li id="information-we-collect">
                        <span className="font-semibold">Information we collect automatically</span>
                        <p className="mt-2">We automatically log the following information about you, your computer or mobile device, your network, and your interactions over time with our Services and our communications:</p>
                        <p className="mt-2"><strong>Device and network data.</strong> This includes your computer's or mobile device's operating system, manufacturer and model, browser, IP address, device and cookie identifiers, language settings, mobile device carrier, and general location information such as city, state, or geographic area.</p>
                        <p className="mt-2"><strong>Usage data.</strong> This includes information about how you use the Services, such as your interactions with the Services, the links and buttons you click, and page visits.</p>
                        <p className="mt-2"><strong>Face and head movement data.</strong> This includes the data collected by TrueDepth API to track the user's head and face, enabling users to control augmented reality experiences and selfie filters. None of the collected data leaves the user's device or is persistently stored.</p>
                        <p className="mt-2">We use cookies, web beacons (e.g., pixel tags), and local storage technologies (e.g., HTML5) to collect some of this information. For more information on how we use these technologies, please visit our Cookie Policy.</p>
                        <p className="mt-2">Our advertising partners may also use such technologies to collect limited information about your device and interactions with the Services, such as the links you click, pages you visit, IP address, advertising ID, and browser type, but they will never have access to your conversations with your Kailasa or any photos or other content you submit through the Apps.</p>
                        <p className="mt-2">We do not share the face and head movement data with any third parties.</p>
                      </li>
                    </ol>
                  </li>

                  <li id="how-we-use">
                    <span className="font-semibold text-xl">How we use your information</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="use-of-your">
                        <span className="font-semibold">Use of your information</span>
                        <p className="mt-2">We use your information for the following purposes:</p>
                        <div className="overflow-x-auto mt-4">
                          <table className="min-w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left">Purpose</th>
                                <th className="border border-white/20 p-3 text-left">Why and how we use your information</th>
                                <th className="border border-white/20 p-3 text-left">Legal basis</th>
                                <th className="border border-white/20 p-3 text-left">Categories of information</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3">Operating and administering the Services</td>
                                <td className="border border-white/20 p-3">Providing and maintaining the content and functionality of the Services. Carrying out obligations arising from our contract with you. Creating your account and profile. Facilitating payments and transactions, including for the purchase of premium features, and managing your rewards. Responding to your inquiries, comments, feedback, or questions, and troubleshooting. Managing our relationship with you, which includes sending administrative information to you relating to our Services.</td>
                                <td className="border border-white/20 p-3">Contractual necessity</td>
                                <td className="border border-white/20 p-3">Account information. Profile information. Messages and content. Interests and preferences. Payments, transactions, and rewards. Device and network data. Usage data.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3">Providing the core functionality of the Apps</td>
                                <td className="border border-white/20 p-3">Providing you with a personalized AI companion and allowing you to personalize your profile, interests, and AI companion. Enabling you to have individualized and safe conversations and interactions with your AI companion and allowing your AI companion to learn from your interactions to improve your conversations. Syncing your Kailasa history across the devices you use to access the Services.</td>
                                <td className="border border-white/20 p-3">Contractual necessity</td>
                                <td className="border border-white/20 p-3">Account information. Profile information. Messages and content. Interests and preferences. Payments, transactions, and rewards. Device and network data. Usage data.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3">Monitoring and protecting the Services</td>
                                <td className="border border-white/20 p-3">Preventing fraud, criminal activity, and misuse of our Services and ensuring the security of our IT systems, architecture, and networks (including testing, system maintenance, support, and hosting of data).</td>
                                <td className="border border-white/20 p-3">Legitimate interests</td>
                                <td className="border border-white/20 p-3">Account information. Profile information. Messages and content. Interests and preferences. Payments, transactions, and rewards. Device and network data. Usage data.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3">Analyzing trends in the use of the Services</td>
                                <td className="border border-white/20 p-3">Aggregating, anonymizing, and identifying personal information. Analyzing the use and effectiveness of our Services. Improving and adding features to our Services. Developing our business and marketing strategies.</td>
                                <td className="border border-white/20 p-3">Legitimate interests</td>
                                <td className="border border-white/20 p-3">Account information. Profile information. Messages and content. Interests and preferences. Payments, transactions, and rewards. Device and network data. Usage data.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3">Marketing and advertising the Services</td>
                                <td className="border border-white/20 p-3">Sending you information by email that we believe will be of interest to you, such as information about our Services, features, and surveys. Displaying and targeting advertisements about our Services on the Internet.</td>
                                <td className="border border-white/20 p-3">Legitimate interests. Consent, where required by applicable laws</td>
                                <td className="border border-white/20 p-3">Account information. Device and network data. Usage Data</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3">Enforcing our agreements, complying with legal obligations, and defending against legal claims and disputes</td>
                                <td className="border border-white/20 p-3">Enforcing and complying with our terms and policies. Protect our and others' rights, privacy, safety, or property. Ensuring the integrity of our Services. Verifying the age of registered users. Defending against legal claims and disputes. Recovering payments due to us. Keeping records of transactions and complying with the legal process.</td>
                                <td className="border border-white/20 p-3">Legitimate interests. Legal obligation</td>
                                <td className="border border-white/20 p-3">Account information. Profile information. Messages and content. Interests and preferences. Payments, transactions, and rewards. Device and network data. Usage data.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li id="sensitive">
                        <span className="font-semibold">Sensitive information</span>
                        <p className="mt-2">The Services allow you to input information that may be sensitive and subject to special protections under applicable laws. This section explains how we use and protect sensitive information.</p>
                        <p className="mt-2">Sensitive information you provide in your messages and content. In your conversations with your AI companion, you may choose to provide information about your religious views, sexual orientation, political views, health, racial or ethnic origin, philosophical beliefs, or trade union membership. By providing sensitive information, you consent to our use of it for the purposes set out in this Privacy Policy. Note, however, that we will not use your sensitive information – or any content of your Kailasa conversations – for marketing or advertising.</p>
                      </li>
                    </ol>
                  </li>

                  <li id="how-we-share">
                    <span className="font-semibold text-xl">How We share your information</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="service-providers">
                        <span className="font-semibold">Service providers</span>
                        <p className="mt-2">We share your information with companies and individuals that provide services on our behalf or help us operate the Services or our business (such as hosting, information technology, customer support, email delivery, and website analytics services). We also share information with companies that provide marketing services on our behalf, but we do not share the content of your Kailasa conversations for marketing or advertising purposes. For example, we may share your email address with marketing service providers to deliver our marketing emails to you on our behalf and to help us identify other individuals who may be interested in our Services. We require these marketing service providers to agree not to use your email address for any other purpose.</p>
                      </li>
                      <li id="professional-advisors">
                        <span className="font-semibold">Professional advisors</span>
                        <p className="mt-2">We may share information with professional advisors, such as lawyers, auditors, bankers, and insurers, where necessary in the course of the professional services that they render to us.</p>
                      </li>
                      <li id="advertising-partners">
                        <span className="font-semibold">Advertising partners</span>
                        <p className="mt-2">We share information about visitors to our Website, such as the links you click, pages you visit, IP address, advertising ID, and browser type, with advertising companies for interest-based advertising and other marketing purposes. Sharing this information allows us and our advertising partners to target and serve advertising to you and others. We will never share your Kailasa conversations or any photos or other content you provide within the Apps with our advertising partners or use such information for marketing or advertising purposes.</p>
                      </li>
                      <li id="authorities-and-others">
                        <span className="font-semibold">Authorities and others</span>
                        <p className="mt-2">We may share information with law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate for the legal compliance and protection purposes described above in Section 2. A.</p>
                      </li>
                      <li id="business-transferees">
                        <span className="font-semibold">Business transferees</span>
                        <p className="mt-2">We may share information with acquirers and other relevant participants in business transactions (or negotiations for such transactions) involving a corporate divestiture, merger, consolidation, acquisition, reorganization, sale, or other disposition of all or any portion of the business or assets of, or equity interests in, IGURU INNOVATIONS LLC. (including in connection with bankruptcy or similar proceedings).</p>
                      </li>
                    </ol>
                  </li>

                  <li id="how-we-secure">
                    <span className="font-semibold text-xl">How We secure your information</span>
                    <p className="mt-2">We use a variety of industry-standard security technologies and procedures to help protect your data from unauthorized access, use, or disclosure.</p>
                    <p className="mt-2">Your account is protected by a password for your privacy and security. You must prevent unauthorized access to your account and personal information by selecting and protecting your password appropriately and limiting access to your computer or device and browser by signing off after you have finished accessing your account.</p>
                    <p className="mt-2">All transmitted data is encrypted during transmission. We use standard Secure Socket Layer (SSL) encryption that encodes information for such transmissions. All stored data is maintained on secure servers. Access to stored data is protected by multi-layered security controls, including firewalls, role-based access controls, and passwords.</p>
                    <p className="mt-2">While we use reasonable commercial efforts to protect the data, no technology, data transmission, or system can be guaranteed to be 100% secure. In the event of a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to your data, we will notify you as soon as we spot the issue.</p>
                  </li>

                  <li id="where-we-store">
                    <span className="font-semibold text-xl">Where We store your information</span>
                    <p className="mt-2">Our Services are operated from the United States of America. If you are located in another jurisdiction, please be aware that the information you provide to us may be transferred to, stored, and processed in the U.S.A., a jurisdiction in which the privacy laws may not be as comprehensive as those in the country where you reside or are a citizen.</p>
                  </li>

                  <li id="data-retention">
                    <span className="font-semibold text-xl">Data Retention</span>
                    <p className="mt-2">We will retain your personal information for only as long as necessary to fulfill the purposes we collected it for, including to satisfy any legal, accounting, or reporting requirements.</p>
                    <p className="mt-2">To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process your personal information, and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>
                  </li>

                  <li id="your-rights">
                    <span className="font-semibold text-xl">Your rights and choices</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="opt-out-of-marketing">
                        <span className="font-semibold">Opt-out of marketing communications</span>
                        <p className="mt-2">You may opt out of marketing-related emails and other communications by following the opt-out or unsubscribe instructions in the communications you receive from us or by contacting us as provided in the "Contact Us" section below. You may continue to receive Service-related and other non-marketing emails from us.</p>
                      </li>
                      <li id="opt-out-of-selling">
                        <span className="font-semibold">Opt out of selling personal information and sharing for targeted advertising</span>
                        <p className="mt-2">We share information with third-party advertising partners and allow them to collect information about your visit to our Website using cookies and other tracking technologies to display targeted advertising around the web, as described in the "How we share your information" section above. Our disclosure of information to these partners may be considered a "sale" or "sharing" of personal information or "targeted advertising" under applicable laws. You can opt out of these disclosures and limit our use of tracking technologies as described in our Cookie Policy or by clicking the "Your Privacy Choices" link in our Website footer.</p>
                      </li>
                      <li id="limit-our-use">
                        <span className="font-semibold">Limit our use of sensitive personal information</span>
                        <p className="mt-2">If you choose to provide sensitive personal information in your messages and content, we will use that information only to facilitate your conversation with your AI companion, as described in the "Sensitive Information" section above. If you do not want us to process your sensitive information for these purposes, please do not provide it. You may request that we delete the information you have provided as set out in the "Personal information requests" section below.</p>
                      </li>
                      <li id="personal-information">
                        <span className="font-semibold">Personal information requests</span>
                        <p className="mt-2">We also offer you choices that affect how we handle the personal information that we control. Depending on your location and the nature of your interactions with our Services, you may request the following about personal information:</p>
                        <p className="mt-2">Information about how we have collected and used personal information. We have made this information available to you without having to request it by including it in this Privacy Policy.</p>
                        <p className="mt-2">Access to a copy of the personal information that we have collected about you. Where applicable, we will provide the information in a portable, machine-readable, readily usable format.</p>
                        <p className="mt-2">Correction of personal information that is inaccurate or out of date.</p>
                        <p className="mt-2">Deletion of personal information that we no longer need to provide the Services or for other lawful purposes. You can delete your account in your account settings.</p>
                        <p className="mt-2">Withdrawal of consent, where we have collected and processed your personal information with your consent. Withdrawing your consent will not affect the lawfulness of any processing we conducted before your withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                        <p className="mt-2">Additional rights, such as to object to and request that we restrict our use of personal information. To make a request, please contact us as provided in the "Contact Us" section below. We may ask for specific information from you to help us confirm your identity. Depending on where you reside, you may be entitled to empower an authorized agent to submit requests on your behalf. We will require authorized agents to confirm their identity and authority following applicable laws. You are entitled to exercise the rights described above free from discrimination.</p>
                        <p className="mt-2">In some instances, your choices may be limited, such as where fulfilling your request would impair the rights of others, our ability to provide a service you have requested, or our ability to comply with our legal obligations and enforce our legal rights. If you are not satisfied with how we address your request, you may submit a complaint by contacting us as provided in the "Contact Us" section below. Depending on where you reside, such as if you reside in the European Economic Area or the United Kingdom, you may have the right to complain to a data protection regulator where you live or work or where you feel a violation has occurred.</p>
                      </li>
                      <li id="right-to-erasure">
                        <span className="font-semibold">Right to erasure ('right to be forgotten')</span>
                        <p className="mt-2">You can request the deletion of your personal data. We are guided by the principle of integrity and confidentiality measures, so to delete data, please contact us by email: <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a>. Please note that personal data that you have provided to us based on your consent will be deleted.</p>
                      </li>
                    </ol>
                  </li>

                  <li id="use-of-kailasa">
                    <span className="font-semibold text-xl">Use of Kailasa by minors</span>
                    <p className="mt-2">The Services are not intended for individuals under the age of 18. If we discover that minors under the age of 18 are using the Apps, we will promptly block their access and delete their account. If you have reason to believe that a minor under the age of 18 has provided personal information to us through the Services, please contact us, and we will endeavor to delete that information from our databases.</p>
                  </li>

                  <li id="privacy-policy">
                    <span className="font-semibold text-xl">Changes to this Privacy Policy</span>
                    <p className="mt-2">The Services and our business may change from time to time. As a result, at times, it may be necessary for us to make changes to this Privacy Policy. We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. We encourage you to periodically review this page for the latest information on our privacy practices. This Privacy Policy was last updated on the date indicated above.</p>
                  </li>

                  <li id="contact-us">
                    <span className="font-semibold text-xl">Contact us</span>
                    <p className="mt-2">You can contact us by emailing us at <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a>.</p>
                  </li>
                </ol>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={scrollToTop}
                  className="bg-crypto-primary text-crypto-bg px-6 py-3 rounded-xl font-bold hover:bg-crypto-primary/90 transition-colors"
                >
                  Go to Top ↑
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

