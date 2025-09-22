import React from 'react';
import { PROJECTS } from '../constants';
import { GitHubIcon, ExternalLinkIcon } from './icons';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-3xl font-bold text-slate-light mb-12 flex items-center whitespace-nowrap">
        {title}
        <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
    </h2>
);


const Projects: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="projects" className="py-24">
        <SectionTitle number="4" title="Things I’ve Built" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-secondary rounded-lg shadow-lg flex flex-col group transition-transform duration-300 hover:-translate-y-2">
              <img src={project.imageUrl} alt={project.title} className="rounded-t-lg object-cover h-48" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-light group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-dark hover:text-accent transition-colors duration-300">
                        <GitHubIcon className="w-6 h-6" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-dark hover:text-accent transition-colors duration-300">
                        <ExternalLinkIcon className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-dark mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 font-mono text-sm text-slate-dark">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-tertiary px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;