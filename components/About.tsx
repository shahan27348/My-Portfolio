import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-3xl font-bold text-slate-light mb-8 flex items-center whitespace-nowrap">
        {title}
        <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
    </h2>
);

const About: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="about" className="py-24">
        <SectionTitle number="1" title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3 text-slate-dark text-lg space-y-4">
            <p>
              Hello! I'm Shahan, a Full Stack Developer based in Lahore, Pakistan a passion for creating intuitive, dynamic user experiences. My journey into web development started back in 2023 when I decided to try editing a custom Tumblr theme — turns out hacking together a custom reblog button taught me a lot about React!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at  a start-up. My main focus these days is building accessible, inclusive products and digital experiences at Ichonic Inc. for a variety of clients.
            </p>
            <p>
              I'm a firm believer in continuous learning and I'm always on the lookout for new technologies and frameworks to explore. When I'm not at the computer, I'm usually exploring the city, playing COD 4 or PUBG Mobile, trying new resturant, and some times waste time by using cell phone.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center items-start">
              <div className="relative group w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-accent rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <img 
                      src="/images/shahn.png" 
                      alt="Muhammad Shahan" 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 filter grayscale hover:filter-none"
                  />
              </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;