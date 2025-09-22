import React from 'react';
import { EXPERIENCES } from '../constants';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-3xl font-bold text-slate-light mb-12 flex items-center whitespace-nowrap">
        {title}
        <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
    </h2>
);

const Experience: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="experience" className="py-24">
        <SectionTitle number="2" title="Where I’ve Worked" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-tertiary hidden md:block"></div>
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={`mb-12 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              <div className="hidden md:flex justify-center items-center w-12">
                 <div className="z-10 bg-secondary p-2 rounded-full border-2 border-accent">
                   <div className="w-3 h-3 bg-accent rounded-full"></div>
                 </div>
              </div>
              <div className="w-full md:w-5/12 bg-secondary p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-light mb-1">{exp.role} @ <span className="text-accent">{exp.company}</span></h3>
                <p className="text-sm text-slate-dark font-mono mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex">
                      <span className="text-accent mr-3">▹</span>
                      <p className="text-slate-dark">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Experience;