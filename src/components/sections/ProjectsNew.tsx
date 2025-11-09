import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card3D from "@/components/ui/Card3D";

const SectionTitle: React.FC<{ number: string; title: string }> = ({
  title,
}) => (
  <h2 className="text-3xl font-bold text-slate-light mb-12 flex items-center whitespace-nowrap">
    {title}
    <span className="block w-full max-w-xs h-px bg-tertiary ml-6"></span>
  </h2>
);

const ProjectsNew: React.FC = () => {
  return (
    <AnimatedSection>
      <section id="projects" className="py-24">
        <SectionTitle number="4" title="Things I've Built" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Card3D key={index}>
              <motion.div
                className="bg-secondary rounded-lg shadow-lg flex flex-col group h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-t-lg object-cover h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-light group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-dark hover:text-accent transition-colors duration-300"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <GitHubIcon className="w-6 h-6" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-dark hover:text-accent transition-colors duration-300"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLinkIcon className="w-6 h-6" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-dark mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-sm text-slate-dark">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="bg-tertiary px-2 py-1 rounded"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsNew;
