import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COURSES } from "@/constants";
import { ExternalLinkIcon } from "@/components/icons";

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

const CourseCard: React.FC<{
  title: string;
  platform: string;
  instructor?: string;
  duration: string;
  completionDate?: string;
  certificateUrl?: string;
  skills: string[];
  description: string;
}> = ({
  title,
  platform,
  instructor,
  duration,
  completionDate,
  certificateUrl,
  skills,
  description,
}) => (
  <div className="group bg-navy-light rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-slate-dark/50 hover:border-accent/50">
    <div className="flex items-start justify-between gap-4 mb-3">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-slate-light group-hover:text-accent transition-colors mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-dark">
          <span className="font-mono text-accent">{platform}</span>
          {instructor && <span>• {instructor}</span>}
          <span>• {duration}</span>
        </div>
      </div>
      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-accent hover:text-accent/80 transition-colors"
          aria-label="View Certificate"
        >
          <ExternalLinkIcon className="w-5 h-5" />
        </a>
      )}
    </div>

    <p className="text-slate-dark leading-relaxed mb-4">{description}</p>

    {/* Skills Tags */}
    <div className="flex flex-wrap gap-2 mb-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono"
        >
          {skill}
        </span>
      ))}
    </div>

    {completionDate && (
      <div className="text-sm text-accent font-mono">
        Completed: {completionDate}
      </div>
    )}
  </div>
);

const Courses: React.FC = () => {
  // Group courses by completion status
  const completedCourses = COURSES.filter((course) => course.completionDate);

  return (
    <AnimatedSection>
      <section id="courses" className="py-24">
        <SectionTitle
          number="6"
          title="Courses & Certifications"
          subtitle="Continuous Learning Journey"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {completedCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Learning Stats */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-navy-light rounded-lg border border-slate-dark/50">
          <h3 className="text-xl font-semibold text-slate-light mb-6 text-center">
            Learning Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {COURSES.length}
              </div>
              <div className="text-slate-dark text-sm">Courses Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {COURSES.reduce((acc, course) => {
                  const hours = parseInt(course.duration);
                  return acc + (isNaN(hours) ? 0 : hours);
                }, 0)}
                +
              </div>
              <div className="text-slate-dark text-sm">Hours of Learning</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-accent mb-2">
                {new Set(COURSES.flatMap((c) => c.skills)).size}+
              </div>
              <div className="text-slate-dark text-sm">Skills Acquired</div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-slate-dark italic">
            "Continuous learning is the key to staying relevant in the
            ever-evolving tech landscape. I'm committed to expanding my skills
            and knowledge through structured courses and hands-on practice."
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Courses;
