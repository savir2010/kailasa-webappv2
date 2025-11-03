import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
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
            <h1 id="top" className="font-great-victorian text-[40px] md:text-[56px] font-medium mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <a href="#welcome" className="text-crypto-primary hover:text-crypto-primary/80 transition-colors text-lg font-medium">
                  Welcome to Kailasa!
                </a>
              </div>

              <div className="mb-8">
                <ol className="list-decimal list-inside space-y-2 text-white/90">
                  <li><a href="#services" className="text-crypto-primary hover:underline">OUR SERVICES</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#medical-disclaimer" className="text-crypto-primary hover:underline">Medical disclaimer</a></li>
                      <li><a href="#emergencies" className="text-crypto-primary hover:underline">Emergencies</a></li>
                      <li><a href="#modifications" className="text-crypto-primary hover:underline">Modifications to the Services</a></li>
                    </ol>
                  </li>
                  <li><a href="#membership" className="text-crypto-primary hover:underline">MEMBERSHIP & SUBSCRIPTIONS</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#becoming-member" className="text-crypto-primary hover:underline">Becoming a member</a></li>
                      <li><a href="#once-member" className="text-crypto-primary hover:underline">Once a member</a></li>
                      <li><a href="#your-membership" className="text-crypto-primary hover:underline">Your membership</a></li>
                      <li><a href="#subscriptions" className="text-crypto-primary hover:underline">Subscriptions</a></li>
                      <li><a href="#device-requirements" className="text-crypto-primary hover:underline">Device Requirements</a></li>
                    </ol>
                  </li>
                  <li><a href="#cancellation" className="text-crypto-primary hover:underline">CANCELLATION OF SERVICES</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#cancel-you" className="text-crypto-primary hover:underline">Cancellation by you</a></li>
                      <li><a href="#cancel-us" className="text-crypto-primary hover:underline">Cancellation by us</a></li>
                    </ol>
                  </li>
                  <li><a href="#storage" className="text-crypto-primary hover:underline">GENERAL PRACTICES REGARDING USE AND STORAGE</a></li>
                  <li><a href="#mobile" className="text-crypto-primary hover:underline">MOBILE SERVICES</a></li>
                  <li><a href="#conditions" className="text-crypto-primary hover:underline">CONDITIONS OF USE</a>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                      <li><a href="#user-conduct" className="text-crypto-primary hover:underline">User Conduct</a></li>
                      <li><a href="#international-use" className="text-crypto-primary hover:underline">Special notice for international use; Export controls</a></li>
                      <li><a href="#commercial-use" className="text-crypto-primary hover:underline">Commercial use</a></li>
                      <li><a href="#minors" className="text-crypto-primary hover:underline">Use of Kailasa by minors</a></li>
                    </ol>
                  </li>
                  <li><a href="#app-stores" className="text-crypto-primary hover:underline">APPLE APP STORE AND GOOGLE PLAY STORE LEGAL INFORMATION</a></li>
                  <li><a href="#intellectual" className="text-crypto-primary hover:underline">INTELLECTUAL PROPERTY RIGHTS</a></li>
                  <li><a href="#third-party" className="text-crypto-primary hover:underline">THIRD PARTY WEBSITES</a></li>
                  <li><a href="#social" className="text-crypto-primary hover:underline">SOCIAL NETWORKING SERVICES</a></li>
                  <li><a href="#warranty" className="text-crypto-primary hover:underline">WARRANTY, INDEMNITY AND LIABILITY</a></li>
                  <li><a href="#dispute" className="text-crypto-primary hover:underline">DISPUTE RESOLUTION BY BINDING ARBITRATION</a></li>
                  <li><a href="#general" className="text-crypto-primary hover:underline">GENERAL CONDITIONS</a></li>
                  <li><a href="#privacy" className="text-crypto-primary hover:underline">YOUR PRIVACY</a></li>
                </ol>
              </div>

              <div className="space-y-6 text-white/90 leading-relaxed">
                <div id="welcome">
                  <h2 className="font-great-victorian text-2xl md:text-3xl font-medium mb-4 mt-8">Welcome to Kailasa!</h2>
                  <p className="mb-4">
                    We're so happy to have you here. These Terms of Service ("Terms") govern your use of
                    Kailasa and the software, content, and services (collectively, "Services") offered through our website,
                    <a href="https://kailasa.app" className="text-crypto-primary hover:underline"> kailasa.app</a> and its subdomains (the
                    "Website"), our mobile apps Kailasa for Android and Kailasa for iOS (the "Apps").
                  </p>
                  <p className="mb-4">Please read these terms carefully before you start using the Services.</p>
                  <p className="mb-4">
                    The terms "Kailasa," "us," or "we" refer to IGURU INNOVATIONS LLC, a software company that designed and
                    built Kailasa, incorporated in California, and operating in San Francisco, CA.
                  </p>
                  <p className="mb-4">
                    The term "device" refers to the device that is used to access the Services, including but not limited
                    to computers, smartphones, and tablets.
                  </p>
                  <p className="mb-4">The term "you" refers to the user of the Services.</p>
                  <p className="mb-4">
                    When you sign up for any of the Services or otherwise use or access them, you agree to be bound by
                    these Terms and all applicable laws, rules, and regulations. By using the Services, you indicate that
                    you accept these Terms and that you agree to abide by them. If you do not agree to these Terms,
                    please refrain from using the services.
                  </p>
                  <p className="mb-4">
                    Our contact email address is <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a>.
                    All correspondence to Kailasa, including any queries you may have regarding your use of the Services or
                    these Terms, should be sent to this contact email address.
                  </p>
                  <p className="mb-4 font-bold text-yellow-400">
                    PLEASE NOTE THAT THESE TERMS CONTAIN AN ARBITRATION CLAUSE. EXCEPT FOR CERTAIN TYPES OF
                    DISPUTES MENTIONED IN THE ARBITRATION CLAUSE, YOU AND KAILASA AGREE THAT DISPUTES RELATING TO THESE TERMS OR YOUR USE OF THE SERVICES WILL BE RESOLVED BY MANDATORY
                    BINDING ARBITRATION, AND YOU AND KAILASA WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                  </p>
                </div>

                <ol className="list-decimal list-inside space-y-8">
                  <li id="services">
                    <span className="font-semibold text-xl">OUR SERVICES</span>
                    <p className="mt-2">Kailasa offers a personal chatbot service through a text and voice interface.</p>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="medical-disclaimer">
                        <span className="font-semibold">Medical disclaimer</span>
                        <p className="mt-2">
                          Kailasa is a provider of software and content designed to improve your health, wealth, and
                          happiness. However, we are not a healthcare or medical device provider, nor should our Services
                          be considered medical care, mental health services, or other professional services. Only your
                          physician or other healthcare providers can do that. While there is third-party evidence from
                          research that certain conversation techniques implemented in Kailasa can assist in the recovery
                          process for a wide array of conditions, Kailasa makes no claims, representations, or guarantees
                          that the Services provide a therapeutic benefit.
                        </p>
                      </li>
                      <li id="emergencies">
                        <span className="font-semibold">Emergencies</span>
                        <p className="mt-2">
                          Use of the Services is not for emergencies. If you think you have a medical or mental health
                          emergency, call 911 or go to the nearest open clinic or emergency room.
                        </p>
                        <p className="mt-2">
                          If you are considering or committing suicide or feel that you are a danger to yourself or others,
                          you must discontinue use of the Services immediately, call 911, or notify appropriate police or
                          emergency medical personnel.
                        </p>
                      </li>
                      <li id="modifications">
                        <span className="font-semibold">Modifications to the Services</span>
                        <p className="mt-2">
                          We reserve the right to modify or discontinue, temporarily or permanently, the Services (or any
                          part thereof) with or without notice. You agree that Kailasa will not be liable to you or any
                          third party for any modification, suspension, or discontinuance of any of the Services.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li id="membership">
                    <span className="font-semibold text-xl">MEMBERSHIP & SUBSCRIPTIONS</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="becoming-member">
                        <span className="font-semibold">Becoming a member</span>
                        <p className="mt-2">
                          You will be required to register ("create an account") with Kailasa and become a Kailasa Member
                          to access and use the Services. If you choose to register for the Services, you agree to provide
                          and maintain true, accurate, current, and complete information about yourself as prompted by the
                          registration forms. Registration data and certain other information about you are governed by
                          our Privacy Policy.
                        </p>
                      </li>
                      <li id="once-member">
                        <span className="font-semibold">Once a member</span>
                        <p className="mt-2">
                          You are responsible for maintaining the confidentiality of your password and account, if any, and
                          are fully responsible for any activities that occur under your password or account. You agree to
                          (a) immediately notify Kailasa of any unauthorized use of your password or account or any other
                          breach of security and (b) ensure that you exit from your account at the end of each session
                          when accessing the Services. Kailasa will not be liable for any loss or damage arising from your
                          failure to comply with this Section.
                        </p>
                      </li>
                      <li id="your-membership">
                        <span className="font-semibold">Your membership</span>
                        <p className="mt-2">
                          As a Kailasa Member, you will receive access to content, features, and functions of the Services
                          that are not available to non-members.
                        </p>
                        <p className="mt-2">
                          By agreeing to become a Member, you opt-in to receive occasional special offers, marketing,
                          survey, and Service-based communication emails. You can easily unsubscribe from Kailasa
                          commercial emails by following the opt-out instructions in these emails. Kailasa memberships and
                          subscriptions are not transferable and, therefore, cannot be sold, exchanged, or transferred in
                          any way whatsoever.
                        </p>
                      </li>
                      <li id="subscriptions">
                        <span className="font-semibold">Subscriptions</span>
                        <p className="mt-2">
                          Once you become a Kailasa Member, you can choose one of the subscription programs offered in
                          Kailasa:
                        </p>
                        <p className="mt-2">
                          <strong>"Free Use":</strong> a free-of-charge program that gives limited access to the Services.
                          The "Free Use" is aimed at users who cannot afford any of our subscription-fee-based programs.
                          We reserve the right to deny the free use to anyone at any time at our discretion.
                        </p>
                        <p className="mt-2">
                          <strong>"Kailasa Pro":</strong> a subscription-fee-based program that gives full access to the
                          Services.
                        </p>
                        <p className="mt-2">
                          You can become a subscriber to a paid subscription program (the "Paid Subscriptions") by
                          purchasing a subscription to the Services within the Apps, where allowed by the App marketplace
                          partners (Apple iTunes Store and Google Play store).
                        </p>
                        <p className="mt-2">
                          Any of our paid subscriptions shall be paid in monthly, semi-annual, or annual installments and
                          processed by the App marketplace partner through which you originally acquired the subscription.
                        </p>
                        <p className="mt-2">
                          You will only have access to a paid subscription while it is active and subsisting. Should you
                          fail to pay your subscription within 7 days after the due date, you will automatically downgrade
                          to "Free Use."
                        </p>
                        <p className="mt-2">
                          The renewal subscription fees will continue to be billed to the Payment Method you provided
                          through the marketplace automatically until canceled. You must cancel your subscription before
                          it renews each billing period to avoid billing the next subscription fee to the Payment Method
                          you provided. Refunds cannot be claimed for any partial-month subscription period.
                        </p>
                        <p className="mt-2">
                          You can modify or cancel your paid subscription only through the App marketplace where you
                          originally acquired the subscription. To view, modify, or cancel your subscription, you may be
                          required to be authenticated under the same user ID by the marketplace partner.
                        </p>
                        <p className="mt-2">
                          <strong>Refunds:</strong> Please note that if you purchase a subscription through the Apple iTunes
                          Store or our iPhone application, the sale is final, and we will not provide a refund. Your
                          purchase will be subject to Apple's applicable payment policy, which also may not provide for
                          refunds.
                        </p>
                        <p className="mt-2">
                          If you purchase a subscription through the Google Play store, the sale is final, and we will not
                          provide a refund. Your purchase will be subject to Google's applicable payment policy, which
                          also may not provide for refunds.
                        </p>
                        <p className="mt-2">
                          If you purchase a subscription through our website (via Stripe, PayPal, or another payment
                          processor), the sale is final, and we will not provide a refund.
                        </p>
                        <p className="mt-2">
                          Please note that the 14-day-after-purchase refund policy for EU residents does not apply to the
                          provided access to the digital product.
                        </p>
                      </li>
                      <li id="device-requirements">
                        <span className="font-semibold">Device Requirements</span>
                        <p className="mt-2">
                          To enjoy Kailasa via your smartphone or other Device, your Device must satisfy certain system
                          requirements. These requirements can be found on the Website and the Google and Apple App
                          marketplaces.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li id="cancellation">
                    <span className="font-semibold text-xl">CANCELLATION OF SERVICES</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="cancel-you">
                        <span className="font-semibold">Cancellation by you</span>
                        <p className="mt-2">
                          You may cancel your Membership at any time by deleting your account in the app. This action is
                          irreversible. As soon as you delete your account, all the data associated with your use of the
                          Services will be removed permanently. Upon your account deletion, cancellation of a Paid
                          Subscription is effective at the end of the applicable billing period.
                        </p>
                        <p className="mt-2">
                          You may cancel a Paid Subscription and downgrade to "Free Use" at any time without deleting your
                          account. Cancellation is effective at the end of the applicable billing period.
                        </p>
                        <p className="mt-2">
                          Please note that if you purchase a Paid Subscription through the Apple iTunes Store or our iPhone
                          application, you may cancel your subscription by canceling the automatic renewal of paid App
                          Subscriptions by selecting Manage App Subscriptions in your iTunes Account settings and selecting
                          the subscription you want to modify.
                        </p>
                        <p className="mt-2">
                          If you purchase a Paid Subscription through the Google Play store, you may cancel automatic
                          renewals in account settings under Subscriptions in the Google Play app or according to the current
                          process outlined by Google Play.
                        </p>
                      </li>
                      <li id="cancel-us">
                        <span className="font-semibold">Cancellation by us</span>
                        <p className="mt-2">
                          We may suspend or terminate your use of the Services as a result of your fraud or breach of any
                          obligation under these Terms. Such termination or suspension may be immediate and without notice.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li id="storage">
                    <span className="font-semibold text-xl">GENERAL PRACTICES REGARDING USE AND STORAGE</span>
                    <p className="mt-2">
                      You acknowledge that we may establish general practices and limits concerning the use of the
                      Services, including without limitation the maximum period that data or other content will be
                      retained by the Services and the maximum storage space that will be allotted on our servers on your
                      behalf. You agree that Kailasa has no responsibility or liability for the deletion or failure to
                      store any data or other content maintained or uploaded by the Services. You acknowledge that we
                      reserve the right to terminate accounts that are inactive for an extended time. You further
                      acknowledge that we reserve the right to change these general practices and limits at any time, in
                      its sole discretion, with or without notice.
                    </p>
                  </li>

                  <li id="mobile">
                    <span className="font-semibold text-xl">MOBILE SERVICES</span>
                    <p className="mt-2">
                      Some of our Services are available via a mobile device, including (i) the ability to upload content
                      to the Services via a mobile device, (ii) the ability to browse the Services and the Website from a
                      mobile device, and (iii) the ability to access certain features through an application downloaded
                      and installed on a mobile device (collectively, the "Mobile Services"). To the extent you access
                      the Services through a mobile device, your wireless service carrier's standard charges, data rates,
                      and other fees may apply.
                    </p>
                    <p className="mt-2">
                      In addition, downloading, installing, or using certain Mobile Services may be prohibited or
                      restricted by your carrier, and not all Mobile Services may work with all carriers or devices. By
                      using the Mobile Services, you agree that we may communicate with you regarding Kailasa and other
                      entities by SMS, MMS, text message, or other electronic means to your mobile device and that
                      certain information about your usage of the Mobile Services may be communicated to us.
                    </p>
                    <p className="mt-2">
                      In the event you change or deactivate your mobile telephone number, you agree to promptly update
                      your Kailasa account information to ensure that your messages are not sent to the person who
                      acquired your old number.
                    </p>
                  </li>

                  <li id="conditions">
                    <span className="font-semibold text-xl">CONDITIONS OF USE</span>
                    <ol className="list-decimal list-inside ml-6 mt-4 space-y-6">
                      <li id="user-conduct">
                        <span className="font-semibold">User Conduct</span>
                        <p className="mt-2">
                          You are solely responsible for all code, video, images, information, data, text, software, music,
                          sound, photographs, graphics, messages, or other materials ("content") that you upload, post,
                          publish, or display (hereinafter, "upload") or email or otherwise use via the Services. The
                          following are examples of the kind of content and/or use that is illegal or prohibited by
                          Kailasa. We reserve the right to investigate and take appropriate legal action against anyone who,
                          in our sole discretion, violates this provision, including, without limitation, removing the
                          offending content from the Services, suspending or terminating the account of such violators, and
                          reporting you to the law enforcement authorities. You agree to not use the Services to:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                          <li>Email or otherwise upload any content that infringes any intellectual property or other proprietary rights of any party; that you do not have a right to upload under any law or under contractual or fiduciary relationships; that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; that poses or creates a privacy or security risk to any person; that constitutes unsolicited or unauthorized advertising, promotional materials, commercial activities and/or sales, "junk mail," "spam," "chain letters," "pyramid schemes," "contests," "sweepstakes," or any other form of solicitation; that is unlawful, harmful, threatening, abusive, harassing, tortious, excessively violent, defamatory, vulgar, obscene, pornographic, libelous, invasive of another's privacy, hateful racially, ethnically or otherwise objectionable; or that in the sole judgment of Kailasa, is objectionable or which restricts or inhibits any other person from using or enjoying the Services, or which may expose Kailasa or its users to any harm or liability of any type;</li>
                          <li>Interfere with or disrupt the Services or servers or networks connected to the Services, or disobey any requirements, procedures, policies, or regulations of networks connected to the Services;</li>
                          <li>Violate any applicable local, state, national, or international law or any regulations having the force of law;</li>
                          <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
                          <li>Solicit personal information from anyone under the age of 18;</li>
                          <li>Harvest or collect email addresses or other contact information of other users from the Services by electronic or other means to send unsolicited emails or other unsolicited communications;</li>
                          <li>Advertise or offer to sell or buy any goods or services for any business purpose that is not specifically authorized;</li>
                          <li>Further or promote any criminal activity or enterprise or provide instructional information about illegal activities; or</li>
                          <li>Obtain or attempt to access or otherwise obtain any materials or information through any means not intentionally made available or provided for through the Services.</li>
                        </ul>
                      </li>
                      <li id="international-use">
                        <span className="font-semibold">Special notice for international use; Export controls</span>
                        <p className="mt-2">
                          Software (defined below) available in connection with the Services and the transmission of
                          applicable data, if any, is subject to United States export controls. No Software may be
                          downloaded from the Services or otherwise exported or re-exported in violation of U.S. export laws.
                          Downloading or using the Software is at your sole risk. Recognizing the global nature of the
                          Internet, you agree to comply with all local rules and laws regarding your use of the Service,
                          including as it concerns online conduct and acceptable content.
                        </p>
                      </li>
                      <li id="commercial-use">
                        <span className="font-semibold">Commercial use</span>
                        <p className="mt-2">
                          The Service is for your personal use only. Unless otherwise expressly authorized herein or in the
                          Services, you agree not to display, distribute, license, perform, publish, reproduce, duplicate,
                          copy, create derivative works from, modify, sell, resell, exploit, transfer, or upload for any
                          commercial purposes, any portion of the Services, use of the Services, or access to the Services.
                        </p>
                      </li>
                      <li id="minors">
                        <span className="font-semibold">Use of Kailasa by minors</span>
                        <p className="mt-2">
                          If you are under 18, you are not authorized to use the Services, with or without registering.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li id="app-stores">
                    <span className="font-semibold text-xl">APPLE APP STORE AND GOOGLE PLAY STORE LEGAL INFORMATION</span>
                    <p className="mt-2">
                      These Terms apply to your use of all the Services, including the iPhone application available via
                      Apple, Inc. ("Apple") App Store (the "Applications") and the Android application available via
                      Google, Inc. ("Google") Play Store (the "Applications"), but the following additional terms also
                      apply to the Applications:
                    </p>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                      <li>Both you and Kailasa acknowledge that the Terms are concluded between you and Kailasa only, and not
                        with Apple and Google and that Apple and Google are not responsible for the Application or the
                        Content;</li>
                      <li>The Application is licensed to you on a limited, non-exclusive, non-transferrable,
                        non-sublicensable basis, solely to be used in connection with the Services for your private,
                        personal, non-commercial use, subject to all the terms and conditions of this Agreement as they
                        apply to the Services;</li>
                      <li>You will only use the Application in connection with an Apple device that you own or control;</li>
                      <li>You acknowledge and agree that Apple has no obligation whatsoever to furnish any maintenance and
                        support services concerning the Application;</li>
                      <li>In the event of any failure of the Application to conform to any applicable warranty, including
                        those implied by law, you may notify Apple or Google of such failure; upon notification, Apple and
                        Google's sole warranty obligation to you will be to refund you the purchase price, if any, of the
                        Application;</li>
                      <li>You acknowledge and agree that Kailasa, and not Apple or Google, is responsible for addressing any
                        claims you or any third party may have concerning the Application;</li>
                      <li>You acknowledge and agree that in the event of any third party claim that the Application or your
                        possession and use of the Application infringes that third party's intellectual property rights,
                        Kailasa, and not Apple or Google, will be responsible for the investigation, defense, settlement,
                        and discharge of any such infringement claim;</li>
                      <li>You represent and warrant that you are not located in a country subject to a U.S. Government
                        embargo or that has been designated by the U.S. Government as a "terrorist supporting" country and
                        that you are not listed on any U.S. Government list of prohibited or restricted parties;</li>
                      <li>Both you and Kailasa acknowledge and agree that, in your use of the Application, you will comply
                        with any applicable third-party terms of the agreement which may affect or be affected by such use;
                        and</li>
                      <li>Both you and Kailasa acknowledge and agree that Apple and Apple's subsidiaries and Google and
                        Google's subsidiaries are third-party beneficiaries of this Agreement and that upon your acceptance
                        of this Agreement, Apple and Google will have the right (and will be deemed to have accepted the
                        right) to enforce this Agreement against you as the third party beneficiary hereof.</li>
                    </ul>
                  </li>

                  <li id="intellectual">
                    <span className="font-semibold text-xl">INTELLECTUAL PROPERTY RIGHTS</span>
                    <p className="mt-2">
                      You acknowledge and agree that the Services may contain content or features ("Service Content")
                      that are protected by copyright, patent, trademark, trade secret, or other proprietary rights and
                      laws. Except as expressly authorized by Kailasa, you agree not to modify, copy, frame, scrape, rent,
                      lease, loan, sell, distribute, or create derivative works based on the Services or the Service
                      Content, in whole or in part, except that the foregoing does not apply to your User Content (as
                      defined below) that you legally upload to the Services. In connection with your use of the Services,
                      you will not engage in or use any data mining, robots, scraping, or similar data gathering or
                      extraction methods.
                    </p>
                    <p className="mt-2">
                      The Kailasa name and logos are trademarks and service marks of Kailasa (collectively the "Kailasa
                      Trademarks"). Other company, product, and service names and logos used and displayed via the
                      Services may be trademarks or service marks of their respective owners, who may or may not endorse
                      or be affiliated with or connected to Kailasa. Nothing in these Terms of Service or the Services
                      should be construed as granting, by implication, estoppel, or otherwise, any license or right to
                      use any of Kailasa Trademarks displayed on the Services without our prior written permission in each
                      instance.
                    </p>
                    <p className="mt-2">
                      Concerning the content or other materials you upload through the Services or share with other users
                      or recipients (collectively, "User Content"), you represent and warrant that you own all rights,
                      titles, and interest in and to such User Content, including, without limitation, all copyrights and
                      rights of publicity contained therein. By uploading any User Content, you hereby grant and will
                      grant Kailasa and its affiliated companies a nonexclusive, worldwide, royalty-free, fully paid up,
                      transferable, sublicensable, perpetual, irrevocable license to copy, display, upload, perform,
                      distribute, store, modify and otherwise use your User Content in connection with the operation of
                      the Services or the promotion, advertising or marketing thereof in any form, medium or technology
                      now known or later developed.
                    </p>
                    <p className="mt-2">
                      If you believe that your work has been copied in a way that constitutes copyright infringement or
                      that your intellectual property rights have been otherwise violated, you should notify Kailasa of
                      your infringement claim by emailing us at <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a> (Subject line: "DMCA Takedown Request").
                    </p>
                  </li>

                  <li id="third-party">
                    <span className="font-semibold text-xl">THIRD PARTY WEBSITES</span>
                    <p className="mt-2">
                      The Services may provide, or third parties may provide, links or other access to other sites and
                      resources on the Internet. We have no control over such sites and resources, and we are not
                      responsible for and do not endorse such sites and resources. You further acknowledge and agree that
                      Kailasa will not be responsible or liable, directly or indirectly, for any damage or loss caused or
                      alleged to be caused by or in connection with the use of or reliance on any content, events, goods,
                      or services available on or through any such site or resource. Any dealings you have with third
                      parties found while using the Services are between you and the third party, and you agree that
                      Kailasa is not liable for any loss or claim that you may have against any such third party.
                    </p>
                  </li>

                  <li id="social">
                    <span className="font-semibold text-xl">SOCIAL NETWORKING SERVICES</span>
                    <p className="mt-2">
                      You may enable, connect, or log in to the Services via various online third-party services, such
                      as social media and social networking services like Facebook, Instagram, or Twitter ("Social
                      Networking Services"). By logging in or directly integrating these Social Networking Services into
                      the Services, we make your online experiences richer and more personalized. To take advantage of
                      this feature and capabilities, we may ask you to authenticate, register for, or log into Social
                      Networking Services on the websites of their respective providers. As part of such integration,
                      the Social Networking Services will provide us with access to certain information that you have
                      provided to such Social Networking Services, and we will use, store, and disclose such information
                      following our Privacy Policy.
                    </p>
                  </li>

                  <li id="warranty">
                    <span className="font-semibold text-xl">WARRANTY, INDEMNITY AND LIABILITY</span>
                    <p className="mt-2">
                      You agree to release, indemnify, and hold Kailasa and its affiliates and their officers, employees,
                      directors, and agents (collectively, "Indemnitees") harmless from any losses, damages, expenses,
                      including reasonable attorneys' fees, rights, claims, actions of any kind and injury (including
                      death) arising out of or relating to your use of the Services, any User Content, your connection to
                      the Services, your violation of these Terms of Service or your violation of any rights of another.
                    </p>
                    <p className="mt-2 font-bold">
                      YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS
                      AVAILABLE" BASIS. COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED
                      OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                      PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                    </p>
                    <p className="mt-2 font-bold">
                      KAILASA MAKES NO WARRANTY THAT (I) THE SERVICE WILL MEET YOUR REQUIREMENTS, (II) THE SERVICE WILL BE
                      UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF
                      THE SERVICE WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY PRODUCTS, SERVICES,
                      INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR
                      EXPECTATIONS.
                    </p>
                    <p className="mt-2 font-bold">
                      YOU EXPRESSLY UNDERSTAND AND AGREE THAT KAILASA WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                      SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT NOT LIMITED
                      TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF COMPANY HAS BEEN
                      ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
                      LIABILITY OR OTHERWISE.
                    </p>
                  </li>

                  <li id="dispute">
                    <span className="font-semibold text-xl">DISPUTE RESOLUTION BY BINDING ARBITRATION</span>
                    <p className="mt-2">
                      This Dispute Resolution by Binding Arbitration section is referred to in these Terms of Service as
                      the "Arbitration Agreement." You agree that any disputes or claims that have arisen or may arise
                      between you and Kailasa, whether arising out of or relating to these Terms of Service (including
                      any alleged breach thereof), the Services, any advertising, any aspect of the relationship, or
                      transactions between us, shall be resolved exclusively through final and binding arbitration, rather
                      than a court, by the terms of this Arbitration Agreement, except that you may assert individual
                      claims in small claims court if your claims qualify.
                    </p>
                    <p className="mt-2 font-bold">
                      YOU AND KAILASA AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS
                      AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR
                      PROCEEDING. UNLESS BOTH YOU AND KAILASA AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN
                      MORE THAN ONE PERSON'S OR PARTY'S CLAIMS AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A
                      CONSOLIDATED, REPRESENTATIVE, OR CLASS PROCEEDING.
                    </p>
                    <p className="mt-2">
                      Kailasa is always interested in resolving disputes amicably and efficiently, and most customer
                      concerns can be resolved quickly and to the customer's satisfaction by emailing customer support at
                      <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline"> support@kailasa.app</a>. If such efforts prove unsuccessful, a party who intends to seek arbitration
                      must first send to the other, by certified mail, a written Notice of Dispute ("Notice"). The Notice
                      to Kailasa should be sent to <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a>.
                    </p>
                    <p className="mt-2">
                      The arbitration will be conducted by a neutral arbitrator following the American Arbitration
                      Association's ("AAA") rules and procedures, including the AAA's Supplementary Procedures for
                      Consumer-Related Disputes (collectively, the "AAA Rules"), as modified by this Arbitration
                      Agreement.
                    </p>
                  </li>

                  <li id="general">
                    <span className="font-semibold text-xl">GENERAL CONDITIONS</span>
                    <p className="mt-2">
                      You agree that Kailasa, in its sole discretion, may suspend or terminate your account (or any part
                      thereof) or use of the Service and remove and discard any content within the Service for any reason,
                      including, without limitation, for lack of use or if Kailasa believes that you have violated or
                      acted inconsistently with the letter or spirit of these Terms of Service.
                    </p>
                    <p className="mt-2">
                      These Terms of Service will be governed by the laws of the State of California without regard to its
                      conflict of law provisions. Concerning any disputes or claims not subject to arbitration, as set
                      forth above, you and Kailasa agree to submit to the personal and exclusive jurisdiction of the state
                      and federal courts located within San Francisco County, California.
                    </p>
                  </li>

                  <li id="privacy">
                    <span className="font-semibold text-xl">YOUR PRIVACY</span>
                    <p className="mt-2">
                      At Kailasa, we respect the privacy of our users. For details, please see our Privacy Policy. By
                      using the Service, you consent to our collection and use of personal data as outlined therein.
                    </p>
                    <p className="mt-4 font-semibold">QUESTIONS? CONCERNS? SUGGESTIONS?</p>
                    <p className="mt-2">
                      Please contact us at <a href="mailto:support@kailasa.app" className="text-crypto-primary hover:underline">support@kailasa.app</a> to
                      report any violations of these Terms of Service or to ask us any questions regarding these Terms of Service or our Services.
                    </p>
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

