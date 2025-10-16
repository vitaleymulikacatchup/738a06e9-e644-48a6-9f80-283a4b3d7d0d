"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [{"id":"hero-image","url":"https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"High-End Gaming PC Interior with Colorful RGB Lights"},{"id":"feature-image-1","url":"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Colleagues discussing data and strategy in an office meeting."},{"id":"feature-image-2","url":"https://images.pexels.com/photos/7964501/pexels-photo-7964501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professional men conversing in a well-lit corridor, showcasing teamwork and cooperation."}];

const App = () => {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
    <div id="nav" data-section="nav">
      <NavbarStyleApple
        navItems={[
          { name: "Home", id: "home" },
          { name: "Features", id: "features" },
          { name: "Pricing", id: "pricing" },
          { name: "Contact", id: "contact" },
          { name: "About", id: "about" }
        ]}
        brandName="Your Brand"
      />
    </div>
    <div id="hero" data-section="hero" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <HeroSplit
          title="Innovate with Confidence"
          description="Empower your business with cutting-edge technology"
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
          buttons={[
            { text: "Get Started", href: "https://example.com" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
    </div>
    <div id="about" data-section="about" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <TextAbout
          title="We build products that empower teams to create exceptional digital experiences"
          buttons={[
            { text: "Get Started", href: "https://example.com" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
    </div>
    <div id="feature" data-section="feature" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <FeatureCardOne
          features={[
            { title: "Advanced Analytics", description: "Get detailed insights into your business performance", imageSrc: assetMap.find(a => a.id === "feature-image-1")?.url },
            { title: "Seamless Collaboration", description: "Work together effortlessly with state-of-the-art tools", imageSrc: assetMap.find(a => a.id === "feature-image-2")?.url }
          ]}
        />
      </div>
    </div>
    <div id="pricing" data-section="pricing" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <PricingCardOne
          plans={[
            { id: "basic", badge: "Great Value", price: "$29/mo", subtitle: "Suitable for small teams", features: ["Up to 5 team members", "50GB storage", "Email support"] },
            { id: "premium", badge: "Best Seller", price: "$49/mo", subtitle: "Ideal for growing teams", features: ["Unlimited team members", "250GB storage", "24/7 support"] }
          ]}
        />
      </div>
    </div>
    <div id="testimonials" data-section="testimonials" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <TestimonialCardTwo
          testimonials={[
            { id: "1", name: "Sarah M.", role: "Director of Operations", testimonial: "The service provided by this company is outstanding!", icon: Quote }
          ]}
        />
      </div>
    </div>
    <div id="contact" data-section="contact" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Subscribe to get the latest updates and offers."
          imageSrc={assetMap.find(a => a.id === "feature-image-1")?.url}
          onSubmit={(email) => console.log(email)}
        />
      </div>
    </div>
    <div id="footer" data-section="footer" className="scroll-mt-24">
      <div className="mx-auto px-4 md:px-6">
        <FooterLogoEmphasis
          columns={[
            { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
            { items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
          ]}
          logoText="Your Brand"
        />
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;