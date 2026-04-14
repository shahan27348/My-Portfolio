import React, { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MICRO_SAAS_PROJECTS } from "@/constants";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

const SectionTitle: React.FC<{
  number: string;
  title: string;
  subtitle: string;
}> = ({ number, title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-slate-light flex items-center justify-center gap-2">
      <span className="text-accent font-mono text-xl">{number}.</span>
      {title}
    </h2>
    <p className="text-accent mt-2">{subtitle}</p>
  </div>
);

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusColors = {
    Live: "bg-white/20 text-white border-white/50",
    "In Development": "bg-white/15 text-white/80 border-white/40",
    Planning: "bg-white/10 text-white/70 border-white/30",
    Archived: "bg-white/5 text-white/60 border-white/20",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-mono border ${
        statusColors[status as keyof typeof statusColors] || statusColors.Live
      }`}
    >
      {status}
    </span>
  );
};

const MicroSaaSCard: React.FC<{
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  status: "Live" | "In Development" | "Planning" | "Archived";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  users?: string;
  revenue?: string;
}> = ({
  name,
  tagline,
  description,
  technologies,
  features,
  status,
  liveUrl,
  githubUrl,
  imageUrl,
  users,
  revenue,
}) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div className="group bg-black rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
      {/* Image */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden bg-slate-dark/30">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <StatusBadge status={status} />
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-light group-hover:text-accent transition-colors mb-2">
            {name}
          </h3>
          <p className="text-accent font-mono text-sm">{tagline}</p>
        </div>

        {/* Description */}
        <p className="text-slate-dark leading-relaxed mb-4">{description}</p>

        {/* Metrics */}
        {(users || revenue) && (
          <div className="flex gap-6 mb-4 pb-4 border-b border-slate-dark/30">
            {users && (
              <div>
                <div className="text-xs text-slate-dark mb-1">Users</div>
                <div className="text-accent font-mono font-semibold">
                  {users}
                </div>
              </div>
            )}
            {revenue && (
              <div>
                <div className="text-xs text-slate-dark mb-1">Revenue</div>
                <div className="text-accent font-mono font-semibold">
                  {revenue}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-light mb-2">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-light mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {(showAllFeatures ? features : features.slice(0, 3)).map(
              (feature, index) => (
                <li
                  key={index}
                  className="text-sm text-slate-dark flex items-start"
                >
                  <span className="text-accent mr-2">▹</span>
                  {feature}
                </li>
              ),
            )}
          </ul>
          {features.length > 3 && (
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-sm text-accent hover:text-accent/80 mt-2 font-mono"
            >
              {showAllFeatures ? "Show less" : `+${features.length - 3} more`}
            </button>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-slate-dark/30">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-mono"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Visit Site
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-mono"
            >
              <GitHubIcon className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const MicroSaaS: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const filters = ["All", "Live", "In Development", "Planning"];

  const filteredProjects =
    filter === "All"
      ? MICRO_SAAS_PROJECTS
      : MICRO_SAAS_PROJECTS.filter((project) => project.status === filter);

  return (
    <AnimatedSection>
      <section id="microsaas" className="py-24">
        <SectionTitle
          number="7"
          title="Micro SaaS Projects"
          subtitle="Building Products That Solve Real Problems"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                filter === filterName
                  ? "bg-accent text-black border border-accent"
                  : "bg-transparent text-accent border border-accent hover:bg-accent/10"
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <MicroSaaSCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-slate-dark py-12">
            No projects found in this category.
          </div>
        )}

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-black rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold text-slate-light mb-6 text-center">
            Micro SaaS Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {MICRO_SAAS_PROJECTS.length}
              </div>
              <div className="text-slate-dark text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {MICRO_SAAS_PROJECTS.filter((p) => p.status === "Live").length}
              </div>
              <div className="text-slate-dark text-sm">Live Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {MICRO_SAAS_PROJECTS.reduce((acc, p) => {
                  const users = parseInt(
                    p.users?.replace(/[^0-9]/g, "") || "0",
                  );
                  return acc + users;
                }, 0).toLocaleString()}
                +
              </div>
              <div className="text-slate-dark text-sm">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                $
                {MICRO_SAAS_PROJECTS.reduce((acc, p) => {
                  const revenue = parseInt(
                    p.revenue?.replace(/[^0-9]/g, "") || "0",
                  );
                  return acc + revenue;
                }, 0).toLocaleString()}
              </div>
              <div className="text-slate-dark text-sm">Monthly Revenue</div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-slate-dark italic">
            "Building micro SaaS products allows me to turn ideas into
            revenue-generating businesses while solving real problems for users.
            Each project is a learning experience in product development,
            marketing, and entrepreneurship."
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default MicroSaaS;
