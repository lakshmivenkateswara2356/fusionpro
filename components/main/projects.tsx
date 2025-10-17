import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import Faq from '../../components/sub/Faq';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        See why our clients love us!
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
       
      </div>
    <Faq/>
    </section>
  );
};
